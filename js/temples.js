 // popup-2

 let popShow = document.querySelector(".pop-show");
    
 let innerShow = document.querySelectorAll(".pop-show .inner-pop");
   let closeShow = document.querySelectorAll(".close-pop");
 let showPopup= document.querySelectorAll(".show-popup-2");
 
 showPopup.forEach((ele) =>{
     ele.onclick = function(){
          let setElement = document.querySelector(this.dataset.popup);
         popShow.style.display="block";
          innerShow.forEach((li)=>{
                li.style.display="none";
           });
           setElement.style.display = "block";
     };
     
 }); 
 
 closeShow.forEach((ele)=>{
 ele.onclick=function(){
     popShow.style.display="none";
 }
 });
      popShow.onclick=function(){
           this.style.display="none";
       }
       innerShow.onclick=function (e){
           e.stopPropagation();
       };
 
 
//  ======================pop 2=============================
let pop2 = document.querySelector(".popup-9");
    
let inner2 = document.querySelectorAll(".popup-9 .inner9");
 let closePop2 = document.querySelectorAll(".close-9");
let showPop2= document.querySelectorAll(".show-popup-9");

showPop2.forEach((ele) =>{
    ele.onclick = function(){
          let setEle2 = document.querySelectorAll(this.dataset.up);
          pop2.style.display="block";
        console.log(setEle2)
         inner2.forEach((li)=>{
               li.style.display="none";
          });
          setEle2.forEach((e) =>{
e.style.display="block";
          }) 
          
          
    };
    
}); 


closePop2.forEach((ele)=>{
    ele.onclick=function(){
        pop2.style.display="none";
    }
    });
         pop2.onclick=function(){
              this.style.display="none";
          }
          inner2.onclick=function (e){
              e.stopPropagation();
          };
 
//        //service section - Modal
//        const clickModalPo =document.querySelectorAll(".img-card");
//        const modalPo=document.querySelectorAll('.portfolio-modal');
//        const modalBtnPo=document.querySelectorAll('.modal-close-btn ');
        
//         var modals= function(modalClick)  {
//     modalPo[modalClick].classList.add("active");
// }
       
//        clickModalPo.forEach( (ele, i) => {
//            ele.addEventListener("click", () =>{
//             modals(i);
//                       });
//        });
       
//        modalBtnPo.forEach((ele) =>{
//        ele.addEventListener("click", () =>{
//            modalPo.forEach((mod)=>{
//                mod.classList.remove("active");
//            })
//        })
//        })
 





//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop. classList.toggle('active', window.scrollY > 500);
 
});



// =======================reveal======================//
let revealTemple=document.querySelectorAll(".reveal-temple");

window.onload=function(){
revealTemple.forEach((ele)=>{
ele.classList.add("active")
})
};