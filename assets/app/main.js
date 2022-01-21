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
            let item = `<div id="${user.id}" class="rejillaitem item">
            <img src="${user.imagen}"/>
            <h2>${user.titulo}</h2>
            <p>${user.articulo}</p>
            </div>`;
            lista.innerHTML+=item;
            
        };
    });
})
.then(()=>{
    let pinchar = document.querySelectorAll(".item");
    pinchar.forEach((user) => {
        user.addEventListener("click", mostrarDetalle, true)
    })
});
let mostrarDetalle = (e)=>{
    window.open(`../articulo1.html?id=${e.currentTarget.id}`,"_blank");
    // let userSel = datos[Number(e.currentTarget.id)];
    // articulo.innerHTML=`<div class="articulotexto">
    // <img src="${user.imagen}"/>
    // <h2>${user.titulo}</h2>
    // <p>${user.articulo}</p>
    // </div>`
}
