//$(document).ready(function(){});

jQuery(function() {
    var $textarea = $('#comment');
    // events to bind:
    $textarea.on('keydown keyup change focus blur', function(e) {
        if (e.type === 'change') {
            // this event is triggered when the text is changed through drag and drop too,
            // or by pasting something inside the textarea;
            // remove carriage returns (\r) and newlines (\n):
            $textarea.val($textarea.val().replace(/\r?\n/g, ''));
        }
        if (e.which === 13) {
            // the enter key has been pressed, avoid producing a carriage return from it:
            e.preventDefault();
        }
    });


    
    $('textarea').keypress(function(event) {
        // Check the keyCode and if the user pressed Enter (code = 13) 
        // disable it
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    
 });