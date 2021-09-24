
// * Functions responsible for the vertical accordion. //

document.querySelectorAll('.slide').forEach(element => {
    element.style.flex = '1 1 0%'; // Initial accordion state. //
});

function close(i) { // Closes a slide //
    document.querySelector('#slide'+'-'+i).style.flex = '1 1 0%';
    document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
    document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
}

function closeCurrentSlide (activeSlide) { // Closes the currently opened accordion slide when selected. //
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i == activeSlide.id) {
            close(i);
        }
    }
}

function closePrevSlide (activeSlide) { // Closes the currently opened accordion slide when another slide is selected. //
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i !== activeSlide.id) {
            close(i);
        }
    }
}

function openSlide(target) { // Expand accordion slide when selected. //
    let selectorString = "#"+target.id+" "+".description";
    if (target.style.flex !== '10 1 0%') {
        target.style.flex = '10 1 0%';
        target.style.transform = 'scale(1)';
        target.style.boxShadow = 'none';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'hidden';
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        closePrevSlide(target);
    } else if (target.style.flex == '10 1 0%') {
        closeCurrentSlide(target);
        target.style.zIndex = 0;
    }
    document.querySelectorAll('.slide').forEach(element => {
        if (element.id !== target.id) {
            element.style.zIndex = 0;
        }
    });
}

function addFocusEffects(target) {
    if (target.style.flex !== '10 1 0%') {
        target.style.boxShadow = '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)';
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'visible';
        target.style.transform = 'scale(1.1)';
        target.style.zIndex = 1;
        document.querySelectorAll('.slide').forEach(element => {
            if (element.id !== target.id) {
                element.style.zIndex = 0;
            }
        });
    }
}

function removeFocusEffects(target) {
    if (target.style.flex !== '10 1 0%') {
        target.style.transform = 'scale(1)';
        target.style.boxShadow = 'none';
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'hidden';
    }
}

// * Event Listeners //

document.querySelectorAll('.slide').forEach(element => {
    element.addEventListener('click', () => {openSlide(element)});
    element.addEventListener('mouseenter', () => {addFocusEffects(element)});
    element.addEventListener('mouseleave', () => {removeFocusEffects(element)});
});