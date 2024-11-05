$('#cz61').click(function(){
    if($('#cz61').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 table td').css('color', 'white');
        $('#projekt5 table td').css('background-color', 'black');
        $('#projekt5 table').css('border', '1px solid white');
        $('#cz61').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 table td').css('color', 'black');
        $('#projekt5 table td').css('background-color', 'white');
        $('#projekt5 table').css('border', '1px solid black');
        $('#cz61').css('background-color', '');
    }
});

$('#cz62').click(function(){
    if($('#cz62').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 table tr:first-child td').css('color', 'white');
        $('#projekt5 table tr:first-child td').css('background-color', 'black');
        $('#cz62').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 table tr:first-child td').css('color', 'black');
        $('#projekt5 table tr:first-child td').css('background-color', 'white');
        $('#cz62').css('background-color', '');
    }
});

$('#cz63').click(function(){
    if($('#cz63').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 td + td').css('color', 'white');
        $('#projekt5 td + td').css('background-color', 'black');
        $('#cz63').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 td + td').css('color', 'black');
        $('#projekt5 td + td').css('background-color', 'white');
        $('#cz63').css('background-color', '');
    }
});

$('#cz64').click(function(){
    if($('#cz64').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 input[name]').css('color', 'white');
        $('#projekt5 input[name]').css('background-color', 'black');
        $('#cz64').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 input[name]').css('color', 'black');
        $('#projekt5 input[name]').css('background-color', 'white');
        $('#cz64').css('background-color', '');
    }
});

$('#cz65').click(function(){
    if($('#cz65').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 input[name="1"]').css('color', 'white');
        $('#projekt5 input[name="1"]').css('background-color', 'black');
        $('#cz65').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 input[name="1"]').css('color', 'black');
        $('#projekt5 input[name="1"]').css('background-color', 'white');
        $('#cz65').css('background-color', '');
    }
});

$('#cz66').click(function(){
    if($('#cz66').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 input[name^="2"]').css('color', 'white');
        $('#projekt5 input[name^="2"]').css('background-color', 'black');
        $('#cz66').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 input[name^="2"]').css('color', 'black');
        $('#projekt5 input[name^="2"]').css('background-color', 'white');
        $('#cz66').css('background-color', '');
    }
});

$('#cz67').click(function(){
    if($('#cz67').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 input[name$="3"]').css('color', 'white');
        $('#projekt5 input[name$="3"]').css('background-color', 'black');
        $('#cz67').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 input[name$="3"]').css('color', 'black');
        $('#projekt5 input[name$="3"]').css('background-color', 'white');
        $('#cz67').css('background-color', '');
    }
});

$('#cz68').click(function(){
    if($('#cz68').css('background-color') != 'rgb(128, 128, 128)'){
        $('#projekt5 input[name*="1"]').css('color', 'white');
        $('#projekt5 input[name*="1"]').css('background-color', 'black');
        $('#cz68').css('background-color', 'rgb(128, 128, 128)');
    }
    else{
        $('#projekt5 input[name*="1"]').css('color', 'black');
        $('#projekt5 input[name*="1"]').css('background-color', 'white');
        $('#cz68').css('background-color', '');
    }
});
$('#cz71').click(function(){
    if ($('#cz71').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 table tr:even').css('color', 'white').css('background-color', 'black');
        $('#cz71').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 table tr:even').css('color', '').css('background-color', '');
        $('#cz71').css('background-color', '');
    }
});

$('#cz72').click(function(){
    if ($('#cz72').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 table tr:odd').css('color', 'white').css('background-color', 'black');
        $('#cz72').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 table tr:odd').css('color', '').css('background-color', '');
        $('#cz72').css('background-color', '');
    }
});

$('#cz73').click(function(){
    if ($('#cz73').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 table tr.klasa1:even').css('color', 'black').css('background-color', 'lightgreen');
        $('#cz73').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 table tr.klasa1:even').css('color', '').css('background-color', '');
        $('#cz73').css('background-color', '');
    }
});

$('#cz74').click(function(){
    if ($('#cz74').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 table tr:first, #projekt5 table tr:last').css('color', 'white').css('background-color', 'purple');
        $('#cz74').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 table tr:first, #projekt5 table tr:last').css('color', '').css('background-color', '');
        $('#cz74').css('background-color', '');
    }
});

$('#cz75').click(function(){
    if ($('#cz75').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 tr:not(.klasa1) td').css('color', 'black').css('background-color', 'lightyellow');
        $('#cz75').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 tr:not(.klasa1) td').css('color', '').css('background-color', '');
        $('#cz75').css('background-color', '');
    }
});

$('#cz76').click(function(){
    if ($('#cz76').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 td:has(span)').css('color', 'white').css('background-color', 'darkorange');
        $('#cz76').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 td:has(span)').css('color', '').css('background-color', '');
        $('#cz76').css('background-color', '');
    }
});

$('#cz77').click(function(){
    if ($('#cz77').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 td:contains("Posim")').css('color', 'black').css('background-color', 'pink');
        $('#cz77').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 td:contains("Posim")').css('color', '').css('background-color', '');
        $('#cz77').css('background-color', '');
    }
});

$('#cz78').click(function(){
    if ($('#cz78').css('background-color') != 'rgb(128, 128, 128)') {
        $('#projekt5 table tr').css('display', 'none');
        $('#cz78').css('background-color', 'rgb(128, 128, 128)');
    } else {
        $('#projekt5 table tr').css('display', '');
        $('#cz78').css('background-color', '');
    }
});
