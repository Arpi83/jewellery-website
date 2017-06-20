function display_hide (block)

{ 
    if ($(block).css('display') == 'none') 
        { 
            $(block).animate({height: 'show'}, 500); 
        } 
    else 
        {     
            $(block).animate({height: 'hide'}, 500); 
        }} 



var i = 0;
    
function slide (){
                i++;
        switch (i){
            case 1:
                $("#slide").attr("src","images/gr.jpg"); 
                break;
            case 2:
                $("#slide").attr("src","images/slide1.jpg");
                break;
            case 3:
                $("#slide").attr("src","images/slide2.jpg");
                i=0;
                break;
               }

    }
    setInterval("slide()",2000);