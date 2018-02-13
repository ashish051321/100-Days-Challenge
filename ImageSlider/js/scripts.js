
document.addEventListener("DOMContentLoaded", () => {

    var elt = document.querySelector("div.container");
    var widthOfImageElements = [];
    var imageElements = [];

    setTimeout(()=>{
        adjustImages();
    },2000);

    window.onresize = function () {
        //Here I am going to get my image slider correct
        adjustImages();
    };

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

});