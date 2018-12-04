/*
    Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
    Computer Science Department, UMass Lowell Comp.4610, GUI Programming
    File: A8.js, Created: 4-Dec-2018.
*/
// document.getElementById("submit").onclick = function() {myFunction()};


function create_tabs() {
    /*http://jqueryui.com/tabs/#manipulation */
    $("#delTab").click(function() {
        
        //delete all tab button,including the input form, all current drawn table and input
        var num_tabs = $('div#tabs ul li.tab').length;
        do {
            $("#child_tab").remove();
            $("#tab-" + num_tabs--).remove();
        } while ($("#tabs li").length > 1);
    });
    $("#addTab").click(function() {

        // only if valid form, then create a new tab
        if ($("#myForm").valid() === true) {
            //get all variables to make tab header
            var num_tabs = $('div#tabs ul li.tab').length + 1;
            var startCol = Number(document.getElementById("startCol").value);
            var endCol = Number(document.getElementById("endCol").value);
            var startRow = Number(document.getElementById("startRow").value);
            var endRow = Number(document.getElementById("endRow").value);
            //appending list item with title name
            $('ul').append(
                '<li id ="child_tab" class="tab"><a href="#tab-' + num_tabs + '">[' + startCol + ',' + endCol + ']' + '[' + startRow + ',' + endRow + ']' + '</a>' + "<span class='ui-icon ui-icon-close' role='presentation'></span>" + '</li>');
            //appending the actual tab and the table
            $('#tabs').append(
                '<div id ="tab-' + num_tabs + '">' +'<br><p class="header">Selected Tab</p>'+ $("#div1").html() + '</div>');
            $('#tabs').tabs("refresh");
            // Close icon: removing the tab on click
            $('#tabs').on("click", "span.ui-icon-close", function() {
                var panelId = $(this).closest("li").remove().attr("aria-controls");
                //console.log(this);
                $("#" + panelId).remove();
                $("#tabs").tabs("refresh");
            });
        }
    });
}
function check_valid_form() {
    //only when form is valid, a table is drawn
    if ($("#myForm").valid() == true) {
        $("#myForm").submit();
    }
}
function slider() {
    // slider ui for min row
    //min = -10, max  =10, error if anything else
    $("#sliderStartCol").slider({
        min:-10,
        max:10,
        value: 0,
        slide: function(event, ui) {
            $("#startCol").val(ui.value); //update value with input box

            check_valid_form(); //check if valid to draw table
        }
        
    });

    //if user enter value manually
    $("#startCol").on("keyup", function() {
        check_valid_form(); //check if valid value
        $("#sliderStartCol").slider("value", this.value); //update value if valid value
    });

    $("#sliderEndCol").slider({ //same goes for the rest
        min: -10,
        max: 10,
        slide: function(event, ui) {
            $("#endCol").val(ui.value);
            check_valid_form();
        }
    });
    $("#endCol").on("keyup", function() {
        check_valid_form();
        $("#sliderEndCol").slider("value", this.value);
    });

    $("#sliderStartRow").slider({
        min: -10,
        max: 10,
        slide: function(event, ui) {
            $("#startRow").val(ui.value);
            check_valid_form();
        }
    });
    $("#startRow").on("keyup", function() {
        check_valid_form();
        $("#sliderStartRow").slider("value", this.value);
    });

    $("#sliderEndRow").slider({
        min: -10,
        max: 10,
        slide: function(event, ui) {
            $("#endRow").val(ui.value);
            check_valid_form();
        }
    });
    $("#endRow").on("keyup", function() {
        check_valid_form();
        $("#sliderEndRow").slider("value", this.value);
    });
}    

function myFunction() {
    // get value from input form
    var startCol = Number(document.getElementById("startCol").value);
    var endCol = Number(document.getElementById("endCol").value);
    var startRow = Number(document.getElementById("startRow").value);
    var endRow = Number(document.getElementById("endRow").value);
    
    // handling negative number
    startCol = Math.abs(startCol);
    endCol = Math.abs(endCol);
    startRow = Math.abs(startRow);
    endRow = Math.abs(endRow);

    // check if the user provide all input
    // if (startCol == 0 || endCol == 0 || startRow == 0 || endRow == 0){
    //     alert("Please Provide All The Input!!!");
    // }
    // else{
        // check if table already exist dont add
        var table = document.getElementById("table1");
        if(table){
            table.parentNode.removeChild(table);
        }

        // check the input order for column
        if (startCol > endCol){
            var temp = endCol;
            endCol = startCol;
            startCol = temp;
        }
        
        // check the input order for row
        if (startRow > endRow){
            var temp = endRow;
            endRow = startRow;
            startRow = temp;
        }
        
        // get the table placeholder
        var div = document.getElementById("div1");

        // initialize table
        var tbl = document.createElement("table");
        tbl.setAttribute("id","table1");
        tbl.setAttribute("class","table table-bordered");
        // tbl.style.backgroundColor = "white";

        // initialize variable which is going to store the contents of the table.
        var htmlTableContent = "";

        // initailize the header column and the header row
        var col_headerVal = startCol;
        var row_headerVal = startRow;

        for (var i = startRow; i <= endRow + 1; i++)
        {
            htmlTableContent += "<tr>";
            for (var j = startCol; j <= endCol + 1; j++)
            {
                // make the top left coner emplty
                if (i == startRow && j == startCol)
                {
                    htmlTableContent += "<td class='header'>" + "Table" + "</td>";
                }
                // horizontal row header
                else if (i == startRow)
                {
                    htmlTableContent += "<td class='header'>" + col_headerVal++ + '</td>';
                }
                // vertical column header
                else if (j == startCol)
                {
                    htmlTableContent += "<td class='header'>" + row_headerVal++ + '</td>';   
                }
                // table cell
                else
                {   
                    htmlTableContent += "<td class='body'>" + (i-1)*(j-1) + '</td>';
                }
            }
            htmlTableContent += "</tr>";
        }

        // set the content html to the table
        tbl.innerHTML = htmlTableContent;

        // add the table to the page
        div.appendChild(tbl);
	// }
}


