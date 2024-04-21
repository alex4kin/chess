// Scrolling users block
const scrollContainerUsers = document.querySelector(".users");

scrollContainerUsers.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainerUsers.scrollLeft += evt.deltaY;
});

// Scrolling users block by clicking
var ubutton = document.getElementById('slide');
ubutton.onclick = function () {
  var container = document.getElementById('ucontainer');
  sideScroll(container, 'right', 25, 340, 20);
};

var uback = document.getElementById('slideBack');
uback.onclick = function () {
  var container = document.getElementById('ucontainer');
  sideScroll(container, 'left', 25, 340, 20);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}