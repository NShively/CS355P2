$(document).ready(function () {
    $('#createStudentBtn').click( function(){
        var payload = {
            Title: $('#Title').val(),
            Genre: $('#Genre').val(),
            City: $('#City').val(),
            State: $('#State').val(),
            Country: $('#Country').val()
        };

        $.ajax({
            url: $("#create_user_form").attr("action"),
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