$(document).ready(function(){
    
    $(document).on('click','#C1',function(event){
        event.preventDefault();
        event.stopPropagation();

        $('body').addClass('chinese-text');
        var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);
        }
    });

    var winWidth = $(window).width();
    var winHeight = $(window).height();

    $('body').click(function(){
        var n = Math.floor(Math.random() * 15) + 1;
        var xPos = Math.floor(Math.random() * winWidth);
        var yPos = Math.floor(Math.random() * winHeight);

        $('body').append('<img src="img/'+n+'.jpg" style="left: '+xPos+'px; position: absolute; top: '+yPos+'px; position: fixed; width:30%" />');
    });

    $(document).on('click','#E1',function(event){
        event.preventDefault();
        event.stopPropagation();

        $('body').addClass('english-text');
        
        var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);
        }
    });

});