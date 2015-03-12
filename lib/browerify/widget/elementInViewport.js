function isElementPartiallyInViewport(el)
{
    //special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}


// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport (el) 
{
    //special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) {
        el = el[0];
    }
    
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    return (
           (rect.left >= 0)
        && (rect.top >= 0)
        && ((rect.left + rect.width) <= windowWidth)
        && ((rect.top + rect.height) <= windowHeight)
    );

}

/*

function callback () {
    //your code here, e.g. console.log('is visible now');
}


function fireIfElementVisible(el, callback) {
    return function () {
        if (isElementInViewport(el)) {
            callback();
        }
    }
}

var handler = fireIfElementVisible (el, callback);


window.addEventListener('DOMContentLoaded', handler, false); 
window.addEventListener('load', handler, false); 
window.addEventListener('scroll', handler, false); 
window.addEventListener('resize', handler, false); 

*/
