function buscarSistema() {

    // Obtener lo que escribió el usuario
    let busqueda = document.getElementById("buscar").value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    // Si no escribió nada
    if (busqueda === "") {
        alert("Por favor, escribe algo para buscar.");
        return;
    }

    // SISTEMA DIGESTIVO
    let digestivo = [
        "digestivo",
        "digestion",
        "boca",
        "esofago",
        "estomago",
        "intestino",
        "intestino delgado",
        "intestino grueso",
        "recto",
        "ano",
        "higado",
        "pancreas",
        "vesicula",
        "alimentos",
        "comida",
        "nutrientes",
        "absorcion",
        "ingestion",
        "digestion",
        "aparato digestivo"
    ];

    // SISTEMA RESPIRATORIO
    let respiratorio = [
        "respiratorio",
        "respiracion",
        "pulmones",
        "pulmon",
        "nariz",
        "faringe",
        "laringe",
        "traquea",
        "bronquios",
        "alveolos",
        "diafragma",
        "oxigeno",
        "dioxido de carbono",
        "aire",
        "inspiracion",
        "espiracion",
        "respirar",
        "intercambio de gases",
        "vias respiratorias",
        "aparato respiratorio"
    ];

    // SISTEMA CIRCULATORIO
    let circulatorio = [
        "circulatorio",
        "circulacion",
        "corazon",
        "sangre",
        "arterias",
        "venas",
        "capilares",
        "vasos sanguineos",
        "plasma",
        "globulos rojos",
        "globulos blancos",
        "plaquetas",
        "oxigeno",
        "nutrientes",
        "pulso",
        "latidos",
        "circulacion sanguinea",
        "aparato cardiovascular",
        "sistema cardiovascular",
        "cardiovascular"
    ];

    // SISTEMA OSEO
    let oseo = [
        "oseo",
        "huesos",
        "hueso",
        "esqueleto",
        "craneo",
        "columna",
        "columna vertebral",
        "costillas",
        "humero",
        "femur",
        "tibia",
        "perone",
        "pelvis",
        "articulaciones",
        "articulacion",
        "medula osea",
        "esqueleto humano",
        "sistema esqueletico",
        "sistema oseo",
        "aparato esqueletico"
    ];

    // SISTEMA MUSCULAR
    let muscular = [
        "muscular",
        "musculos",
        "musculo",
        "biceps",
        "triceps",
        "cuadriceps",
        "isquiotibiales",
        "abdominales",
        "corazon",
        "movimiento",
        "fuerza",
        "contraccion",
        "contraccion muscular",
        "musculo esqueletico",
        "musculo cardiaco",
        "musculo liso",
        "tendones",
        "sistema muscular",
        "aparato muscular",
        "tejido muscular"
    ];

    // SISTEMA NERVIOSO
    let nervioso = [
        "nervioso",
        "nervios",
        "cerebro",
        "medula espinal",
        "neuronas",
        "neurona",
        "sistema nervioso",
        "sistema nervioso central",
        "sistema nervioso periferico",
        "encéfalo",
        "encefalo",
        "sentidos",
        "ojos",
        "oidos",
        "olfato",
        "tacto",
        "gusto",
        "pensamiento",
        "memoria",
        "aparato nervioso"
    ];


    // Buscar coincidencias
    if (digestivo.includes(busqueda)) {
        window.location.href = "Digestivo.html";
    }

    else if (respiratorio.includes(busqueda)) {
        window.location.href = "Respiratorio.html";
    }

    else if (circulatorio.includes(busqueda)) {
        window.location.href = "Circulatorio.html";
    }

    else if (oseo.includes(busqueda)) {
        window.location.href = "Oseo.html";
    }

    else if (muscular.includes(busqueda)) {
        window.location.href = "Muscular.html";
    }

    else if (nervioso.includes(busqueda)) {
        window.location.href = "Nervioso.html";
    }

    else {
        alert("No encontramos ningún sistema relacionado con tu búsqueda.");
    }
}