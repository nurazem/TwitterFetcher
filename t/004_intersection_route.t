use Test::More tests => 2;
use strict;
use warnings;

# the order is important
use TwitterFetcher;
use Dancer::Test;

route_exists [GET => '/intersection/:username1/:username2'], 'a route handler is defined for /intersection/:username1/:username2';

no warnings 'redefine';
local *TwitterFetcher::TwitterClient::following_intersection = sub {
    return (1, 2, 3);
};
use warnings;

response_status_is ['GET' => '/intersection/:username1/:username2'], 200, 'response status is 200 for /intersection/:username1/:username2';
