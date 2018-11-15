/*
    Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
    Computer Science Department, UMass Lowell Comp.4610, GUI Programming
    File: A6.js, Created: 6-Nov-2018.
*/
document.getElementById("submit").onclick = function() {myFunction()};
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
    if (startCol == 0 || endCol == 0 || startRow == 0 || endRow == 0){
        alert("Please Provide All The Input!!!");
    }
    else{
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
	}
}    