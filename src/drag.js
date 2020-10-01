

//************************* Move pupil in the eye *****************************************************/

// move the button using the mouse x and y 
// drag the pupil when it is within the eye range 
// update to touch 

// let pupil = document.getElementById("pupil");
// let eyeBorder = document.getElementById("eyeBorder");

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

  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
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

// get bounding box to find the big circle - Element.getBoundingClientRect()
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

    let eye = document.getElementById("eye");

    let info = eye.getBoundingClientRect();
    let xMin = info.x-info.width;
    let xMax = info.x;
    let yMin = info.y-info.height;
    let yMax = info.y;
    // put the limits here 
    console.log("border",eyeBorder.getBoundingClientRect());  
    console.log("eye",eye.getBoundingClientRect());  
    

    if(currentX<=xMin){
        currentX=xMin;
      
    }else if (currentX>=xMax){
        currentX=xMax;

    }
    if(currentY<=yMin){
        currentY=yMin;  console.log("less than left")
    }else if (currentY>=yMax){
       currentY=yMax;
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
