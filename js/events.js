
  

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
 
 