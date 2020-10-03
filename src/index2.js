// tap the corresponding div to change the image 

// bottom would be just instructions or maybe nothing? 
let pupilIndex = 0;
let pupilUrls = [
    "assets/pupil1.png",
    "assets/pupil2.png",
    "assets/pupil3.png",
    "assets/pupil4.png",
    "assets/pupil5.png",
    "assets/pupil6.png"
]

let pupil = document.getElementById("pupil");
let pupilImg = new Image();

pupil.addEventListener("click", (e) => {
    e.stopPropagation(); //stop listening to the click to its parents 
    pupilIndex = (pupilUrls.length + pupilIndex - 1) % pupilUrls.length;
    pupilImg.src = pupilUrls[pupilIndex];
    pupilImg.style.width = "100%";
    pupil.appendChild(pupilImg);
    pupil.style.background = "transparent";
    pupil.style.boxShadow="none";

});


// there are four duplicates, make it compact 

/**********try to make it a function but it only works once */
// function select(e,index,urls,imgOne,item){
//     e.stopPropagation();
//     index = (urls.length + index - 1) % urls.length;
//     imgOne.src = urls[index];
//     imgOne.style.width = "100%";
//     item.appendChild(imgOne);
//     item.style.backgroundColor="transparent";
//     console.log("used the function");

// }

// pupil.addEventListener("click", (e) => {

//     select(e,pupilIndex,pupilUrls,pupilImg,pupil);
//     console.log("click")
// });



let eyeBorderIndex = 0;
let eyeBorderUrls = [
    "assets/eyeborder1.png",
    "assets/eyeborder2.png",
    "assets/eyeborder3.png",
    "assets/eyeborder4.png",
    "assets/eyeborder5.png",
    "assets/eyeborder6.png"
]

let eyeBorder = document.getElementById("eyeBorder");
let eyeBorderImg = new Image();

eyeBorder.addEventListener("click", (e) => {
    e.stopPropagation(); //stop listening to the click to its parents 
    eyeBorderIndex = (eyeBorderUrls.length + eyeBorderIndex - 1) % eyeBorderUrls.length;
    eyeBorderImg.src = eyeBorderUrls[eyeBorderIndex];
    eyeBorderImg.style.width = "100%";
    eyeBorder.appendChild(eyeBorderImg);
    eyeBorder.style.backgroundColor = "transparent";
    eyeBorder.style.background = "transparent";
    eyeBorder.style.boxShadow="none";

});

let priceIndex = 0;
let priceUrls = [
    "assets/price1.png",
    "assets/price2.png",
    "assets/price3.png",
    "assets/price4.png"
]

let price = document.getElementById("price");
let priceImg = new Image();

// to move the positiion up with the text
price.addEventListener("click", (e) => {
    e.stopPropagation(); //stop listening to the click to its parents 

    priceIndex = (priceUrls.length + priceIndex - 1) % priceUrls.length;
    priceImg.src = priceUrls[priceIndex];
    priceImg.style.width = "80%";
    priceImg.style.positon = "absolute";
    price.appendChild(priceImg);
    price.style.backgroundColor = "transparent";
    price.style.background = "transparent";
    price.style.boxShadow="none";
});

let bgIndex = 0;
let bgUrls = [
    "assets/bg1.png",
    "assets/bg2.png",
    "assets/bg3.png",
    "assets/bg4.png",
]

let bg = document.body;
let bgImg = new Image();
// how to not select the background when i click on other items? - should set boolean as well 
let middle = document.getElementById("middle");
// onclick reacts different than click - can not do the mobile touch with onclick 
middle.addEventListener("click", changeBg);


function changeBg() {
    bgIndex = (bgUrls.length + bgIndex - 1) % bgUrls.length;
    bgImg.src = bgUrls[bgIndex];
    bgImg.style.width="100%";
    bgImg.style.positon = "absolute";
    bg.appendChild(bgImg);
    bg.style.backgroundColor = "transparent";
    bg.style.background = "transparent";
    bg.style.boxShadow="none";

}



