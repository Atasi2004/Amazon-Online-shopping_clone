let slideLeftBtn = document.getElementById("slide-btn-left");
let slideRightBtn = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let start=0;
let end = (imgItem.length-1)*100;
console.log(end);



slideLeftBtn.addEventListener("click",slideLeft);
function slideLeft(){
    // alert("yes");
    if(start < 0){
        start = start + 100;
    }else{
        start = -500;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${start}%)`;
        
    })

}
slideRightBtn.addEventListener("click",slideRight);
function slideRight(){
    if(start >= -end + 200){
        start = start - 100;
    }else{
        start = 0;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${start}%)`;
        
    })
}

//Automatic slider
function renderSlideAuto(){
    if(start >= -end+100){
        slideRight();
    }else{
        start=0;
    }
}
setInterval(renderSlideAuto,3000);

