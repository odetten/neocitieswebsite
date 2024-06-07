// Crear el elemento <aside> y asignarle la clase "aside1"
const asideElement = document.createElement('aside');
asideElement.classList.add('aside1');

// Crear el elemento <div> con la clase "imagenperfil"
const divImagenPerfil = document.createElement('div');
divImagenPerfil.classList.add('imagenperfil');

// Crear el elemento <img> con el atributo src y alt
const imgElement = document.createElement('img');
imgElement.src = 'images/shinjiropfp.jpeg';
imgElement.alt = 'profilepic';

// Crear el elemento <div> con la clase "containerinfoYahir"
const divContainerInfoYahir = document.createElement('div');
divContainerInfoYahir.classList.add('containerinfoYahir');

// Crear los elementos <p> dentro de divContainerInfoYahir
const pElement1 = document.createElement('p');
pElement1.innerHTML = '<span>Title:hello</span>';

const pElement2 = document.createElement('p');
pElement2.innerHTML = '<span>Title2:hello2</span>';

// Añadir los elementos creados al divContainerInfoYahir
divContainerInfoYahir.appendChild(pElement1);
divContainerInfoYahir.appendChild(pElement2);

// Añadir la imagen al div divImagenPerfil
divImagenPerfil.appendChild(imgElement);

// Añadir el div divImagenPerfil y divContainerInfoYahir al aside
asideElement.appendChild(divImagenPerfil);
asideElement.appendChild(divContainerInfoYahir);

// Obtener el contenedor padre donde se añadirá el aside
const containerElement = document.querySelector('.container');

// Insertar el aside antes del footer en el contenedor padre
containerElement.insertBefore(asideElement, containerElement.querySelector('.footer'));

// Crear el elemento <marquee> con la clase "marqueeboton"
const marqueebotones = document.createElement('marquee');
marqueebotones.classList.add('marqueeboton');

// Crear los elementos <img> con el atributo src y alt
const gifSources = [
    'images/coffee.gif',
    'images/viewed.gif',
    'images/windows.gif',
    'images/2006.gif',
    'images/drpepper.gif',
    'images/apocalypse.gif'
];

gifSources.forEach(src => {
    const gifElement = document.createElement('img');
    gifElement.src = src;
    gifElement.alt = 'gif_alternative_text';
    marqueebotones.appendChild(gifElement);
});

// Obtener el elemento aside1 donde se agregará el marquee
const aside1Element = document.querySelector('.aside1');

// Insertar el marquee dentro del aside1
aside1Element.appendChild(marqueebotones);
