package TwitterFetcher;

require JSON;
require Net::Twitter;

use Dancer ':syntax';

set serializer => 'JSON';

my $twitter = Net::Twitter->new(
    traits              => [qw/API::RESTv1_1/],
    consumer_key        => config->{consumer_key},
    consumer_secret     => config->{consumer_secret},
    access_token        => config->{access_token},
    access_token_secret => config->{access_token_secret},
);

sub timeline {
    return $twitter->user_timeline({
        screen_name => $_[0],
        count       => 20,
    });
}

get '/' => sub {
    template 'index';
};

get '/timeline/:username' => sub {
    return TwitterFetcher::timeline(params->{username});
};

true;
