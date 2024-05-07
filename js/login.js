
//   /*------------------------------------- style switcher--------------------------------*/
//   function styleSwitcherToggle(){
//     let styleSwitcher = document.querySelector(".js-style-switcher"),
//     styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
//     styleSwitcherToggler.addEventListener("click", function(){
//             styleSwitcher.classList.toggle("open");
//             this.querySelector("i").classList.toggle("fa-times");
//             this.querySelector("i").classList.toggle("fa-cog");

//         });
//  }
// styleSwitcherToggle();

//  /*------------------------------------- theme color--------------------------------*/

//   let styleHref = document.querySelector(".change-color"),
//   color = document.querySelectorAll(".color");
 


//   color.forEach((ele) =>{
//         ele.onclick= function () {
//             //1
//             color.forEach((e) =>{
//                 e.classList.remove("active");
//             });
//             this.classList.add("active");
//             // 2............
//            let colorTheme = ele.dataset.color;
//             console.log(colorTheme);
//             window.localStorage.setItem("color",colorTheme);
//             styleHref.href=window.localStorage.color+".css";
 
//         };
//  if(ele.dataset.color === window.localStorage.color){
//      ele.classList.toggle("active");

//  }
//   styleHref.href = window.localStorage.color+(".css");

//   });


//    /*------------------------------------- theme color  dark mode--------------------------------*/
//  function themeLightDark(){
// let darkModeCheck=document.querySelector(".js-dark-mode");
// darkModeCheck.addEventListener("click", function(){
//     if(this.checked){
// localStorage.setItem("theme-dark","true")
//     }else{
//         localStorage.setItem("theme-dark","false")
//     }
//     themeMode();
// });
// function themeMode(){
//     if(localStorage.getItem("theme-dark") === "false"){
//         document.body.classList.remove("t-dark")

//     }else{
//         document.body.classList.add("t-dark")

//     }

//  };
//  if(localStorage.getItem("theme-dark") !== null){
//     themeMode();
//  }
// if(document.body.classList.contains("t-dark")){
//     darkModeCheck.checked = true;
// }
//  };
//  themeLightDark()

// /*let darkMode =document.querySelector(".js-dark"),
// changeMode = document.querySelector(".form-switch");

// changeMode.addEventListener("click", (e) =>{
//     darkMode.classList.toggle("t-dark");
//     let modeTheme = document.querySelector(".t-dark");
//     console.log(modeTheme);
    
//  }); */

 
// /*--------------------------------------theme glass effect------------------------------- */

// function themeGlassEffect(){
// let glassEffectChecked =document.querySelector(".js-glass-effect"),
// glassStyle = document.querySelector(".js-glass-style");
// glassEffectChecked.addEventListener("click", function(){
// if(this.checked){
//     localStorage.setItem("glass-effect", "true")
// }else{
//     localStorage.setItem("glass-effect", "false")

// }
// glass();
// });

// function glass(){
//     if(localStorage.getItem("glass-effect") === "true"){
//         glassStyle.removeAttribute("disabled")
//     }else{
//         glassStyle.disabled = true;

//     }
// }
// if(localStorage.getItem("glass-effect") !== null){
//     glass();
// }
// if(!glassStyle.hasAttribute("disable")){
//     glassEffectChecked.checked= true;
// }
// };
// themeGlassEffect();

 



 

// function themeColor(){
//     const colorStyle=  document.querySelector(".change-color"),
//     themeColorContainer=document.querySelector(".js-theme-colors");
//     console.log(colorStyle)
// themeColorContainer.addEventListener("click", ({target}) =>{
//    if(target.classList.contains("js-theme-color-item")){
//        localStorage.setItem("color",target.getAttribute("data-color"));
//        setColor();
//    }
// });
// function setColor(){
//    let path = colorStyle.getAttribute("href").split("/");
//    path= path.slice(0, path.length-1);
//    colorStyle.setAttribute("href",path.join("/") + "/" + localStorage.getItem("color") + ".css")

// if(document.querySelector("js-theme-color-item.active")){
//    document.querySelector("js-theme-color-item.active").classList.remove("active")
// }

// document.querySelector("[data-color=" +  localStorage.getItem("color") + "]").classList.add("active");

// }
// if(localStorage.getItem("color") !== Null){
//    setColor();
// }else{
//    const defaultColor= colorStyle.getAttribute("href").split("/").pop().split(".").shift();
//    document.querySelector("[data-color=" +  defaultColor "]").classList.add("active");

// }
// }
// themeColor();