;(function($) {
    var init = function() {
        $("#getIntersection").click(function(e){
            e.preventDefault();
            $('#intersectionTable > tbody').empty();
            $('#timelineTable').addClass('hidden');
            $('#username').val('');
            fetchIntersection();
        });
    };

    var makePath = function() {
        return "/intersection/" + $("#firstUser").val() + "/" + $("#secondUser").val();
    };

    var displayIntersection = function(following_users) {
        var rows = '';
        following_users.forEach(function(tweet) {
            var columns = '';
            columns += '<td>' + tweet['screen_name'] + '</td>';
            columns += '<td>' + tweet['name'] + '</td>';
            columns += '<td>' + tweet['description'] + '</td>';
            columns += '<td>' + tweet['location'] + '</td>';
            rows += '<tr>' + columns + '</tr>';
        });
        $('#intersectionTable tbody').append(rows);
        $('#intersectionTable').removeClass('hidden');
    };

    var fetchIntersection = function() {
        return $.ajax({
            type: "GET",
            url: makePath(),
            success: function(response) {
                displayIntersection(response[0]);
            },
            error: function(e) {
                alert(e.responseJSON.error);
            }
        });
    };

    $(init);
})(jQuery);
