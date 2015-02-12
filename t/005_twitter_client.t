use Test::More tests => 1;
use strict;
use warnings;

# the order is important
use TwitterFetcher;

#Test array_intersection subroutine
my @a = (2, 3, 4, 5);
my @b = (1, 2, 3, 6, 7);
my @c = (2, 3);
my @intersection = TwitterFetcher::TwitterClient::array_intersection(\@a, \@b);
is_deeply(\@intersection, \@c, 'Returns correct intersection of two arrays');

