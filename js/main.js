window.addEventListener("load",()=>{

    const loader=document.getElementById("preloader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },3000);

});