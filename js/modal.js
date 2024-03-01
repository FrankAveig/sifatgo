document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.splide__slide').forEach(function(elem) {
        elem.addEventListener('click', function() {
            var title = this.querySelector('h3').innerHTML;
            document.getElementById('modalTitle').innerHTML = title;
            // Aquí puedes agregar más lógica para cambiar el contenido
            // del modal basado en el elemento 'li' clickeado.
            document.getElementById('modalDescription').innerHTML = "Información detallada sobre " + title;
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
