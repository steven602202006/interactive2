$(document).ready(function(){
    
    var Color;

    $('#button').click(function(){
        $('body').toggleClass('black');
    });

    $('.triangle-bottom').click(function(){
        $(this).css('border-bottom-color', Color);
    });

    $('.triangle-top').click(function(){
        $(this).css('border-top-color', Color);
    });

    $('.circle').click(function(){
        $(this).css('background', Color);
    });    

    $('.rectangle').click(function(){
        $(this).css('background', Color);
    });  

    $('#Red').click(function(){
        Color = 'red';
    });

    $('#Orange').click(function(){
        Color = 'orange';
    });

    $('#Yellow').click(function(){
        Color = 'yellow';
    });

    $('#Green').click(function(){
        Color = 'green';
    });

    $('#Blue').click(function(){
        Color = 'blue';
    });

    $('#Purple').click(function(){
        Color = 'purple';
    });

    function myFunction() {
        $('body').css('background', 'blue');
    //document.body.style.backgroundColor = "red";
    }
    
});