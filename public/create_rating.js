$(document).ready(function () {
    $('#createRatingBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            MovieID: $('#MovieID').val(),
            Rating: $('#Rating').val()

        };

        $.ajax({
            url: $("#create_rating_form").attr("action"),
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