 //  /*------------------------------------- counter and reveal--------------------------------*/
let section = document.querySelector(".three");
let nums = document.querySelectorAll(".nums .num");
let started= false;
window.onscroll=function(){
   if(window.scrollY >= section.offsetTop - 400){
       if(!started){
           nums.forEach((num)=> startCount(num));

       }
       started = true;
   }

};


function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal){
       clearInterval(count);
    }
    }, 2000 / goal)
   
};
// let reveals = document.querySelectorAll(".reveal");
 
//    reveals.forEach((ele)=>{
//        if(window.scrollY >= ele.offsetTop - 400){
//        ele.classList.add("active");
//        }
//          })

 //javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

//  ======================Video========================//
 
let playVideo=document.querySelectorAll(".fa-play");
let pauseVideo=document.querySelectorAll(".fa-pause");
let videoPoster=document.querySelectorAll(".video-post video");

 videoPoster.forEach((ve) =>{
ve.currentTime=.5;
 })
 
playVideo.forEach((ele,i) =>{
   ele.onclick =function (){
      
         videoPoster[i].play();
         videoPoster[i].controls=true;

        ele.style.display="none";
        
       pauseVideo[i].style.display="block";
       };
})


pauseVideo.forEach((ele,i) =>{
   ele.onclick =function (){
       
         videoPoster[i].pause();
        ele.style.display="none";
       
       playVideo[i].style.display="block";
       };
})

 
//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop. classList.toggle('active', window.scrollY > 500);
 
});
 
// scrolltotop.addEventListener('click',function(){
//     document.body.scrollTop=0;
//     document.documentElement.scrollTop=0;
// });
 

// ====================loady=======================//
let loadyTwo=document.querySelectorAll(".loady-2");

let loady=document.querySelectorAll(".loady");
window.onload=function(){
  loady.forEach((e) =>{
e.classList.add("active");
  }) 
  loadyTwo.forEach((e)=>{
e.classList.add("active");
  }) 

}
 

// -======================modal=============//
function modalVideo(){
  const watchVideo=document.querySelector(".js-courses-preview-modal");
  if(watchVideo){
    watchVideo.addEventListener("shown.bs.modal",function(){
      this.querySelector(".js-courses-preview-video").play();
      this.querySelector(".js-courses-preview-video").currentTime=0;

    })
   
  }
  watchVideo.addEventListener("hide.bs.modal",function(){
    this.querySelector(".js-courses-preview-video").pause();

  })
}
modalVideo();