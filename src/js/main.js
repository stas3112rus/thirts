"use strict";

window.addEventListener("DOMContentLoaded", ()=>{

    const menuClose = document.querySelector(".menu-close"),
          menuOpen = document.querySelector(".menu-open"),
          btnMenuOpen = document.querySelector(".menu-close__close-icon"),
          btnMenuClose = document.querySelector(".menu-open-cross__link"),
          filterLinks = document.querySelectorAll(".filter__link"),
          slidersList = document.querySelectorAll(".slider"); 

    let slideActive = 0;

    

//Sliders

    setInterval(()=>{   
        let sliderNext = slideActive + 1;
        
        if (sliderNext == slidersList.length){
            sliderNext = 0;
        }

        slidersList[slideActive].classList.add("slider_hidden");
        slidersList[sliderNext].classList.remove("slider_hidden");

        slideActive = sliderNext;

    }, 5000);

// Menu

    switchMenu(btnMenuClose);
    switchMenu(btnMenuOpen);
    
    function switchMenu(element){
        
        element.addEventListener("click", (e)=>{
            e.preventDefault();
            menuClose.classList.toggle("menu-hidden");
            menuOpen.classList.toggle("menu-hidden");
            console.log(12);
        });
    }

//Filter

    filterLinks.forEach(link =>{
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            
            removeActiveFilterLinks();
            link.classList.add("filter__active");   });
    });

    function removeActiveFilterLinks(){
        for(let i=0; i<filterLinks.length; i++){
            filterLinks[i].classList.remove("filter__active");
        }       
    }
});

