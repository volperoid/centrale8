(() => {

    // * // Variables // * //

    let pageSection = document.getElementsByTagName("section");
    let mainHeader = document.getElementById("section-0");
    let footer = document.getElementsByTagName("footer");

    // * // Functions // * //

    (() => {
        let copyrightEndDate = new Date().getFullYear();
        document.getElementById("currentYear").innerHTML = copyrightEndDate;
    })();

    function accordion(target) {
        let accordionSlide = document.querySelectorAll(".slide");
        let slideOverlay = document.querySelector("#" + target.id + " " + ".ui-hint");
        let slidePanel = document.querySelector("#" + target.id + " " + ".description");
        if (target.style.flex == "1 1 0%" || target.style.flex == "") {
            slideOverlay.style.visibility = "hidden";
            slidePanel.style.transform = "translateX(0)";
            slidePanel.style.opacity = 1;
            target.style.flex = "10 1 0%";
        } else if (target.style.flex == "10 1 0%") {
            slideOverlay.style.visibility = "visible";
            slidePanel.style.transform = "translateX(-100%)";
            slidePanel.style.opacity = 0;
            target.style.flex = "1 1 0%";
        }
        for (let i = 0; i < accordionSlide.length; i++) {
            let slidePanel = document.querySelector("#" + accordionSlide[i].id + " " + ".description");
            if (accordionSlide[i].id !== target.id) {
                slidePanel.style.transform = "translateX(-100%)";
                slidePanel.style.opacity = 0;
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

    function closeElement() {
        for (let i = 0; i < accordionSlide.length; i++) {
            if (accordionSlide[i].style.flex == "10 1 0%") {
                accordionSlide[i].style.flex = "1 1 0%";
            }
        }

    }


    // * // Event Listeners // * //

    document.querySelectorAll(".slide").forEach(element => {
        element.addEventListener("mouseenter", () => {
            if (element.style.flex == "1 1 0%" || element.style.flex == "") {
                showElement(document.querySelector("#" + element.id + " " + ".ui-hint"));
            }
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
                closeElement();
            });
        }
    }
    mainHeader.addEventListener("click", () => {
        close();
    });
    footer[0].addEventListener("click", () => {
        close();
    });
})();