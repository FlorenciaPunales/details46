let contenedor = document.getElementById('contenedor')

let agentesFiltrados = data.filter(agente => {
    return agente.isPlayableCharacter
})

agregarCards(agentesFiltrados)


function agregarCards (agentes) {
   
    let cards = "" 
    agentes.forEach(agente => {
    cards += `
    <div class='card' style='width:18rem'>
        <img src="${agente.displayIcon}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${agente.displayName}</h5>
        <p class="card-text">${agente.role.displayName}</p>
        <a href="./details.html?id=${agente.uuid}" class="btn btn-primary">More Details</a>
        </div>
    </div>`
    
    contenedor.innerHTML= cards
    })
    
}
