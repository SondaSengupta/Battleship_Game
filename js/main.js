$(document).ready(function(){
  $(".battleship").draggable({
    grid: [50, 50],
    revert: "invalid"
    });
  $(".sea-board").droppable();
});
