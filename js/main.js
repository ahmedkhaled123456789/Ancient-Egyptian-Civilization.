
// ============================loading==========================//
let loader=document.querySelectorAll(".loading");
window.addEventListener('load', function(){
    loader.forEach((e) =>{
e.style.display="none";
    });
    // loader.parentElement.removeChild(loader)
   
})
  //  /*------------------------------------- style switcher--------------------------------*/
function styleSwitcherToggle(){
    let styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function(){
            styleSwitcher.classList.toggle("open");
            this.querySelector("i").classList.toggle("fa-times");
            this.querySelector("i").classList.toggle("fa-cog");

        });
 }
styleSwitcherToggle();

  //  /*------------------------------------- theme color--------------------------------*/
let styleHref = document.querySelector(".change-color"),
color = document.querySelectorAll(".color");
// window.onload=function(){
    

// }


let colorStorage = localStorage.getItem("color")
if(!colorStorage ) {
    window.localStorage.setItem("color","color-2");
    styleHref.href = colorStorage;
}


color.forEach((ele) =>{
      ele.onclick= function () {
          //1
          color.forEach((e) =>{
              e.classList.remove("active");
          });
          this.classList.add("active");
          // 2............
         let colorTheme = ele.dataset.color;
           window.localStorage.setItem("color",colorTheme);
          styleHref.href=window.localStorage.color+".css";

      };
if(ele.dataset.color === window.localStorage.color){
   ele.classList.toggle("active");

}
styleHref.href = window.localStorage.color+(".css");

});
 
//    /*------------------------------------- theme color  dark mode--------------------------------*/
 function themeLightDark(){
let darkModeCheck=document.querySelector(".js-dark-mode");
darkModeCheck.addEventListener("click", function(){
    if(this.checked){
localStorage.setItem("theme-dark","true")
    }else{
        localStorage.setItem("theme-dark","false")
    }
    themeMode();
});
function themeMode(){
    if(localStorage.getItem("theme-dark") === "false"){
        document.body.classList.remove("t-dark")

    }else{
        document.body.classList.add("t-dark")

    }

 };
 if(localStorage.getItem("theme-dark") !== null){
    themeMode();
 }
if(document.body.classList.contains("t-dark")){
    darkModeCheck.checked = true;
}
 };
 themeLightDark()
// /*--------------------------------------theme glass effect------------------------------- */

function themeGlassEffect(){
let glassEffectChecked =document.querySelector(".js-glass-effect"),
glassStyle = document.querySelector(".js-glass-style");
glassEffectChecked.addEventListener("click", function(){
if(this.checked){
    localStorage.setItem("glass-effect", "true")
}else{
    localStorage.setItem("glass-effect", "false")

}
glass();
});

function glass(){
    if(localStorage.getItem("glass-effect") === "true"){
        glassStyle.removeAttribute("disabled")
    }else{
        glassStyle.disabled = true;

    }
}
if(localStorage.getItem("glass-effect") !== null){
    glass();
}
if(!glassStyle.hasAttribute("disabled")){
    glassEffectChecked.checked= true;
}
};
themeGlassEffect();


//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelectorAll(".menu-btn");
const navigation = document.querySelectorAll(".header-menu");
const navigationItems = document.querySelectorAll(".header-menu a")

menuBtn.forEach((men)=>{
    men.addEventListener("click",function(){
        this.classList.toggle("active");
navigation.forEach((nav)=>{
    nav.classList.toggle("active")
})
    })
})
 

// navigationItems.forEach((navigationItem) => {
//   navigationItem.addEventListener("click", () => {
//     menuBtn.forEach((ele) =>{
//         ele.classList.remove("active");
//     }) ;
//     navigation.forEach((na)=>{
//         na.classList.remove("active");
//     }) 
//   });
// });



  
//  /*------------------------------------- change language--------------------------------*/
let languageMain = document.querySelectorAll(".main-wrapper"),
flag = document.querySelectorAll(".language");
 
flag.forEach((ele) =>{
 
    let lange = localStorage.getItem("language");
    if(lange === "english"){
        document.querySelector(".romania-main").classList.add("hidden"); 
     }else{
        document.querySelector(".english-main").classList.add("hidden"); 
     
    }
    
    ele.onclick= function () {
          //1
          languageMain.forEach((e) =>{
              e.classList.toggle("hidden");
          });
           // 2............
          
           this.classList.contains("english")?localStorage.setItem("language", "romaina"):localStorage.setItem("language", "english");
    //   if(this.classList === "romaina"){
    //       localStorage.getItem("language", "romania")
    //   }else{
    //     localStorage.getItem("language", "english")

    //   }
      
      
        };
 
 
});
  
//javascript for  cursor

let cursor =document.querySelector(".cursor");
let cursor2 =document.querySelector(".cursor-2");
document.addEventListener('mousemove', function(e){
cursor.style.cssText = cursor2.style.cssText ="left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


  


    