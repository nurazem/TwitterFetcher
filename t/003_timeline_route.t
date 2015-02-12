use Test::More tests => 2;
use strict;
use warnings;

# the order is important
use TwitterFetcher;
use Dancer::Test;

route_exists [GET => '/timeline/:username'], 'a route handler is defined for /timeline/:username';

no warnings 'redefine';
local *TwitterFetcher::TwitterClient::timeline = sub {
    return (1, 2, 3);
};
use warnings;

response_status_is ['GET' => '/timeline/:username'], 200, 'response status is 200 for /timeline/:username';
