/**
 * Created by Action Johnny on 4/20/2015.
 */
$(document).ready(function () {
    $('#createTUserBtn').click( function(){
        var payload = {
            Username: $('#Username').val()
          //  FirstName: $('#FirstName').val(),
          //  LastName: $('#LastName').val()
        };

        $.ajax({
            url: $("#create_tusers_form").attr("action"),
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