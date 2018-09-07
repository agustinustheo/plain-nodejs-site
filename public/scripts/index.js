loadHTML( "dilionHeader", "./_views/navbar.html" );
loadHTML( "dilionSidebar", "./_views/sidebar.html" );


let sliderNextButton = document.getElementById('dilion-slider-right-button');
let sliderPrevButton = document.getElementById('dilion-slider-left-button');
let sliderWidth = document.getElementById('dilion-slider').offsetWidth;
let slider = document.getElementById('dilion-slider-container');
let counter = 0;

function adjustSliderWidth(){
    sliderWidth = document.getElementById('dilion-slider').offsetWidth;
    slider.style.transform = 'translateX('+ parseInt(counter * -sliderWidth) +'px)';
}

function slideRight(){
    if(counter >= 6){
        slider.style.transform = 'translateX(0px)';
        counter = 0;
    }
    else{
        counter++;
        slider.style.transform = 'translateX('+ parseInt(counter * -sliderWidth) +'px)';
    }
}
function slideLeft(){
    if(counter <= 0 || slider.getAttribute("style")== null || slider.getAttribute("style")==""){
        slider.style.transform = 'translateX(-' + parseInt(6 * sliderWidth) + 'px)';
        counter = 6;
    }
    else{
        counter--;
        slider.style.transform = 'translateX('+ parseInt(counter * -sliderWidth) +'px)';
    }
}
let slideRepeat = setInterval(function(){
    slideRight()
},4000);

sliderNextButton.onclick = function(){ 
    slideRight(); 
    clearInterval(slideRepeat);
    slideRepeat = setInterval(
        function(){
            slideRight()
        }
    ,4000); 
}
sliderPrevButton.onclick = function(){ 
    slideLeft(); 
    clearInterval(slideRepeat);
    slideRepeat = setInterval(
        function(){
            slideRight()
        }
    ,4000); 
}