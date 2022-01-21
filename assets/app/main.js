let datos;
fetch('assets/data/data.json')
.then(response => response.json())
.then(data => {
    datos = data;
    let lista = document.querySelector(".rejilla");
    data.forEach((user, index)=>{
        if(index == 0){
            let item = " ";
            lista.innerHTML += item;
        }
        else{
            let item = `<div id="${user.id}" class="rejillaitem">
            <img src="${user.imagen}"/>
            <h2>${user.titulo}</h2>
            <p>${user.articulo}</p>
            </div>`;
            lista.innerHTML+=item;
            
        }
    })
})