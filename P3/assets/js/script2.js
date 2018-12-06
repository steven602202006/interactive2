$(document).ready(function(){

    $(document).bind('mousemove', function(e){
    $('#tail').css({
        left: e.pageX + 5,
        top: e.pageY - 20
    });
});

});