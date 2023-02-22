const d = document;
const $btn_hamburger = d.querySelector(".hamburger"), navMenu = d.querySelector(".nav-menu");


d.addEventListener("click", (e)=>{

    if(e.target.matches(".hamburger")){
        $btn_hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    if(e.target.matches(".item")){
        $btn_hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});
