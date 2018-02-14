document.addEventListener("DOMContentLoaded",function(){
    let x =10;//just some dummy assignment
    let myProjectContainer = document.querySelector("div.container.myprojects");
    let myprojects = myProjectContainer.querySelectorAll("div.col-lg-4");
    // alert(myprojects.length);
    document.querySelector("span#projectCount").textContent = myprojects.length;

    
    $('#datepicker').Zebra_DatePicker({
        always_visible: $('#datecontainer')
    });



});
