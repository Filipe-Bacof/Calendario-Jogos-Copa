function createGame(player1, sigla1, hour, player2, sigla2, goal1, goal2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
            <div><span>${sigla1}</span>${goal1 ? goal1 : ''}</div>
            <strong>${hour}</strong>
            <div><span>${sigla2}</span>${goal2 ? goal2 : ''}</div>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
        </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
        <p>Copa Do Mundo</p><br/>
        <label>Será atualizado diariamente <br/>durante a copa do mundo 2022</label><br/><br/>
        <h3>Feito por Filipe Bacof</h3>
        <a href="https://github.com/Filipe-Bacof/Calendario-Jogos-Copa" target="_blank">Link para o Github</a>
        <button class="scroll-top-btn" onclick="rolagemTopo()">TOPO</button>
        <button class="scroll-day-btn" onclick="rolagemDia()">DIA ATUAL</button>
    </header>
    <main id="cards">
        ${createCard("20/11", "domingo", createGame('qatar', 'QAT', '13:00', 'ecuador', 'ECU', '0', '2'))}
        ${createCard("21/11", "segunda", createGame('england', 'ENG', '10:00', 'iran', 'IRN', '6', '2') + createGame('senegal', 'SEN', '13:00', 'netherlands', 'HOL', '0', '2') + createGame('united-states', 'USA', '16:00', 'wales', 'WAL', '1', '1'))}
        ${createCard("22/11", "terça", createGame('argentina', 'ARG', '07:00', 'saudi-arabia', 'KSA', '', '') + createGame('denmark', 'DEN', '10:00', 'tunisia', 'TUN', '', '') + createGame('mexico', 'MEX', '13:00', 'poland', 'POL', '', '') + createGame('france', 'FRA', '16:00', 'australia', 'AUS', '', ''))}
        ${createCard("23/11", "quarta", createGame('morocco', 'MAR', '07:00', 'croatia', 'CRO', '', '') + createGame('germany', 'GER', '10:00', 'japan', 'JPN', '', '') + createGame('spain', 'ESP', '13:00', 'costa-rica', 'CRC', '', '') + createGame('belgium', 'BEL', '16:00', 'canada', 'CAN', '', ''))}
        ${createCard("24/11", "quinta", createGame('switzerland', 'SUI', '07:00', 'cameroon', 'CMR', '', '') + createGame('uruguay', 'URU', '10:00', 'south-korea', 'KOR', '', '') + createGame('portugal', 'POR', '13:00', 'ghana', 'GHA', '', '') + createGame('brazil', 'BRA', '16:00', 'serbia', 'SRB', '', ''))}
        ${createCard("25/11", "sexta", createGame('wales', 'WAL', '07:00', 'iran', 'IRN', '', '') + createGame('qatar', 'QAT', '10:00', 'senegal', 'SEN', '', '') + createGame('netherlands', 'HOL', '13:00', 'ecuador', 'ECU', '', '') + createGame('england', 'ENG', '16:00', 'united-states', 'USA', '', ''))}
        ${createCard("26/11", "sabado", createGame('tunisia', 'TUN', '07:00', 'australia', 'AUS', '', '') + createGame('poland', 'POL', '10:00', 'saudi-arabia', 'KSA', '', '') + createGame('france', 'FRA', '13:00', 'denmark', 'DEN', '', '') + createGame('argentina', 'ARG', '16:00', 'mexico', 'MEX', '', ''))}
        ${createCard("27/11", "domingo", createGame('japan', 'JAP', '07:00', 'costa-rica', 'CRC', '', '') + createGame('belgium', 'BEL', '10:00', 'morocco', 'MAR', '', '') + createGame('croatia', 'CRO', '13:00', 'canada', 'CAN', '', '') + createGame('spain', 'ESP', '16:00', 'germany', 'GER', '', ''))}
        ${createCard("28/11", "segunda", createGame('cameroon', 'CMR', '07:00', 'serbia', 'SRB', '', '') + createGame('south-korea', 'KOR', '10:00', 'ghana', 'GHA', '', '') + createGame('brazil', 'BRA', '13:00', 'switzerland', 'SUI', '', '') + createGame('portugal', 'POR', '16:00', 'uruguay', 'URU', '', ''))}
        ${createCard("29/11", "terça", createGame('ecuador', 'ECU', '12:00', 'senegal', 'SEN', '', '') + createGame('netherlands', 'HOL', '12:00', 'qatar', 'QAT', '', '') + createGame('iran', 'IRN', '16:00', 'united-states', 'USA', '', '') + createGame('wales', 'WAL', '16:00', 'england', 'ENG', '', ''))}
        ${createCard("30/11", "quarta", createGame('tunisia', 'TUN', '12:00', 'france', 'FRA', '', '') + createGame('australia', 'AUS', '12:00', 'denmark', 'DEN', '', '') + createGame('poland', 'POL', '16:00', 'argentina', 'ARG', '', '') + createGame('saudi-arabia', 'KSA', '16:00', 'mexico', 'MEX', '', ''))}
        ${createCard("01/12", "quinta", createGame('croatia', 'CRO', '12:00', 'belgium', 'BEL', '', '') + createGame('canada', 'CAN', '12:00', 'morocco', 'MAR', '', '') + createGame('japan', 'JPN', '16:00', 'spain', 'ESP', '', '') + createGame('costa-rica', 'CRC', '16:00', 'germany', 'GER', '', ''))}
        ${createCard("02/12", "sexta", createGame('south-korea', 'KOR', '12:00', 'portugal', 'POR', '', '') + createGame('ghana', 'GHA', '12:00', 'uruguay', 'URU', '', '') + createGame('serbia', 'SRB', '16:00', 'switzerland', 'SUI', '', '') + createGame('brazil', 'BRA', '16:00', 'cameroon', 'CMR', '', ''))}
        <p>Será Atualizado Em Breve!</p>
        ${createCard("03/12", "sabado", '<p>Oitavas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("04/12", "domingo", '<p>Oitavas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("05/12", "segunda", '<p>Oitavas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("06/12", "terça", '<p>Oitavas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("09/12", "sexta", '<p>Quartas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("10/12", "sabado", '<p>Quartas de Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', '') + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("13/12", "terça", '<p>Semi Finais</p>' + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("14/12", "quarta", '<p>Semi Finais</p>' + createGame('empty', '', '16:00', 'empty', '', '', ''))}
        ${createCard("17/12", "sabado", '<p>Disputa de Terceiro Lugar</p>' + createGame('empty', '', '12:00', 'empty', '', '', ''))}
        ${createCard("18/12", "domingo", '<p>Final</p>' + createGame('empty', '', '12:00', 'empty', '', '', ''))}
    </main>
`

function rolagemDia() {
    window.scrollTo({
        top: 570,
        left: 0,
        behavior: 'smooth',
    })
}
function rolagemTopo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}

console.log(window.scrollY)