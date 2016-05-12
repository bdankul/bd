//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // hide descriptions
    $('section article p').hide();
    
    // laptop events
    $('article.laptop img').mouseover(
        function (){
            $('article.laptop img').attr('src','images/laptopH.svg');
        });
    $('article.laptop img').mouseout(
        function (){
            $('article.laptop img').attr('src','images/laptopL.svg');
        }); // p show/hide
    $('article.laptop img').hover(
        function(){
            $('section p#laptop').show();
        },
        function(){
            $('section p#laptop').hide();
        }); // click
    $('article.laptop img').stop().click(
        function (){
           $('article.laptop img').attr('src','images/laptopF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end laptop
    
    // bottle events
    $('article.bottle img').mouseover(
        function (){
            $('article.bottle img').attr('src','images/bottleH.svg');
        });
    $('article.bottle img').mouseout(
        function (){
            $('article.bottle img').attr('src','images/bottleL.svg');
        }); // p show/hide
    $('article.bottle img').hover(
        function(){
            $('section p#bottle').show();
        },
        function(){
            $('section p#bottle').hide();
        }); // click
    $('article.bottle img').stop().click(
        function (){
           $('article.bottle img').attr('src','images/bottleF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end bottle
    
    // planner events
    $('article.planner img').mouseover(
        function (){
            $('article.planner img').attr('src','images/plannerH.svg');
        });
    $('article.planner img').mouseout(
        function (){
            $('article.planner img').attr('src','images/plannerL.svg');
        }); // p show/hide
    $('article.planner img').hover(
        function(){
            $('section p#planner').show();
        },
        function(){
            $('section p#planner').hide();
        }); // click
    $('article.planner img').stop().click(
        function (){
           $('article.planner img').attr('src','images/plannerF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end planner
    
    // phone events
    $('article.phone img').mouseover(
        function (){
            $('article.phone img').attr('src','images/phoneH.svg');
        });
    $('article.phone img').mouseout(
        function (){
            $('article.phone img').attr('src','images/phoneL.svg');
        }); // p show/hide
    $('article.phone img').hover(
        function(){
            $('section p#phone').show();
        },
        function(){
            $('section p#phone').hide();
        }); // click
    $('article.phone img').stop().click(
        function (){
           $('article.phone img').attr('src','images/phoneF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end phone
    
    // pencil events
    $('article.pencil img').mouseover(
        function (){
            $('article.pencil img').attr('src','images/pencilH.svg');
        });
    $('article.pencil img').mouseout(
        function (){
            $('article.pencil img').attr('src','images/pencilL.svg');
        }); // p show/hide
    $('article.pencil img').hover(
        function(){
            $('section p#pencil').show();
        },
        function(){
            $('section p#pencil').hide();
        }); // click
    $('article.pencil img').stop().click(
        function (){
           $('article.pencil img').attr('src','images/pencilF.svg').fadeIn().unbind('mouseover mouseout'); 
            return false;
        }); //end phone
    
}); //end ready