/*
    Name: Sopanha Phan, Sopanha_Phan@student.uml.edu
    Computer Science Department, UMass Lowell Comp.4610, GUI Programming
    File: A7.js, Created: 23-Nov-2018.
*/

// Wait for the DOM to be ready
$( document ).ready(function() {
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
            digits: true
            // number: true
        },
        endCol: {
            required: true,
            digits: true
            // number: true
        },
        startRow: {
            required: true,
            digits: true
            // number: true
        },
        endRow: {
            required: true,
            digits: true
            // number: true
        }
      },
      // Specify validation error messages
      messages: {
        startCol: "Please enter your start column number",
        endCol: "Please enter your end column number",
        startRow:"Please enter your start row number",
        endRow:"Please enter your end row number"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        myFunction();
      }
    });
});