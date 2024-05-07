



let popModal = document.querySelector(".popup-5");
    
let innerBody = document.querySelectorAll(".popup-5 .inner-5");
 let closeModal = document.querySelectorAll(" .close-5");
let showModal= document.querySelectorAll(".show-popup-5");
 
showModal.forEach((ele) =>{
    ele.onclick = function(){
         let setEl = document.querySelector(this.dataset.pop);
         popModal.style.display="block";
         innerBody.forEach((li)=>{
               li.style.display="none";
          });
          setEl.style.display = "block";
    };
    
}); 

closeModal.forEach((ele)=>{
ele.onclick=function(){
    popModal.style.display="none";
}
});
     popModal.onclick=function(){
          this.style.display="none";
        }
      innerBody.onclick=function (e){
          e.stopPropagation();

      };

















// // popup-1

let pop = document.querySelectorAll(".popup");
    
let inner = document.querySelectorAll(".popup .inner");
 let closePop = document.querySelectorAll(".close");
let showPop= document.querySelectorAll(".show-popup");

showPop.forEach((ele) =>{
    ele.onclick = function(){
         let setEle = document.querySelectorAll(this.dataset.pop);
         console.log(setEle)
        pop.forEach((popy)=>{
            popy.style.display="block";
        }); 
         inner.forEach((li)=>{
               li.style.display="none";
          });
          setEle.forEach((set)=>{
              set.style.display = "block";
          }); 
          
    };
    
}); 

closePop.forEach((ele)=>{
ele.onclick=function(){
    pop.forEach((popy)=>{
        popy.style.display="none";
    });}
});
     pop.forEach((p)=>{
         p.onclick=function(){
            this.style.display="none";
          }
     }) 
      inner.forEach((en) =>{
          en.onclick=function (e){
            e.stopPropagation();
  
        };
      }) 


    
 
      
      let playVideo=document.querySelectorAll(".fa-play");
 let pauseVideo=document.querySelectorAll(".fa-pause");
 let videoPoster=document.querySelectorAll(".video-post video");
 
  videoPoster.forEach((ve) =>{
ve.currentTime=.5;
  })
  
playVideo.forEach((ele,i) =>{
    ele.onclick =function (){
        // videoPoster.forEach((v) =>{
        //     v.play();
        //     v.controls=true;
        // })
          videoPoster[i].play();
          videoPoster[i].controls=true;

         ele.style.display="none";
        // pauseVideo.forEach((p) =>{
        //     p.style.display="block";
        // })
        pauseVideo[i].style.display="block";
        };
})
 

pauseVideo.forEach((ele,i) =>{
    ele.onclick =function (){
        // videoPoster.forEach((v) =>{
        //     v.pause();
        //  })
          videoPoster[i].pause();
         ele.style.display="none";
        // playVideo.forEach((p) =>{
        //     p.style.display="block";
        // })
        playVideo[i].style.display="block";
        };
})
 
 
      
      
      







//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop. classList.toggle('active', window.scrollY > 500);
 
});



// =======================reveal======================//
let revealPyramid=document.querySelectorAll(".reveal-pyramid");

window.onload=function(){
revealPyramid.forEach((ele)=>{
ele.classList.add("active")
})
};