/*Set font*/
$('#displayA').css({ "font-weight": "bold" });

/*Light and Dark mode toggles*/
$('#toggleA').on('click', function () {
    $('body').css('background-color', 'black');
    $('.container').css('background-color', 'grey');
    $('#toggleA').text('Applied');
    $('#toggleB').text('Light Mode');
})

$('#toggleB').on('click', function () {
    $('body').css('background-color', 'white');
    $('.container').css('background-color', 'lightgrey');
    $('#toggleB').text('Applied');
    $('#toggleA').text('Dark Mode');
})

/*Return the toggles to default status*/
$("#toggleA").mouseleave(function () {
    $('#toggleA').text('Dark Mode');
})

$("#toggleB").mouseleave(function () {
    $('#toggleB').text('Light Mode');
})

/*The image of the answer*/
$('#imageA').hover(function () {
    $('#displayA').text('60 5th Ave, Room 261');
})

$("#imageA").mouseleave(function () {
    $('#displayA').text('Still remember?');
})