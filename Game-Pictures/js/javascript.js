$(document).ready(function(){
    circleY= [];
    circleX= [];
    var firsttime = 1;
    var prevElement;
    var currentElement;
    var $element;
    var currentFullItem;
    var prevFullItem;


    for(var i = 1;i<=8;i++){
        circleY.push(i);
    }

    for(var j = 1;j<=8;j++){
        circleX.push(j);
    }
    var joinarrays = circleY.concat(circleX);
    function shuffle(a) { //random sort
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    shuffle(joinarrays);
    for(var j=0;j<=joinarrays.length;j++){
        $(".js__circle").eq(j).attr('current',joinarrays[j]);
        $(".js__circle").eq(j).find('.js__img-circle').attr('src','img/'+joinarrays[j]+'.jpg');
    }

    function doneElement(){
        if(prevElement == currentElement){
            prevFullItem.addClass('done');
            currentFullItem.addClass('done');
        } else {
            prevFullItem.find('.js__circle-inner').fadeIn();
            currentFullItem.find('.js__circle-inner').fadeIn();
        }
        firsttime = 1;
    }

    $(".js__circle .js__circle-inner").on('click',function(){ 
        $(this).fadeOut();
        $element = $(this).parent();
        if(firsttime == 1){
            prevElement = $element.attr('current'); //click 1
            prevFullItem = $element;
            firsttime++; 
        }else{
            currentElement = $element.attr('current'); //click 2
            currentFullItem = $element;
            doneElement();
        }
    });
});