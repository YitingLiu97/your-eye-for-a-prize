

//************************* Move pupil in the eye *****************************************************/

// move the button using the mouse x and y 
// drag the pupil when it is within the eye range 
// update to touch 

let pupil = document.getElementById("pupil");
let eyeBorder = document.getElementById("eyeBorder");

// make eyeball moveable from https://www.kirupa.com/html5/drag.htm
var dragItem = pupil;
var container = eye;

var active = false;
var within = true; // set the boundary 
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
    console.log(container.style.transform); //why doesn't it show? 

  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    console.log(container.style.transform); //why doesn't it show? 
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  // console.log(xPos,yPos)
}
