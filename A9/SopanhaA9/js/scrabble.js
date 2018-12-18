// Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
// Computer Science Department, UMass Lowell Comp.4610, GUI Programming
// File: scrabble.js, Created: 11-Dec-2018.

// if the page is already loaded then initialize the game
$(document).ready(function() {
    makeBag();  // store each letter object to an array
    drawBoard();    // draw board
    drawWordHolder();   // draw character holder
    draw_tiles(7);  // draw the tiles
    makeTheBoardDrop(); // make the board droppable
    makeTileDrag(); // make the tiles draggable
    nextRound();    // initialize the nextRound 
    startOver();    // initialize the startOver
    calculate_score();  //initialize the calculate_score
});