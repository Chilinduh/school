function sendCallBack() {

    $.ajax({
        url: "/callBack",
        method: 'post',
        dataType: 'json',
        data: {'text': $('#CallBack-text').val()},
        beforeSend: function () {

        },
        success: function (data) {

            $('.wpcf7-response-output').css('visibility', 'visible');
            $('#ohio-custom-67005dfe5c410').find('button').removeClass('btn-loading');
            $('.wpcf7-response-output').find('h5').html(data.message)
        },
        error: function (response) {

        }
    });

}

function send() {

    $.ajax({
        url: "/send",
        method: 'post',
        dataType: 'json',
        data:  $("#questions").serialize(),
        beforeSend: function () {

        },
        success: function (data) {

            $('.send-output').css('visibility', 'visible');
            $('#questions').find('button').removeClass('btn-loading');
            $('.send-output').find('h5').html(data.message);
            $('#questions')[0].reset();
        },
        error: function (response) {

        }
    });

}

