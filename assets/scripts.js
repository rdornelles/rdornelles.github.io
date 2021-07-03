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

/**
 * @description Tips init
 */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
});

/**
 * @description fixes
 */
window.addEventListener('load', function() {
    window.dispatchEvent(new Event('resize'));
});

/**
 * @description send contact form to @api
 */
document.getElementById("send-mail").addEventListener('submit', (event) => {
    const lazyId = document.getElementById("send-lazy");
    const formId = document.getElementById("send-mail");
    const formData = new FormData(formId);
    lazyId.style.display = "block";
    formId.style.display = "none";
    event.preventDefault();
    grecaptcha.reset();
    formId.reset();

    fetch(formId.getAttribute("action"), {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        method: formId.getAttribute("method"),
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();   
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.message);
        }
        return response.message; 
    })
    .then(message => {
        Swal.fire('Muito obrigado!', message, 'success');
    })
    .catch(error => {
        Swal.fire('Ops! Ocorreu um problema.', error.message ?? error, 'error');
    })
    .finally(() => {
        formId.style.display = "block";
        lazyId.style.display = "none";
    });
});