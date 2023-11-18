let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let startSlider=0;
let endSlider = (imgItem.length-1)*100;
console.log(endSlider);

slideBtnLeft.addEventListener("click",handleLeftBtn);
function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }else{
        startSlider = -900;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
        
    })
   
}
slideBtnRight.addEventListener("click",handleRightBtn);
function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        
            startSlider = startSlider - 100;
    }else{
        startSlider = 0;
    }
    
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
        
    })
}
//Automatic slide
function renderSlideAuto(){
    if(startSlider >= -endSlider+100){
        handleRightBtn();
    }else{
        startSlider=0;
    }
}
setInterval(renderSlideAuto,6000);

//side-slide-nav-bar
let allBar = document.querySelector(".All-head-nav-bar");
let crossCloseBar ;

allBar.addEventListener("click",openBars);
function openBars(){
    // allBar.style.visibility = 'visible';
    allBar.classList.toggle("open-head-nav");
    // alert("yes");
}

