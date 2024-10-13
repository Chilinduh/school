function sendCallBack() {

    $.ajax({
        url: "/callBack",
        method: 'get',
        dataType: 'json',
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
