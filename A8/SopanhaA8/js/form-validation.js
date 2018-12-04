/*
    Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
    Computer Science Department, UMass Lowell Comp.4610, GUI Programming
    File: A8.js, Created: 4-Dec-2018.
*/

// Wait for the DOM to be ready
$( document ).ready(function() {

    //slider function - responsible to create 4 slider,update values as user drag and check valid form
    slider();

    //before draw table
    //enable JQUERY UI interface
    $("#tabs").tabs();
    
    //create tabs if user hit save button
    create_tabs();  

    // Initialize form validation on the DynamicTable form.
    // It has the id attribute "myForm"
    $('#myForm').validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        startCol: {
            required: true,
            // digits: true,
            range: [ -10, +10 ],
            number: true
        },
        endCol: {
            required: true,
            range: [ -10, +10 ],
            number: true
        },
        startRow: {
            required: true,
            range: [ -10, +10 ],
            number: true
        },
        endRow: {
            required: true,
            range: [ -10, +10 ],
            number: true
        }
      },
      // Specify validation error messages
      messages: {
        startCol: {
            required: function(){
                return "Please enter your start column number";
            },
            range: function(){
                return "Please enter the number between -10 and 10.";
            }    
        },
        endCol: {
            required: function(){
                return "Please enter your end column number";
            },
            range: function(){
                return "Please enter the number between -10 and 10.";
            }    
        },
        startRow: {
            required: function(){
                return "Please enter your start row number";
            },
            range: function(){
                return "Please enter the number between -10 and 10.";
            }    
        },
        endRow: {
            required: function(){
                return "Please enter your end row number";
            },
            range: function(){
                return "Please enter the number between -10 and 10.";
            }    
        }
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {

        myFunction();
      }
    });
});
