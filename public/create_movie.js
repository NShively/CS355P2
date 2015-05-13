/**
 * Created by Action Johnny on 5/11/2015.
 */
$(document).ready(function () {
    $('#createMovieBtn').click( function(){
        var payload = {

            Title: $('#Title').val(),
            Director: $('#Director').val(),
            Genre: $('#Genre').val()

        };

        $.ajax({
            url: $("#create_movie_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {
                console.log(data.responseText);
                $('#output').html(data.responseText);
                $('#output').show();
            }
        });
    });
});