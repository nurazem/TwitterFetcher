package TwitterFetcher::TwitterClient;

require JSON;
require Net::Twitter;

use Dancer ':syntax';

sub init {
    return Net::Twitter->new(
        traits              => [qw/API::RESTv1_1/],
        consumer_key        => $ENV{'TWITTER_CONSUMER_KEY'} || config->{consumer_key},
        consumer_secret     => $ENV{'TWITTER_CONSUMER_SECRET'} || config->{consumer_secret},
        access_token        => $ENV{'TWITTER_ACCESS_TOKEN'} || config->{access_token},
        access_token_secret => $ENV{'TWITTER_ACCESS_TOKEN_SECRET'} || config->{access_token_secret},
    );
};

sub array_intersection {
    my ($first, $second) = @_;
    my @intersection;

    my %first = map {$_ => 1} @{$first};

    for my $e (@{$second}) {
        if(exists $first{$e}) {
            push @intersection, $e;
        }
    }

    return @intersection;
};

sub get_twitter_users {
    my $user_ids = $_[0];
    my @users;
    my $twitter = init();

    while (my @batch = splice(@{$user_ids}, 0 , 100)) {
        push @users, $twitter->lookup_users({
            user_id          => \@batch,
            include_entities => 0,
        });
    }

    return @users;
}

sub get_following_user_ids {
    my $username = $_[0];
    my $response;
    my @following_ids;
    my $twitter = init();

    for (my $cursor = -1; $cursor; $cursor = $response->{next_cursor}) {
        $response = $twitter->following_ids({
            screen_name => $username,
            cursor      => $cursor,
        });
        push @following_ids, @{$response->{ids}};
    }
    return @following_ids;
}

sub following_intersection {
    my $first_username = $_[0];
    my $second_username = $_[1];

    my @first_user_following_ids = get_following_user_ids($first_username);
    my @second_user_following_ids = get_following_user_ids($second_username);

    my @intersection = array_intersection(\@first_user_following_ids, \@second_user_following_ids);
    my @following = get_twitter_users(\@intersection);
    return \@following;
};

sub timeline {
    my $twitter = init();
    return $twitter->user_timeline({
        screen_name => $_[0],
        count       => 20,
    });
};

true;
