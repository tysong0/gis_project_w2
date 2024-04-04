/*Set all text to bold font*/
$('#displayA').css({ "font-weight": "bold" });

$("#test1").hide();

/*Light and Dark mode toggles*/
$('#toggleA').click(function () {
  $(".container").toggleClass("darkmode");
  $(".toggle").toggleClass("darkmode");
  $("#displayA").toggleClass("darkmode");
  $("body").toggleClass("darkmode");
});

/*Toggle hints*/
$("#toggleB").click(function () {
  $("#test1").toggle();
})

/*The image of the answer*/
$('#imageA').hover(function () {
  $('#displayA').text('60 5th Ave, Room 261');
})

$("#imageA").mouseleave(function () {
  $('#displayA').text('Still remember?');
})

/*The experimental draggable element*/
dragElement(document.getElementById("test1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}