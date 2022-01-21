const clock = document.querySelector("h2#clock");
// interval/timeout
// formatting => "".padStart(maxLength, "text")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
// 5초마다 함수 실행
// setInterval(function, time(ms));

// setTimeout(sayHello, 5000);
// 5초 기다리다 1회 실행
// setTimeout(function, time(ms));