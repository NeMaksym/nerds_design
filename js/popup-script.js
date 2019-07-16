// ===== попап формы ===== //
var formButton = document.querySelector(".map .contacts button");
var orderButtons = document.querySelectorAll(".services .service-item button");
var formPopup = document.querySelector(".modal-contact-form");
var formClose = formPopup.querySelector(".modal-btn-close");
var overlay = document.querySelector(".overlay");

formButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});

var orderFormOpen = function(button) {
    button.addEventListener("click", function() {
        formPopup.classList.add("modal-show");
        overlay.classList.add("modal-show");
    });
};

for (var i=0; i<orderButtons.length; i++) {
    orderFormOpen(orderButtons[i]);
}

formClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function(evt) {
    formPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});