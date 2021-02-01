////////////////////////////////////////////////////   PAGE LOAD    //////////////////////////////////////////////////////////

window.onload = function() {
  const loadPage = document.querySelector(".load");

  this.setTimeout(() => {
    loadPage.classList.remove('active')
  }, 300);

  for(let i = 0; i < itemMenu.length; i++) {
    const items = itemMenu[i];


    items.onclick = e => {
      e.preventDefault();
      let target = e.target.href;
      for(let i =0; i < itemMenu.length; i++) {
        itemMenu[i].style.cssText = "opacity: 0; transition: 0.3s; transition-delay: 0.1s; line-height: 1.2";
      }
      
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    }
  }
}

//////////////////////////////  ////////  NAV BAR  ///////

$('#close-menu').on('click', function() {
  document.querySelector(".menu").style.transform = "scaleY(0)";

  for(let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].style.cssText = "opacity: 0; transition: 0.3s; ";
  }
});

$('#open-menu').on('click', function() {    
  document.querySelector(".menu").style.transform = "scaleY(1)";
  for(let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].style.cssText = "opacity: 1; transition: 0.3s; transition-delay: 0.27s; line-height: 1.2;";
  }
});
let itemMenu = document.querySelectorAll(".item-menu")

//////////ROTATION-BOTTON-MENU//////////////

$('#open-menu').on('click', function() {
  document.querySelector(".bottom-menu").style.transform = "rotate(45deg)";
});

$('#close-menu').on('click', function() {
  document.querySelector(".bottom-menu").style.transform = "rotate(0deg)";
});

$('#open-menu').on('click', function() {
  document.querySelector(".close-btn").style.cssText = "transform: rotate(0deg); opacity: 1";
});

$('#close-menu').on('click', function() {
  document.querySelector(".close-btn").style.cssText = "transform: rotate(-45deg); opacity: 0; transition: 0.2s";
});


///////////////////////MODAL///////////////////////////


let hover = document.querySelectorAll(".box-item")
let fadeIn = document.querySelectorAll(".item-hover");
let fadeOut = document.querySelectorAll(".close-modall");

let modal = document.querySelectorAll(".modall");
let modalContent = document.querySelectorAll(".modall-content");
let video = document.querySelectorAll("#video");
let fade = document.querySelectorAll("#fade-in");
let tittle = document.querySelectorAll(".tittle");
let description = document.querySelectorAll(".description");

for(let i = 0; i < fadeIn.length; i++) {
  fadeIn[i].onclick = function() {

    for(let i =0; i < video.length; i++) {
      video[i].style.cssText = "opacity: 1; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: .8s"
    }

    for(let i =0; i < fade.length; i++) {
      fade[i].style.cssText = "opacity: 1; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1s";
    }

    for(let i =0; i < tittle.length; i++) {
      tittle[i].style.cssText = "opacity: 1; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1s";
    }

    for(let i =0; i< description.length; i++) {
      description[i].style.cssText = "opacity: 1; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1.2s";
    }

  };
}

for(let i = 0; i < fadeOut.length; i++) {
  fadeOut[i].onclick = function() {

  
    for(let i =0; i < video.length; i++) {
      video[i].style.cssText = "opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: .8s";
    }

    for(let i =0; i < fade.length; i++) {
      fade[i].style.cssText = "opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1s";
    }

    for(let i =0; i < tittle.length; i++) {
      tittle[i].style.cssText = "opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1s";
    }

    for(let i =0; i < description.length; i++) {
      description[i].style.cssText = "opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); transition-delay: 1.2s";
    }
  };
}


////////////////////////////////////////////////////   ITEM HOVER   //////////////////////////////////////////////////////////

for(let i = 0; i < hover.length; i++) {
  hover[i].ontouchstart  = function() {
    fadeIn[i].style.cssText = "opacity: 1; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
  
  };
}

for(let i = 0; i < hover.length; i++) {
  hover[i].ontouchend = function() {
    fadeIn[i].style.cssText = "opacity: 0; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
  
  };
}

