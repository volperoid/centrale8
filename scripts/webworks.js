
// * Initialization //

document.querySelectorAll('.slide').forEach(element => {
    element.style.flex = '1 1 0%';
});

// * log entries //

let logCount = 1;
console.log('JavaScript Event Log:');

// * functions //

function closePrevSlide (activeSlide) {
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i !== activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
        }
    }
}

function closeCurrentSlide (activeSlide) {
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i == activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
        }
    }
}

function openSlide(target){
    let selectorString = "#"+target.id+" "+".description";
    if (target.style.flex !== '10 1 0%') {
        target.style.transform = 'scale(1)';
        target.style.flex = '10 1 0%';
        target.style.boxShadow = 'none';
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'hidden';
        closePrevSlide(target);
    } else if (target.style.flex == '10 1 0%') {
        target.style.flex = '1 1 0%';
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

/**
document.getElementById("brands").style.transform = 'translate(0)';
function scroll(direction) {
    const target = document.getElementById("brands").style.transform;
    console.log(target);
    const x1 = 'translate(0px)';
    const x2 = 'translate(20px)';
    const x3 = 'translate(40%)';
    const x4 = 'translate(60%)';
    const x5 = 'translate(80%)';
    const x6 = 'translate(100%)';
    if (direction == '<<') {
        if (target == x1) {
            target = x2;
            console.log(target);
        } else if (target == x2) {
            target = x3;
        } else if (target == x3) {
            target = x4;
        } else if (target == x4) {
            target = x5;
        } else if (target == x5) {
            target = x6;
        }
    } else if (direction == '>>') {
        if (target == x6) {
            target = x5;
            console.log(target);
        } else if (target == x5) {
            target = x4;
            console.log(target);
        } else if (target == x4) {
            target = x3;
            console.log(target);
        } else if (target == x3) {
            target = x2;
            console.log(target);
        } else if (target == x2) {
            target = x1;
            console.log(target);
        }
    }
}
*/

// * load event listeners //

document.querySelectorAll('.slide').forEach(element => {
    element.addEventListener('click', () => {openSlide(element)});
    element.addEventListener('mouseenter', () => {addFocusEffects(element)});
    element.addEventListener('mouseleave', () => {removeFocusEffects(element)});
});
document.getElementById("scroll-left").addEventListener('click', () => {scroll('<<')});
document.getElementById("scroll-right").addEventListener('click', () => {scroll('>>')});