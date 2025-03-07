const libro = {
    titulo: "Romeo y Julieta",
    autor: "William Shakespeare",
    anio: "1597",
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"], // Lista de capítulos

    describirLibro: function () {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`;
    },

    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
    },

    eliminarCapitulo: function (indice) {
        if (indice >= 0 && indice < this.capitulos.length) {
            this.capitulos.splice(indice, 1);
        }
    }
};

console.log(libro.describirLibro());

const cajaTexto = document.getElementById("infoLibro");
const listaCapitulos = document.getElementById("listaCapitulos");

function imprimir() {
    cajaTexto.innerText = libro.describirLibro();
    mostrarCapitulos();
}

function mostrarCapitulos() {
    listaCapitulos.innerHTML = "<h3>Capítulos:</h3><ul>";
    libro.capitulos.forEach((capitulo, indice) => {
        listaCapitulos.innerHTML += `<li>${capitulo} <button onclick="eliminarCapitulo(${indice})">Eliminar</button></li>`;
    });
    listaCapitulos.innerHTML += "</ul>";
}

function agregarCapitulo() {
    const nuevoCapitulo = prompt("Ingrese el nombre del nuevo capítulo:");
    if (nuevoCapitulo) {
        libro.agregarCapitulo(nuevoCapitulo);
        mostrarCapitulos();
    }
}

function eliminarCapitulo(indice) {
    libro.eliminarCapitulo(indice);
    mostrarCapitulos();
}

imprimir();