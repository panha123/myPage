// Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
// Computer Science Department, UMass Lowell Comp.4610, GUI Programming
// File: gameLayout.js, Created: 11-Dec-2018.

// this procedure is for drawing the board
function drawBoard (){
    var table = '<table id="myBoard">';
    table += '<tr>';
    for (var i=0; i<9; i++){
        table += '<td id='+i+'></td>';
    }
    table += '</tr>';
    table += '</table>';

    document.getElementById("board").innerHTML = table;
};

// this procedure is for drawing the character holder
function drawWordHolder (){
    var img = '<img></img>';
    document.getElementById("wordHolder").innerHTML = img;
}

// this procedure is for drawing the appropriate tiles
function draw_tiles(num) {
    debugger
    var new_div;
    var ul = document.getElementById('myLetters');
    for (var i = 0; i < num; i++) {
        var rand_int = getRandomInt(0, 25);
        var li = document.createElement("li");
        li.setAttribute('class','ui-state-default tile');
        li.setAttribute('id', "tile")
        switch (rand_int) {
            case 0:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_A.jpg')";
                break;
            case 1:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_B.jpg')";
                break;
            case 2:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_C.jpg')";
                break;
            case 3:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_D.jpg')";
                break;    
            case 4:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_E.jpg')";
                break;
            case 5:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_F.jpg')";
                break;
            case 6:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_G.jpg')";
                break;
            case 7:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_H.jpg')";
                break;
            case 8:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_I.jpg')";
                break;
            case 9:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_J.jpg')";
                break;
            case 10:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_K.jpg')";
                break;
            case 11:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_L.jpg')";
                break;
            case 12:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_M.jpg')";
                break;
            case 13:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_N.jpg')";
                break;
            case 14:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_O.jpg')";
                break;
            case 15:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_P.jpg')";
                break;
            case 16:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_Q.jpg')";
                break;
            case 17:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_R.jpg')";
                break;
            case 18:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_S.jpg')";
                break;
            case 19:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_T.jpg')";
                break;
            case 20:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_U.jpg')";
                break;
            case 21:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_V.jpg')";
                break;
            case 22:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_W.jpg')";
                break;
            case 23:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_X.jpg')";
                break;
            case 24:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_Y.jpg')";
                break;
            case 25:
                li.style.backgroundImage ="url('./images/Scrabble_Tile_Z.jpg')";
                break;
            // case 26:
            //     li.style.backgroundImage ="url('./images/Scrabble_Tile_Blank.jpg')";
            //     break;
            default:

                break;
        }
        new_div = "<br>";
        li.innerHTML = new_div;
        li.data = rand_int;
        ul.append(li);
    }
}

function getRandomInt(min, max) {
    // getting random int within a range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this procedure is for making the board droppable 
function makeTheBoardDrop() {
    $("td").droppable({
        tolerance: "pointer",
        accept: ".tile",
        drop: function(event, ui) {
            var $this = $(this);
            var dragValue = ui.draggable[0].data;
            debugger
            var dropLocation = parseInt(this.id);
            charDragArray.push(dragValue);
            charDropArrayLocation.push(dropLocation);
            if ($(this).children(".tile").length == 0) {
            //     // still can put stuff in if, no child yet
            //     // add child to it, now it can no longer accept any tile
                ui.draggable.detach().appendTo($(this));
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $this,
                    using: function(pos) {
                        $(this).animate(pos, "fast", "linear");
                    }
                }); // animate tiles moving into position!
            } else {
                ui.draggable.draggable('option', 'revert', true);
            //     // return tile back to where it came from
            }
        },
    });
}

// this procedure is for making the tile is draggable
function makeTileDrag() {
    $(".tile").draggable({
        revert: 'invalid',
        // put the tile back if drag fail
        //helper: "clone",
        // only use the clone instead of the actual thing
        stop: function() {
            // Source : taken from Jason Downing 
            $(this).draggable('option', 'revert', 'invalid');
        },
    });
}