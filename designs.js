/**
* @description Handle form submittion and create the grid
*/
$('#sizePicker').submit( function(event) {
    event.preventDefault();

    var width = $('#inputWidth').val();
    var height = $('#inputHeight').val();

    $('#pixelCanvas').html(''); //Clear table

    makeGrid(height, width);
    addCellListener();
});

/**
* @description Create the grid based on width and height params
* @param {number} height
* @param {number} width
*/
function makeGrid(height, width) {
    for(var i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    };

    for(var i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

/**
* @description Add event listener to table cells
*/
function addCellListener() {
    $('td').click( function(event) {
        var color = $('#colorPicker').val();
        $(event.currentTarget).css("background-color", color)
    });
};
