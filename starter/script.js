'use strict';
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal")
const btnOpen = document.querySelectorAll(".show-modal")

function openModal(){
    overlay.classList.remove("hidden")
    modal.classList.remove("hidden")
}

function closeModal(){
    overlay.classList.add("hidden")
    modal.classList.add("hidden")
}


for(let i =0;i<btnOpen.length;i++){
    btnOpen[i].addEventListener("click",openModal)
        btnClose.addEventListener("click",closeModal)

        overlay.addEventListener("click",closeModal)

        document.addEventListener("keyup",function(e){
            if (e.key === "Escape" ){
         closeModal()
            }
    })
}



