// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
$('#sizePicker').submit( function(event) {
    event.preventDefault();

    var width = $('#inputWidth').val();
    var height = $('#inputHeight').val();

    $('#pixelCanvas').html(''); //Clear table

    makeGrid(height, width);
    addCellListener();
});

function makeGrid(height, width) {
    for(var i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    };

    for(var i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellListener() {
    $('td').click( function(event) {
        var color = $('#colorPicker').val();
        $(event.currentTarget).css("background-color", color)
    });
};
