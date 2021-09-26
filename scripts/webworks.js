
// * // Variables // * //

let copyrightEndDate = new Date().getFullYear();
let accordionSlide = document.querySelectorAll(".slide");
let slidePanel = document.querySelectorAll(".description");
let pageSection = document.getElementsByTagName("section");
let mainHeader = document.getElementById("section-0");
let footer = document.getElementsByTagName("footer");

// * // Functions // * //

function accordion(target) {
    if (target.style.flex == "1 1 0%" || target.style.flex == "") {
        document.querySelector("#" + target.id + " " + ".ui-hint").style.visibility = "hidden";
        target.style.flex = "10 1 0%";
    } else if (target.style.flex == "10 1 0%") {
        target.style.flex = "1 1 0%";
    }
    for (let i = 0; i < accordionSlide.length; i++) {
        if (accordionSlide[i].id !== target.id) {
            document.getElementById(accordionSlide[i].id).style.flex = "1 1 0%";
        }
    }
}

function showElement(element) {
    element.style.visibility = "visible";
}
function hideElement(element) {
    element.style.visibility = "hidden";
}

function close() {
    for (let i = 0; i < accordionSlide.length; i++) {
        if (accordionSlide[i].style.flex == "10 1 0%") {
            accordionSlide[i].style.flex = "1 1 0%";
        }
    }

}

// * // Event Listeners // * //

document.querySelectorAll(".slide").forEach(element => {
    element.addEventListener("mouseenter", () => {
        showElement(document.querySelector("#" + element.id + " " + ".ui-hint"));
    });
    element.addEventListener("mouseleave", () => {
        hideElement(document.querySelector("#" + element.id + " " + ".ui-hint"));
    });
});
document.querySelectorAll(".slide").forEach(element => {
    element.addEventListener("click", () => {
        accordion(element)
    });
});
for (let i = 0; i < pageSection.length; i++) {
    if (pageSection[i].id !== "section-2") {
        pageSection[i].addEventListener("click", () => {
            close();
        });
    }
}
mainHeader.addEventListener("click", () => {
    close();
});
footer[0].addEventListener("click", () => {
    close();
});