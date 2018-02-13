
document.addEventListener("DOMContentLoaded", () => {
    // global variables
    var widthOfImageElements = [];
    var imageElements = [];

    setTimeout(() => {
        adjustImages();
    }, 2000);

    window.onresize = adjustImages;


    function adjustImages() {
        document.querySelectorAll("div.container img.item").forEach((elt) => {
            elt.style.display = "inline-block";
        });

        var myAvailableWidth = document.querySelector("div#myImages").getBoundingClientRect().width;
        widthOfImageElements.length = 0;
        imageElements.length = 0;
        removeElementsToMatchWidthNeeds(myAvailableWidth);
    }

    function getTotalElementWidth() {

        var total_occupied_width = 0;

        document.querySelectorAll("div.container img.item").forEach((elt) => {
            imageElements.push(elt);
            var dummy = elt.getBoundingClientRect().width;
            widthOfImageElements.push(dummy);
            total_occupied_width += dummy;
        });

        return total_occupied_width;
    }

    function removeElementsToMatchWidthNeeds(totalWidth) {
        widthOccupied = getTotalElementWidth();
        var index = widthOfImageElements.length - 1;
        while (totalWidth <= widthOccupied) {
            //keep deleting elements
            console.log("deleted");
            imageElements[index].style.display = "none";
            widthOccupied = widthOccupied - widthOfImageElements[index];
            index--;
        }
    }


    //When the checkbox is checked, the getBoundingClientRect effect is removed
    document.querySelector("input#removeEffect").addEventListener("click", (event) => { 
        if(event.target.checked){
            window.onresize = null;
            document.querySelectorAll("div.container img.item").forEach((elt) => {
                elt.style.display = "inline-block";
            });
    
        }
        else{
            adjustImages();
            window.onresize = adjustImages();
        }
    });


});