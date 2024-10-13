function sendCallBack() {


    let response = fetch("/mail/call-back", {
        method: "POST",
        body: JSON.stringify({
            text: document.getElementById('CallBackContact').value ,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    console.log(response);

    let commits = response.json(); // читаем ответ в формате JSON

    alert(commits);
}
