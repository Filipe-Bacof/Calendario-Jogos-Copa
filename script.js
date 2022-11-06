function createGame(player1, hour, player2, goal1, goal2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
            <div>${goal1 ? goal1 : ''}</div>
            <strong>${hour}</strong>
            <div>${goal2 ? goal2 : ''}</div>
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
        <p>Copa Do Mundo</p>
    </header>
    <main id="cards">
        ${createCard("20/11", "domingo", createGame('qatar', '13:00', 'ecuador', '0', '0'))}
        ${createCard("21/11", "segunda", createGame('england', '10:00', 'iran') + createGame('senegal', '13:00', 'netherlands') + createGame('united-states', '16:00', 'wales'))}
        ${createCard("22/11", "terça", createGame('argentina', '07:00', 'saudi-arabia') + createGame('denmark', '10:00', 'tunisia') + createGame('mexico', '13:00', 'poland') + createGame('france', '16:00', 'australia'))}
        ${createCard("23/11", "quarta", createGame('morocco', '07:00', 'croatia') + createGame('germany', '10:00', 'japan') + createGame('spain', '13:00', 'costa-rica') + createGame('belgium', '16:00', 'canada'))}
        ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}
        ${createCard("25/11", "sexta", createGame('wales', '07:00', 'iran') + createGame('qatar', '10:00', 'senegal') + createGame('netherlands', '13:00', 'ecuador') + createGame('england', '16:00', 'united-states'))}
        ${createCard("26/11", "sabado", createGame('tunisia', '07:00', 'australia') + createGame('poland', '10:00', 'saudi-arabia') + createGame('france', '13:00', 'denmark') + createGame('argentina', '16:00', 'mexico'))}
        ${createCard("27/11", "domingo", createGame('japan', '07:00', 'costa-rica') + createGame('belgium', '10:00', 'morocco') + createGame('croatia', '13:00', 'canada') + createGame('spain', '16:00', 'germany'))}
        ${createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia') + createGame('south-korea', '10:00', 'ghana') + createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay'))}
        ${createCard("29/11", "terça", createGame('ecuador', '12:00', 'senegal') + createGame('netherlands', '12:00', 'qatar') + createGame('iran', '16:00', 'united-states') + createGame('wales', '16:00', 'england'))}
        ${createCard("30/11", "quarta", createGame('tunisia', '12:00', 'france') + createGame('australia', '12:00', 'denmark') + createGame('poland', '16:00', 'argentina') + createGame('saudi-arabia', '16:00', 'mexico'))}
        ${createCard("01/12", "quinta", createGame('croatia', '12:00', 'belgium') + createGame('canada', '12:00', 'morocco') + createGame('japan', '16:00', 'spain') + createGame('costa-rica', '16:00', 'germany'))}
        ${createCard("02/12", "sexta", createGame('south-korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('serbia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'cameroon'))}
        <p>Será Atualizado Em Breve!</p>
        ${createCard("03/12", "sabado", '<p>Oitavas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("04/12", "domingo", '<p>Oitavas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("05/12", "segunda", '<p>Oitavas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("06/12", "terça", '<p>Oitavas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("09/12", "sexta", '<p>Quartas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("10/12", "sabado", '<p>Quartas de Final</p>' + createGame('empty', '12:00', 'empty') + createGame('empty', '16:00', 'empty'))}
        ${createCard("13/12", "terça", '<p>Semi Finais</p>' + createGame('empty', '16:00', 'empty'))}
        ${createCard("14/12", "quarta", '<p>Semi Finais</p>' + createGame('empty', '16:00', 'empty'))}
        ${createCard("17/12", "sabado", '<p>Disputa de Terceiro Lugar</p>' + createGame('empty', '12:00', 'empty'))}
        ${createCard("18/12", "domingo", '<p>Final</p>' + createGame('empty', '12:00', 'empty'))}
    </main>
`