// Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
// Computer Science Department, UMass Lowell Comp.4610, GUI Programming
// File: button.js, Created: 11-Dec-2018.

// this procedure is for continue the game
function nextRound() {
    $("#next_game").click(function() {
        var ul = document.getElementById('myLetters');
        if(ul.children){
            $("ul").empty();
        }
        makeBag();
        drawBoard();
        draw_tiles(7);
        makeTheBoardDrop();
        makeTileDrag();
        charDropArrayLocation = [];
        charDragArray = [];
        roundFlag = true;
    });
}


// this procedure is for restarting the game
function startOver() {
    $("#new_game").click(function() {
        var ul = document.getElementById('myLetters');
        if(ul.children){
            $("ul").empty();
        }
        makeBag();
        drawBoard();
        draw_tiles(7);
        makeTheBoardDrop();
        makeTileDrag();
        charDropArrayLocation = [];
        charDragArray = [];
        score = 0;
        roundFlag = true;
        document.getElementById('score').innerHTML = "Score: 0";
    });
}

// this procedure is for calculate the score of each round.
function calculate_score() {
    $("#calculate").click(function() {
        var case2 = false;
        var curScore = 0;
        // debugger
        if (roundFlag == true){
            for(var i=0; i<charDropArrayLocation.length; i++)
            {
                var charValue = lookUp[charDragArray[i]].value;
                var key = charDropArrayLocation[i];
                if(key == 6 || key == 8)
                {
                    charValue = charValue * 2;
                }
                else if (key == 2)
                {
                    case2 = true;
                }
                curScore += charValue;
            }
            if(case2 == true)
            {
                curScore *= 2;
            }
            roundFlag = false;
            score += curScore;
        }
        
        document.getElementById('score').innerHTML = "Score: " + score;
        
    })
}

// this lookUp map is use for calculation purpose
var lookUp = {
    '0':{letter:"A", value:1},
    '1':{letter:"B", value:3},
    '2':{letter:"C", value:3},
    '3':{letter:"D", value:2},
    '4':{letter:"E", value:1},
    '5':{letter:"F", value:4},
    '6':{letter:"G", value:2},
    '7':{letter:"H", value:4},
    '8':{letter:"I", value:1},
    '9':{letter:"J", value:8},
    '10':{letter:"K", value:5},
    '11':{letter:"L", value:1},
    '12':{letter:"M", value:3},
    '13':{letter:"N", value:1},
    '14':{letter:"O", value:1},
    '15':{letter:"P", value:3},
    '16':{letter:"Q", value:10},
    '17':{letter:"R", value:1},
    '18':{letter:"S", value:1},
    '19':{letter:"T", value:1},
    '20':{letter:"U", value:1},
    '21':{letter:"V", value:4},
    '22':{letter:"W", value:4},
    '23':{letter:"X", value:8},
    '24':{letter:"Y", value:4},
    '25':{letter:"Z", value:10}
}