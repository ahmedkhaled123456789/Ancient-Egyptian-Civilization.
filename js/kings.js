 
 

 //javascript for reveal website elements on scroll
     window.addEventListener("scroll", reveal);

    function reveal(){
      var reveals = document.querySelectorAll(".reveal");
    
      for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
     
        if(revealTop < windowHeight  ){
          reveals[i].classList.add("active");
        }
      }
    }
 







//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop. classList.toggle('active', window.scrollY > 500);
 
});
 






// =======================reveal======================//
let revealKing=document.querySelectorAll(".reveal-king");

window.onload=function(){
  revealKing.forEach((ele)=>{
ele.classList.add("active")
})
};