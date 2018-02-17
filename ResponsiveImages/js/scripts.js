function runJS(){
    document.querySelectorAll("div[class^='col-xs']").forEach((x,index)=>{
        // alert("heya");
        x.style.backgroundImage = "url('img/"+(index+1)+".png')";
    });
}