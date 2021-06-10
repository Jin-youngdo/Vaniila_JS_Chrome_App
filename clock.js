const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes<10? `0${minutes}` : minutes}`; // 삼항 연산자 사용 seconds < 10 ? (True)0`seconds`출력 : (False) seconds 출력
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);   // setInterval(함수명, 시간초)함수 동작 시간 설정 
}

init();