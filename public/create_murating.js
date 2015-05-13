
$(document).ready(function () {
    $('#createMuRatingBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            MusicID: $('#MusicID').val(),
            Rating: $('#Rating').val()

        };

        $.ajax({
            url: $("#create_grating_form").attr("action"),
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