var turn = 0;
var total_clicks = 0;

// Ticks Against tic tok toe
$(document).ready(function(){

    $('ul li').on('click', function(){

        // Prevent Clicking again
        var value = $(this).text();
        if(value == 'O' || value == 'X'){
            alert("You can not click again");
            $(this).preventDefault();
        }

        // Clicks Against Players
        if(turn%2 == 0){
            $(this).text("O").addClass("tick-O");
            turn++;
            total_clicks++;
            $('.player-1').removeClass('player');
            $('.player-2').addClass('player');

        }else if(turn%2 == 1){
            $(this).text("X").addClass("tick-X");
            turn++;
            total_clicks++;
            $('.player-2').removeClass('player');
            $('.player-1').addClass('player');
        };

        // Winers Annoucment
        var cel_1 = $('ul li#cel-1').text();
        var cel_2 = $('ul li#cel-2').text();
        var cel_3 = $('ul li#cel-3').text();
        var cel_4 = $('ul li#cel-4').text();
        var cel_5 = $('ul li#cel-5').text();
        var cel_6 = $('ul li#cel-6').text();
        var cel_7 = $('ul li#cel-7').text();
        var cel_8 = $('ul li#cel-8').text();
        var cel_9 = $('ul li#cel-9').text();
        
        if(
            cel_1 == 'O' && cel_2 == 'O' && cel_3 == 'O' ||
            cel_4 == 'O' && cel_5 == 'O' && cel_6 == 'O' ||
            cel_7 == 'O' && cel_8 == 'O' && cel_9 == 'O' ||
            cel_1 == 'O' && cel_4 == 'O' && cel_7 == 'O' ||
            cel_2 == 'O' && cel_5 == 'O' && cel_8 == 'O' ||
            cel_3 == 'O' && cel_6 == 'O' && cel_9 == 'O' ||
            cel_1 == 'O' && cel_5 == 'O' && cel_9 == 'O' ||
            cel_3 == 'O' && cel_5 == 'O' && cel_7 == 'O'
        ){
            alert("Player 1 wins");
            window.location.href = window.location.href;
        };

        if(
            cel_1 == 'X' && cel_2 == 'X' && cel_3 == 'X' ||
            cel_4 == 'X' && cel_5 == 'X' && cel_6 == 'X' ||
            cel_7 == 'X' && cel_8 == 'X' && cel_9 == 'X' ||
            cel_1 == 'X' && cel_4 == 'X' && cel_7 == 'X' ||
            cel_2 == 'X' && cel_5 == 'X' && cel_8 == 'X' ||
            cel_3 == 'X' && cel_6 == 'X' && cel_9 == 'X' ||
            cel_1 == 'X' && cel_5 == 'X' && cel_9 == 'X' ||
            cel_3 == 'X' && cel_5 == 'X' && cel_7 == 'X'
        ){
            alert("Player 2 wins");
            window.location.href = window.location.href;
        };

        // Tie
        if(total_clicks == 9){
            alert("tie");
            window.location.href = window.location.href;
        }
    });

    // Reload Page
    $('.reset').on('click', function(){
        window.location.href = window.location.href;
    });
});