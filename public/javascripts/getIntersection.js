$(document).ready(function(){
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
