//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // arrow hide content change height
    $('#graphic div.expand h3 i').on('click', function() {
            $(this).closest("div").css('height','200px');
        });
    
    // Hide work content
    $('section.hide').hide();
    
    
    $('nav ul#work li').hover(
        function(){
            console.log("test change cursor");
            
            $(this).css('borderBottom','1px solid black');
        },
        function(){
            $(this).css('borderBottom','none');
        });
    
    // Click Link to toggle slide sections
    $('li#picturesLink').click(
        function(){
            $('section#web, section#graphic, section#art').hide();
            $('section#pictures').toggle('slide',{direction: 'right'}, 1000);
        });
    $('li#webLink').click(
        function(){
            $('section#pictures, section#graphic, section#art').hide();
            $('section#web').toggle('slide',{direction: 'down'}, 1000);
        });
    $('li#graphicLink').click(
        function(){
            $('section#pictures, section#web, section#art').hide();
            $('section#graphic').toggle('slide',{direction: 'left'}, 1000);
        });
    $('li#artLink').click(
        function(){
            $('section#pictures, section#web, section#graphic').hide();
            $('section#art').toggle('slide',{direction: 'down'}, 700);
        });
    

    console.log("all reading");
    
    // Footer hover shows blurb
    $('#aboutFooter p').hide();
    
    $('#aboutFooter i.fa-pinterest').hover(
        function(){
            $('#aboutFooter p#pinTip').show();
        },
        function(){
            $('#aboutFooter p#pinTip').hide();
        });
    
    $('#aboutFooter p').hide();
    
    $('#aboutFooter i.fa-instagram').hover(
        function(){
            $('#aboutFooter p#instaTip').show();
        },
        function(){
            $('#aboutFooter p#instaTip').hide();
        });
    
    $('#aboutFooter i.fa-tumblr-square').hover(
        function(){
            $('#aboutFooter p#tTip').show();
        },
        function(){
            $('#aboutFooter p#tTip').hide();
        });
    
    // Prints Mouseover
    $('#art img').css('opacity','.7');
    $('#art img').mouseover(
        function(){
            $(this).css('opacity','1');
        });
    
    // new graphic click enlarge 
    $('#graphic div.expand').on('click', function(event) {
      $(this).css({
          'height': 'auto',
          'borderBottom': '1px solid black',
      });
    });
    
    
}) //end ready