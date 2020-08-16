
    const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
    })
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}  