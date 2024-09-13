document.getElementById('language-dropdown').addEventListener('change', function() {
    var selectedLanguage = this.value;

    document.querySelectorAll('[data-en]').forEach(function(element) {
        element.innerText = element.getAttribute('data-' + selectedLanguage);
    });
});

function showMore() {
    var moreText = document.getElementById("moreText");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}
function openTab(tabName) {
    // Ocultar todas las secciones de contenido
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Mostrar la sección seleccionada
    document.getElementById(tabName).style.display = "block";
}

// Mostrar la sección "frontend" por defecto
document.getElementById("frontend").style.display = "block";

//Boton Subir hasta el principio de la pagina
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};