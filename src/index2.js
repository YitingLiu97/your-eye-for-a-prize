// tap the corresponding div to change the image 

// bottom would be just instructions or maybe nothing? 
let pupilIndex = 0;
let pupilUrls = [
    "assets/pupil1.png",
    "assets/pupil2.png",
    "assets/pupil3.png"
]

let pupil = document.getElementById("pupil");
let pupilImg = new Image();

pupil.addEventListener("click", () => {
    pupilIndex = (pupilUrls.length + pupilIndex - 1) % pupilUrls.length;
    pupilImg.src = pupilUrls[pupilIndex];
    pupilImg.style.width = "100%";
    pupil.appendChild(pupilImg);
    pupil.style.backgroundColor="transparent";

});

let eyeBorderIndex = 0;
let eyeBorderUrls = [
    "assets/eyeborder1.png",
    "assets/eyeborder2.png",
    "assets/eyeborder4.png"
]

let eyeBorder = document.getElementById("eyeBorder");
let eyeBorderImg = new Image();

eyeBorder.addEventListener("click", () => {
    eyeBorderIndex = (eyeBorderUrls.length + eyeBorderIndex - 1) % eyeBorderUrls.length;
    eyeBorderImg.src = eyeBorderUrls[eyeBorderIndex];
    eyeBorderImg.style.width = "100%";
    eyeBorder.appendChild(eyeBorderImg);
    eyeBorder.style.backgroundColor="transparent";

});

let priceIndex = 0;
let priceUrls = [
    "assets/price1.png",
    "assets/price2.png",
    "assets/price3.png"
]

let price = document.getElementById("price");
let priceImg = new Image();

// to move the positiion up with the text
price.addEventListener("click", () => {
    priceIndex = (priceUrls.length + priceIndex - 1) % priceUrls.length;
    priceImg.src = priceUrls[priceIndex];
    priceImg.style.width = "100%";
    priceImg.style.positon="absolute";
    price.appendChild(priceImg);
    price.style.backgroundColor="transparent";

});




let bgIndex = 0;
let bgUrls = [
    "assets/bg1.png",
    "assets/bg2.png",
    "assets/bg3.png",
    "assets/bg4.png",
]

let bg = document.body;

// let top = document.getElementById("top");
// top.onclick = changeBg;


// how to not select the background when i click on other items? - should set boolean as well 
let bottom = document.getElementById("bottom");
// onclick reacts different than click - can not do the mobile touch with onclick 
bottom.addEventListener("click",changeBg);


let bgImg = new Image();
function changeBg(){
    bgIndex = (bgUrls.length + bgIndex - 1) % bgUrls.length;
    bgImg.src = bgUrls[bgIndex];
    bgImg.style.width = "100%";
    bgImg.style.positon="absolute";
    bg.appendChild(bgImg);
    bg.style.backgroundColor="transparent";
}