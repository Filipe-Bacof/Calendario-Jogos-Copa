function createCard(group) {
    return `
    <div class="card">
        <h2>Grupo ${group}</h2>
        <ul>
            aaa
        </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
        <p>Copa Do Mundo</p><br/>
        <h3>Fase de Grupos</h3>
    </header>
    <main id="cards">
        ${createCard('A')}
    </main>
`