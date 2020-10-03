// TO DO
// Four options: change background, change eye shape, change pupil, change prize tag
// click the button to scroll up and select the equivalent asset under each div
// keep the top and bottom part of the screen? - set design

// more effective way to is to circle through all options and tap to stop the options 

// questions:
/**** How do I avoid duplicates of functions? */
/**** Navigation of the bottom DIV */
/*** How to make one item draggable within boundary - can it be circle? */
/***** how to see if button is clicked and do functions - are there any booleans? */
// - create a variable - state - "pupil"

/** change bg color */

let bgBtn = document.getElementById("bgBtn");
let pupilBtn = document.getElementById("pupilBtn");
let eyeBorderBtn = document.getElementById("eyeBorderBtn");
let priceBtn = document.getElementById("priceBtn");
let eye = document.getElementById("eye");

let middle = document.getElementById("middle");

/******four elements */
let bgSelections = document.getElementById("bgSelections");
let priceSelections = document.getElementById("priceSelections");
let eyeBorderSelections = document.getElementById("eyeBorderSelections");
let pupilSelections = document.getElementById("pupilSelections");


function showBgSelections() {

  if (bgSelections.style.visibility === "visible") {
    bgSelections.style.visibility = "hidden";
  } else {
    bgSelections.style.visibility = "visible";
  }
}

let red = document.createElement("button");
red.id = "red";
let black = document.createElement("button");
black.id = "black";
let blue = document.createElement("button");
blue.id = "blue";

red.onclick = function () {
  middle.style.backgroundColor = "red"
  // middle.style.backgroundImage ="url(../assets/bg1.png)";// should change the width of the image 
  // middle.style.width= "100%";
}
blue.onclick = function () {
  middle.style.backgroundColor = "blue";
}
black.onclick = function () {
  middle.style.backgroundColor = "black";
}

function addButtonforBG() {
  bgSelections.appendChild(red);
  bgSelections.appendChild(black);
  bgSelections.appendChild(blue);
  red.style.backgroundColor = "red";
  blue.style.backgroundColor = "blue";
  black.style.backgroundColor = "black";

}


bgBtn.addEventListener("click", showBgSelections);
bgBtn.addEventListener("touch", showBgSelections);
bgBtn.addEventListener("click", addButtonforBG);

//  how to figure out if the button is clicked? boolean 
// create background buttons to change the background color 
function showPriceSelections() {

  if (priceSelections.style.visibility === "visible") {
    priceSelections.style.visibility = "hidden";
  } else {
    priceSelections.style.visibility = "visible";
  }
}
let priceText = document.getElementById("priceText");

let highPrice = document.createElement("button");
highPrice.id = "highPrice";
let midPrice = document.createElement("button");
midPrice.id = "midPrice";
let lowPrice = document.createElement("button");
lowPrice.id = "lowPrice";

function addButtonforPrice() {
  priceSelections.appendChild(highPrice);
  priceSelections.appendChild(midPrice);
  priceSelections.appendChild(lowPrice);

  highPrice.innerHTML = "$ 2.5";
  midPrice.innerHTML = "$ 1.5";
  lowPrice.innerHTML = "$ 0.5";


}


priceBtn.addEventListener("click", showPriceSelections);
priceBtn.addEventListener("touch", showPriceSelections);
priceBtn.addEventListener("click", addButtonforPrice);

highPrice.onclick = function () {
  priceText.innerHTML = highPrice.innerHTML;
}

midPrice.onclick = function () {
  priceText.innerHTML = midPrice.innerHTML;
}

lowPrice.onclick = function () {
  priceText.innerHTML = lowPrice.innerHTML;
}

/**** How do I avoid duplicates of functions? */

function showSelections(e) {
  if (e.style.visibility === "visible") {
    e.style.visibility = "hidden";
  } else {
    e.style.visibility = "visible";
  }

}

// why doesnt it work? 
// priceBtn.addEventListener("click", showSelections(priceSelections));//does not wait for it to be called - so undefined 

priceBtn.addEventListener("click", () => {
  showSelections(priceSelections);
});



// show the selection when one button is clicked 
// if it goes idle, disappera 
// if e for the selections is selected, disappear in 2 seconds 



/*********show the eyeBorder */

function showEyeBorderSelections() {

  // if (eyeBorderSelections.style.visibility === "visible") {
  //   eyeBorderSelections.style.visibility = "hidden";
  // } else {
  //   eyeBorderSelections.style.visibility = "visible";
  // }

  if (eyeBorderSelections.style.display === "flex") {
    eyeBorderSelections.style.display = "none";
  } else {
    eyeBorderSelections.style.display = "flex";
  }
}

// three kinds of the border 

let border1 = document.createElement("button");
border1.id = "border1";
let border2 = document.createElement("button");
border2.id = "border2";
let border3 = document.createElement("button");
border3.id = "border3";

function addButtonforEyeBorder() {
  eyeBorderSelections.appendChild(border1);
  eyeBorderSelections.appendChild(border2);
  eyeBorderSelections.appendChild(border3);

  border1.innerHTML = "border1";
  border2.innerHTML = "border2";
  border3.innerHTML = "border3";

}

eyeBorderBtn.addEventListener("click", showEyeBorderSelections);
eyeBorderBtn.addEventListener("touch", showEyeBorderSelections);
eyeBorderBtn.addEventListener("click", addButtonforEyeBorder);


/*********show the pupil */

function showPupilSelections() {

  if (pupilSelections.style.display === "flex") {
    pupilSelections.style.display = "none";
  } else {
    pupilSelections.style.display = "flex";
  }
}

let eye1 = document.createElement("button");
eye1.id = "eye1";
let eye2 = document.createElement("button");
eye2.id = "eye2";
let eye3 = document.createElement("button");
eye3.id = "eye3";

function addButtonforPupil() {
  pupilSelections.appendChild(eye1);
  pupilSelections.appendChild(eye2);
  pupilSelections.appendChild(eye3);

  eye1.innerHTML = "eye1";
  eye2.innerHTML = "eye2";
  eye3.innerHTML = "eye3";
}

pupilBtn.addEventListener("click", showPupilSelections);
pupilBtn.addEventListener("touch", showPupilSelections);
pupilBtn.addEventListener("click", addButtonforPupil);
