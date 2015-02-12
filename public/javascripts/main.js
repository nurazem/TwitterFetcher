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

    $("#getIntersection").click(function(e){
        e.preventDefault();
        $('#intersectionTable > tbody').empty();
        $('#timelineTable').addClass('hidden');
        $.ajax({
            type: "GET",
            url: "/intersection/" + $("#firstUser").val() + "/" + $("#secondUser").val(),
            success: function(response) {
                console.log(response);
                var rows = '';
                response[0].forEach(function(tweet) {
                    var columns = '';
                    columns += '<td>' + tweet['screen_name'] + '</td>';
                    columns += '<td>' + tweet['name'] + '</td>';
                    columns += '<td>' + tweet['description'] + '</td>';
                    columns += '<td>' + tweet['location'] + '</td>';
                    rows += '<tr>' + columns + '</tr>';
                });
                $('#intersectionTable tbody').append(rows);
                $('#intersectionTable').removeClass('hidden');
            }
        });
    });
});
