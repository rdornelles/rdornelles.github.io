/**
 * @description carousel minor mount and init
 */
document.addEventListener('DOMContentLoaded', () => {
    // get elements carousel
    var elems = document.querySelectorAll('.carousel-min');
    elems.forEach(function(elem) {
        var carrousel = "";
        // find for elements in tag p
        elem.childNodes[1].childNodes.forEach( (elem) => {
            if (elem.outerHTML) {
                carrousel += `<div class="carousel-item">${elem.outerHTML}</div>`;
            }
        });
        elem.innerHTML = carrousel;
    });
    // init carousel
    M.Carousel.init(elems, {
        fullWidth: false
    });
});

/**
 * @description carousel major mount and init
 */
document.addEventListener('DOMContentLoaded', () => {
    // get elements carousel
    var elems = document.querySelectorAll('.carousel-max');
    elems.forEach(function(elem) {
        var carrousel = "";
        // find for elements in tag p
        elem.childNodes[1].childNodes.forEach( (elem) => {
            if (elem.outerHTML) {
                carrousel += `<div class="carousel-item">${elem.outerHTML}</div>`;
            }
        });
        elem.innerHTML = carrousel;
    });
    // init carousel
    M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

/**
 * @description sidenav menu init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

/**
 * @description image zoom init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
});

/**
 * @description Tabs init
 */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);
});

/**
 * @description image paralax init
 */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
});