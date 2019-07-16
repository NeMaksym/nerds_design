var arrButtons = document.querySelectorAll(".slider .slider-controls .controls-item");
var arrSlides = document.querySelectorAll(".slider .slide");

var addClickHandler = function(button, description) {
    button.addEventListener("click", function() {
        for(var j=0; j<arrButtons.length; j++) {
            arrButtons[j].classList.remove("selected");
            arrSlides[j].classList.remove("selected");
        }
            
        button.classList.add("selected");
        description.classList.add("selected");
    });
}


for (var i=0; i<arrButtons.length; i++) {
    addClickHandler(arrButtons[i], arrSlides[i]);
}