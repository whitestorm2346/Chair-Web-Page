const menubtn1 = document.querySelector("#toggler1");

menubtn1.addEventListener("click", function () {
    const menu = document.querySelector('.popup-navbar');

    if(menubtn1.checked) {
        menu.classList.add("show-menu");
        menu.classList.remove("hide-menu");
        // console.log("Show Menu");
    }
    else {
        menu.classList.add("hide-menu");
        menu.classList.remove("show-menu");
        // console.log("Hide Menu");
    }
});