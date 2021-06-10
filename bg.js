const body = document.querySelector("body");
// background image를 위해 body를 변수값으로 지정

const IMG_NUMBER = 6;

function handleImgLoad(image){
    console.log("image load complete");
    image.classList.add("bgImg"); //css로 조정을 하기 위해서 class추가
    body.prepend(image); //image를 html파일에 body에 넣어주기
}

function paintImage(imgNumber){
    const image = new Image(); //어떠한 항목인지 간단한 설명을 붙이기 위한 변수이름
    image.src = `images/${imgNumber+1}.jpg`;
    image.addEventListener("loaded", handleImgLoad(image));
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();