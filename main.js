let activeList = document.querySelectorAll(".list ul li");
activeList.forEach(function (el) {
    el.onmouseenter = function () {
        activeList.forEach(function (el) {
            el.classList.remove("active");
        });
        el.classList.add("active");
    }
    el.onmouseleave = function () {
        el.classList.remove("active");
    }
});

let scrollArrow = document.querySelector(".scrollToTop");
scrollArrow.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}