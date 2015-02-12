;(function($) {
    var init = function() {
        $("#getTimeline").click(function(e){
            e.preventDefault();
            $('#timelineTable > tbody').empty();
            $('#intersectionTable').addClass('hidden');
            $('#firstUser').val('');
            $('#secondUser').val('');
            fetchTimeline();
        });
    };

    var makePath = function() {
        return "/timeline/" + $("#username").val();
    };

    var displayTimeline = function(tweets) {
        var rows = '';
        tweets.forEach(function(tweet) {
            var columns = '';
            columns += '<td>' + tweet['text'] + '</td>';
            columns += '<td>' + tweet['created_at'] + '</td>';
            rows += '<tr>' + columns + '</tr>';
        });
        $('#timelineTable tbody').append(rows);
        $('#timelineTable').removeClass('hidden');
    };

    var fetchTimeline = function() {
        return $.ajax({
            type: "GET",
            url: makePath(),
            success: function(response) {
                displayTimeline(response);
            },
            error: function(e) {
                alert(e.responseJSON.error);
            }
        });
    };

    $(init);
})(jQuery);
