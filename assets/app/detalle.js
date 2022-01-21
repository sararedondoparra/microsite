let obtenerParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam;
   }
let raya = document.querySelector(".raya");
let param = obtenerParam(document.URL);
let pagina1 = document.querySelector(".pagina1");
fetch("assets/data/data.json")
.then(res => res.json())
.then(data => {
    let dinamico = data[Number(param) - 1];
    switch(dinamico.id){
        case 1:
            raya.innerHTML = `<h2>${dinamico.titulo}</h2>`
            pagina1.innerHTML = `<div>
            <img src="${dinamico.imagen}"/>
            <p class="pie">${dinamico.pie}</p>
            <h2>${dinamico.titulo}</h2>
            <h3>${dinamico.subtitulo}</h3>
            <p>${dinamico.texto}</p>
            </div>`;
            break; 
        case 2:
            raya.innerHTML = `<h2>${dinamico.titulo}</h2>`
            pagina1.innerHTML = `<div>
            <img src="${dinamico.imagen}"/>
            <p class="pie">${dinamico.pie}</p>
            <h2>${dinamico.titulo}</h2>
            <p>${dinamico.texto}</p>
            </div>`;
            break; 
        case 3:
            raya.innerHTML = `<h2>${dinamico.titulo}</h2>`
            pagina1.innerHTML = `<div>
            <img src="${dinamico.imagen}"/>
            <h2>${dinamico.titulo}</h2>
            <h3>${dinamico.subtitulo}</h3>
            <p>${dinamico.texto}</p>
            <p>${dinamico.entrevista}</p>
            </div>`;
            break; 
        case 4:
            raya.innerHTML = `<h2>${dinamico.titulo}</h2>`
            pagina1.innerHTML = `<div>
            <img src="${dinamico.imagen1}"/>
            <h3>${dinamico.zapatilla1}</h3>
            <p>${dinamico.texto1}</p>
            <img src="${dinamico.imagen2}"/>
            <h3>${dinamico.zapatilla2}</h3>
            <p>${dinamico.texto2}</p>
            <img src="${dinamico.imagen3}"/>
            <h3>${dinamico.zapatilla3}</h3>
            <p>${dinamico.texto3}</p>
            <img src="${dinamico.imagen4}"/>
            <h3>${dinamico.zapatilla4}</h3>
            <p>${dinamico.texto4}</p>
            <img src="${dinamico.imagen5}"/>
            <h3>${dinamico.zapatilla5}</h3>
            <p>${dinamico.texto5}</p>
            </div>`;
            break;
        case 5:
            raya.innerHTML = `<h2>${dinamico.titulo}</h2>`
            pagina1.innerHTML = `<div>
            <img src="${dinamico.imagen}"/>
            <h2>${dinamico.titulo}</h2>
            <h3>${dinamico.subtitulo}</h3>
            <p>${dinamico.texto}</p>
            </div>`;
            break; 
    }
})