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

// Añadir la imagen y divContainerInfoYahir al div divImagenPerfil
divImagenPerfil.appendChild(imgElement);
divImagenPerfil.appendChild(divContainerInfoYahir);

// Añadir el div divImagenPerfil al aside
asideElement.appendChild(divImagenPerfil);

// Obtener el contenedor padre donde se añadirá el aside
const containerElement = document.querySelector('.container');

// Insertar el aside antes del footer en el contenedor padre
containerElement.insertBefore(asideElement, containerElement.querySelector('.footer'));



// Crear el elemento <marquee> con la clase "marqueeboton"
const marqueebotones = document.createElement('marquee');
marqueebotones.classList.add('marqueeboton');

// Crear el elemento <img> con el atributo src y alt
const gif1Element = document.createElement('img');
const gif2Element = document.createElement('img');
const gif3Element = document.createElement('img');
const gif4Element = document.createElement('img');
const gif5Element = document.createElement('img');
const gif6Element = document.createElement('img');

gif1Element.src = 'images/coffee.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif1Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

gif2Element.src = 'images/viewed.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif2Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

gif3Element.src = 'images/windows.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif3Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

gif4Element.src = 'images/2006.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif4Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

gif5Element.src = 'images/drpepper.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif5Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

gif6Element.src = 'images/apocalypse.gif'; // Reemplaza 'ruta_al_gif.gif' con la ruta a tu gif
gif6Element.alt = 'gif_alternative_text'; // Texto alternativo para accesibilidad

// Añadir el elemento <img> al elemento <marquee>
marqueebotones.appendChild(gif1Element);
marqueebotones.appendChild(gif2Element);
marqueebotones.appendChild(gif3Element);
marqueebotones.appendChild(gif4Element);
marqueebotones.appendChild(gif5Element);
marqueebotones.appendChild(gif6Element);


// Obtener el elemento aside1 donde se agregará el marquee
const aside1Element = document.querySelector('.aside1');

// Insertar el marquee dentro del aside1
aside1Element.appendChild(marqueebotones);


