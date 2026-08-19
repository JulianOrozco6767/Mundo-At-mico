function abrirSistema(sistema) {

    const modal = document.getElementById("modal-" + sistema);

    modal.classList.add("activo");

}


function cerrarSistema(sistema) {

    const modal = document.getElementById("modal-" + sistema);

    modal.classList.remove("activo");

}