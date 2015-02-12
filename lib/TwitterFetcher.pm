package TwitterFetcher;

require JSON;
require Net::Twitter;

use Dancer ':syntax';
use TwitterClient;

set serializer => 'JSON';

get '/' => sub {
    template 'index';
};

get '/intersection/:username1/:username2' => sub {
    return TwitterFetcher::TwitterClient::following_intersection(params->{username1}, params->{username2});
};

get '/timeline/:username' => sub {
    return TwitterFetcher::TwitterClient::timeline(params->{username});
};

true;
