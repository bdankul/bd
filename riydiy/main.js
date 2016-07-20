//Javascript
//RIY-DIY 

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // filter energy
    $('#energy').on('click', function(event) {
        $("article[class!='energy']").hide();
        $("article[class='energy']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    // start with all highlighted
    $('#all').css({
            'backgroundColor':'#333',
            'color':'white'
        });
    // show all
    $('#all').on('click', function(event) {
        $('article').show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    //filter water
    $('#water').on('click', function(event) {
        $("article[class!='water']").hide();
        $("article[class='water']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    //filter consumption
    $('#consumption').on('click', function(event) {
        $("article[class!='consumption']").hide();
        $("article[class='consumption']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    //filter gas
    $('#gas').on('click', function(event) {
        $("article[class!='gas']").hide();
        $("article[class='gas']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    
    // REUSE 
    //filter paper
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
    //filter plastic
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
    //filter clothes
    $('#clothes').on('click', function(event) {
        $("article[class!='clothes']").hide();
        $("article[class='clothes']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
    //filter wood pallet
    $('#pallet').on('click', function(event) {
        $("article[class!='pallet']").hide();
        $("article[class='pallet']").show();
        $(this).css({
            'backgroundColor':'#333',
            'color':'white'
        });
        $(this).siblings().css({
            'backgroundColor':'white',
            'color':'#333'
        });
    });
}); //end ready