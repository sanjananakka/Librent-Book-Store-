let searchForm =document.querySelector('.search-form');
 
 document.querySelector('#search-btn').onclick = () =>
 {
    searchForm.classList.toggle('active');
 }


let loginForm = document.querySelector('.login-form');
 
 document.querySelector('#btn').onclick = () =>
 {
    loginForm.classList.toggle('active');
 }
 
var btnPrev = document.querySelector("#btnPrev")
var btnNext = document.querySelector("#btnNext")

var counter = 0;
var slides = document.querySelectorAll(".slidee")
console.log(slides)
slides.forEach(function(slide,index){
   slide.style.left=`${index*100}%`;
})

btnPrev.addEventListener("click",function(){
   counter--;
   console.log(counter)
   if (counter<0) {
      counter=0;
   }
   slides.forEach(function(slide){
      slide.style.transform=`translateX(-${counter*100}%)`
   })
})

btnNext.addEventListener("click",function(){
   counter++;
   console.log(counter)
   if (counter>2) {
      counter=0;
   }
   slides.forEach(function(slide){
      slide.style.transform=`translateX(-${counter*100}%)`
   })
})


function sliding(){
     counter++;
   console.log(counter)
   if (counter>2) {
      counter=0;
   }
   slides.forEach(function(slide){
      slide.style.transform=`translateX(-${counter*100}%)`
   })

}

setInterval(sliding,6000);





let span = document.getElementsByTagName('span');
  let product = document.getElementsByClassName('product')
  let product_page = Math.ceil(product.length/4);
  let l = 0;
  let movePer = 25.34;
  let maxMove = 203;
  // mobile_view  
  let mob_view = window.matchMedia("(max-width: 768px)");
  if (mob_view.matches)
   {
    movePer = 50.36;
    maxMove = 504;
   }

  let right_mover = ()=>{
    l = l + movePer;
    if (product == 1){l = 0; }
    for(const i of product)
    {
      if (l > maxMove){l = l - movePer;}
      i.style.left = '-' + l + '%';
    }

  }
  let left_mover = ()=>{
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of product){
      if (product_page>1){
        i.style.left = '-' + l + '%';
      }
    }
  }
  span[1].onclick = ()=>{right_mover();}
  span[0].onclick = ()=>{left_mover();}




var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


/*==========New books==========*/
let swiperNew = new Swiper(".new--swiper", {
      
     loop:true,
     spaceBetween: 16,
     slidesPerView:'auto',

      breakpoints:{

         3024:{
            slidesPerView:3,
         }

      }
    })




const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');

function handleDrag(element) {
  let pressed = false;
  let startX = 0;

  element.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
    this.style.cursor = 'grabbing';
  });

  element.addEventListener('mouseleave', function () {
    pressed = false;
  });

  window.addEventListener('mouseup', function () {
    pressed = false;
    element.style.cursor = 'grab';
  });

  element.addEventListener('mousemove', function (e) {
    if (!pressed) {
      return;
    }

    this.scrollLeft += startX - e.clientX;
  });
}

handleDrag(slider1);
handleDrag(slider2);

function task(){
    var today=new Date()
    var targetDate=new Date("11/20/2023 15:00:00")
    var difference=(targetDate-today)/1000

    var days=Math.floor(difference/3600/24)
    var hours=Math.floor((difference/3600)%24)
    var minutes=Math.floor((difference/60)%60)
    var seconds=Math.floor(difference%60)
    var result=document.querySelectorAll(".card h1")
    result[0].innerText=days;
    result[1].innerText=hours;
    result[2].innerText=minutes;
    result[3].innerText=seconds;

}
setInterval(task,100)














