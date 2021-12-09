"use strict";

window.addEventListener("DOMContentLoaded", ()=>{

    const menuClose = document.querySelector(".menu-close"),
        menuOpen = document.querySelector(".menu-open"),
        btnMenuOpen = document.querySelector(".menu-close__close-icon"),
        btnMenuClose = document.querySelector(".menu-open-cross__link"),
        filterLinks = document.querySelectorAll(".filter__link"),       
        btnSizeOnSale = document.querySelectorAll(".product-btn__on-sale"),
        colorsCircle = document.querySelectorAll(".product-colors-item");

// Menu

    switchMenu(btnMenuClose);
    switchMenu(btnMenuOpen);
    
    function switchMenu(element){
        
        element.addEventListener("click", (e)=>{
            e.preventDefault();
            menuClose.classList.toggle("menu-hidden");
            menuOpen.classList.toggle("menu-hidden");
           
        });
    }

//Filter

    filterLinks.forEach(link =>{
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            
            switchActiveClass("filter__active", link);
            link.classList.add("filter__active");
            
            let data = link.dataset.filter,
                tab = document.querySelector(`[data-information='${data}']`);
            
            switchActiveClass("tabs_active", tab);           
        });
    });


// BTN Size
    
    btnSizeOnSale.forEach(btn =>{
        btn.addEventListener("click", (e)=>{
            e.preventDefault(); 
            switchActiveClass("product-btn__active", btn);
        });
    });

// Colors

    colorsCircle.forEach(circle => {
        circle.addEventListener("click", (e)=>{
            e.preventDefault();
            switchActiveClass("product-colors-item_active", circle); 
            let data = circle.dataset.btn,
                thsirt = document.querySelector(`[data-tshirts-color='${data}']`);
            
            switchActiveClass("product__photo_active", thsirt);
        });
    });

    // 

    function switchActiveClass(activeClass, element){
        let active = document.querySelector(`.${activeClass}`);
        active.classList.remove(activeClass);
        element.classList.add(activeClass); 
    }
});





