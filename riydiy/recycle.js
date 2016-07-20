//Javascript
//RIY-DIY 

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    // hide articles
    $('article').hide();
    
    // filter energy
    $('#paper').on('click', function(event) {
        $("article[class!='paper']").hide();
        $("article[class='paper']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // filter plastic
    $('#plastic').on('click', function(event) {
        $("article[class!='plastic']").hide();
        $("article[class='plastic']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // filter metal
    $('#metal').on('click', function(event) {
        $("article[class!='metal']").hide();
        $("article[class='metal']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // filter clothing
    $('#clothing').on('click', function(event) {
        $("article[class!='clothing']").hide();
        $("article[class='clothing']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // filter electronics
    $('#electronics').on('click', function(event) {
        $("article[class!='electronics']").hide();
        $("article[class='electronics']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // filter batteries
    $('#batteries').on('click', function(event) {
        $("article[class!='batteries']").hide();
        $("article[class='batteries']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // zip details
    $('input').on('click', function(event){
        $('li#input').css('backgroundColor','#333');
    });
    
}); //end ready