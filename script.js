const menuOpenButton =
    document.querySelector("#menu-open-button");

const menuCloseButton =
    document.querySelector("#menu-close-button");

const navLinks =
    document.querySelectorAll(".nav-menu a");


function openMenu() {

    document.body.classList.add(
        "show-mobile-menu"
    );

}


function closeMenu() {

    document.body.classList.remove(
        "show-mobile-menu"
    );

}


if (menuOpenButton) {

    menuOpenButton.addEventListener(
        "click",
        openMenu
    );

}


if (menuCloseButton) {

    menuCloseButton.addEventListener(
        "click",
        closeMenu
    );

}


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);