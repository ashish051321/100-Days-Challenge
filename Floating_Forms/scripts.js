    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("div#row2 > p:nth-child(1) > input").focus();
        
        document.querySelectorAll("input.submitButton")[0].addEventListener("click",()=>{
            document.querySelector("#frame-" + frameindex).classList.add("dn");
            frameindex++;
            document.querySelector("#frame-" + frameindex).classList.remove("dn");
            // document.querySelector("progress").classList.add("dn");
        });

        var frameindex = 1;
        //next will cause it to increase
        //back will casue it to decrement    
        document.querySelectorAll(".nextButton").forEach((x) => {
            x.addEventListener("click", onNext);
        });


        document.querySelectorAll(".backButton").forEach((x) => {
            x.addEventListener("click", onBack);
        });


        function onNext() {
            document.querySelector("#frame-" + frameindex).classList.add("dn");
            frameindex++;
            document.querySelector("#frame-" + frameindex).classList.remove("dn");
            handleProgressBar();
        }


        function onBack() {
            document.querySelector("#frame-" + frameindex).classList.add("dn");
            frameindex--;
            document.querySelector("#frame-" + frameindex).classList.remove("dn");
            handleProgressBar()
        }

        function handleProgressBar() {
            document.querySelectorAll("div.progress > div").forEach((x)=>{
                x.classList.remove("bg-red");
                x.classList.remove("bg-green");
                x.classList.add("bg-green");
            });

            for (let i = 1; i <= frameindex; i++) {
                document.querySelector("#progress-"+i).classList.remove("bg-green");
                document.querySelector("#progress-"+i).classList.add("bg-red");
            }
        }

    });