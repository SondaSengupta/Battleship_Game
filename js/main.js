$(document).ready(function(){
  $(".battleship").draggable({
    grid: [ 80, 80 ],
    revert: "invalid"
    });
  $(".sea-board").droppable();
});
