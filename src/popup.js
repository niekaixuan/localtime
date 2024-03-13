function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var millis = now.getMilliseconds()
    const timerElement = document.getElementById("clock");
    timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(millis, 3)}`;
}

function pad(number, length = 2) {
    let str = String(number);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
setInterval(updateTime, 100);
updateTime();