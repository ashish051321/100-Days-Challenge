document.addEventListener("DOMContentLoaded",function(){
   
    let myProjectContainer = document.querySelector("div.container.myprojects");
    let myprojects = myProjectContainer.querySelectorAll("div.col-lg-4");
    // alert(myprojects.length);
    document.querySelector("span#projectCount").textContent = myprojects.length;
});