$(document).ready(function(){
    $("#getTimeline").click(function(e){
        e.preventDefault();
        $('#timelineTable > tbody').empty();
        $('#intersectionTable').addClass('hidden');

        $.ajax({
            type: "GET",
            url: "/timeline/" + $("#username").val(),
            success: function(response) {
                var rows = '';
                response.forEach(function(tweet) {
                    var columns = '';
                    columns += '<td>' + tweet['text'] + '</td>';
                    columns += '<td>' + tweet['created_at'] + '</td>';
                    rows += '<tr>' + columns + '</tr>';
                });
                $('#timelineTable tbody').append(rows);
                $('#timelineTable').removeClass('hidden');
            }
        });
    });
});
