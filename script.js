// RENDENIZADORES      VULGO = Parte Editável do Código (diariamente)
// Criador do App Principal de Calendário aaa
document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
        <p>Copa Do Mundo</p><br/>
        <label>Será atualizado diariamente <br/>durante a copa do mundo 2022</label><br/><br/>
        <label class="destaque">NOVIDADE: Classificações no site<br/>NOVIDADE: Gráfico das Finais no site<br/>NOVIDADE: Estatísticas no site</label><br/><br/>
        <h3>Feito por Filipe Bacof</h3>
        <a href="https://github.com/Filipe-Bacof/Calendario-Jogos-Copa" target="_blank">Link para o Github</a>
        <button class="scroll-top-btn" onclick="rolagem(0, 'smooth')">TOPO</button>
        <button class="scroll-day-btn" onclick="rolagem(diaDeHoje, 'smooth')">DIA ATUAL</button>
        <button class="classification-btn" onclick="mostrarOuEsconder('#app', '#classification', 0, 'auto')">CLASSIFICAÇÕES</button>
        <button class="fases-finais-btn" onclick="mostrarOuEsconder('#app', '#play-offs', 0, 'auto')">FASES FINAIS</button>
        <button class="stats-btn" onclick="mostrarOuEsconder('#app', '#stats', 0, 'auto')">ESTATÍSTICAS</button>
    </header>
    <main id="cards">
        ${createCard("20/11", "domingo",
            createGame('qatar', 'QAT', '13:00', 'ecuador', 'ECU', '0', '2', corPlacar('2'), corPlacar('1')))}
        ${createCard("21/11", "segunda",
            createGame('england', 'ENG', '10:00', 'iran', 'IRN', '6', '2', corPlacar('1'), corPlacar('2')) +
            createGame('senegal', 'SEN', '13:00', 'netherlands', 'HOL', '0', '2', corPlacar('2'), corPlacar('1')) +
            createGame('united-states', 'USA', '16:00', 'wales', 'WAL', '1', '1', corPlacar('3'), corPlacar('3')))}
        ${createCard("22/11", "terça",
            createGame('argentina', 'ARG', '07:00', 'saudi-arabia', 'KSA', '1', '2', corPlacar('2'), corPlacar('1')) +
            createGame('denmark', 'DEN', '10:00', 'tunisia', 'TUN', '0', '0', corPlacar('3'), corPlacar('3')) +
            createGame('mexico', 'MEX', '13:00', 'poland', 'POL', '0', '0', corPlacar('3'), corPlacar('3')) +
            createGame('france', 'FRA', '16:00', 'australia', 'AUS', '4', '1', corPlacar('1'), corPlacar('2')))}
        ${createCard("23/11", "quarta",
            createGame('morocco', 'MAR', '07:00', 'croatia', 'CRO', '0', '0', corPlacar('3'), corPlacar('3')) +
            createGame('germany', 'GER', '10:00', 'japan', 'JPN', '1', '2', corPlacar('2'), corPlacar('1')) +
            createGame('spain', 'ESP', '13:00', 'costa-rica', 'CRC', '7', '0', corPlacar('1'), corPlacar('2')) +
            createGame('belgium', 'BEL', '16:00', 'canada', 'CAN', '1', '0', corPlacar('1'), corPlacar('2')))}
        ${createCard("24/11", "quinta",
            createGame('switzerland', 'SUI', '07:00', 'cameroon', 'CMR', '1', '0', corPlacar('1'), corPlacar('2')) +
            createGame('uruguay', 'URU', '10:00', 'south-korea', 'KOR', '0', '0', corPlacar('3'), corPlacar('3')) +
            createGame('portugal', 'POR', '13:00', 'ghana', 'GHA', '3', '2', corPlacar('1'), corPlacar('2')) +
            createGame('brazil', 'BRA', '16:00', 'serbia', 'SRB', '2', '0', corPlacar('1'), corPlacar('2')))}
        ${createCard("25/11", "sexta",
            createGame('wales', 'WAL', '07:00', 'iran', 'IRN', '0', '2', corPlacar('2'), corPlacar('1')) +
            createGame('qatar', 'QAT', '10:00', 'senegal', 'SEN', '1', '3', corPlacar('2'), corPlacar('1')) +
            createGame('netherlands', 'HOL', '13:00', 'ecuador', 'ECU', '1', '1', corPlacar('3'), corPlacar('3')) +
            createGame('england', 'ENG', '16:00', 'united-states', 'USA', '0', '0', corPlacar('3'), corPlacar('3')))}
        ${createCard("26/11", "sabado",
            createGame('tunisia', 'TUN', '07:00', 'australia', 'AUS', '0', '1', corPlacar('2'), corPlacar('1')) +
            createGame('poland', 'POL', '10:00', 'saudi-arabia', 'KSA', '2', '0', corPlacar('1'), corPlacar('2')) +
            createGame('france', 'FRA', '13:00', 'denmark', 'DEN', '2', '1', corPlacar('1'), corPlacar('2')) +
            createGame('argentina', 'ARG', '16:00', 'mexico', 'MEX', '2', '0', corPlacar('1'), corPlacar('2')))}
        ${createCard("27/11", "domingo",
            createGame('japan', 'JPN', '07:00', 'costa-rica', 'CRC', '0', '1', corPlacar('2'), corPlacar('1')) +
            createGame('belgium', 'BEL', '10:00', 'morocco', 'MAR', '0', '2', corPlacar('2'), corPlacar('1')) +
            createGame('croatia', 'CRO', '13:00', 'canada', 'CAN', '4', '1', corPlacar('1'), corPlacar('2')) +
            createGame('spain', 'ESP', '16:00', 'germany', 'GER', '1', '1', corPlacar('3'), corPlacar('3')))}
        ${createCard("28/11", "segunda",
            createGame('cameroon', 'CMR', '07:00', 'serbia', 'SRB', '3', '3', corPlacar('3'), corPlacar('3')) +
            createGame('south-korea', 'KOR', '10:00', 'ghana', 'GHA', '2', '3', corPlacar('2'), corPlacar('1')) +
            createGame('brazil', 'BRA', '13:00', 'switzerland', 'SUI', '1', '0', corPlacar('1'), corPlacar('2')) +
            createGame('portugal', 'POR', '16:00', 'uruguay', 'URU', '2', '0', corPlacar('1'), corPlacar('2')))}
        ${createCard("29/11", "terça",
            createGame('ecuador', 'ECU', '12:00', 'senegal', 'SEN', '1', '2', corPlacar('2'), corPlacar('1')) +
            createGame('netherlands', 'HOL', '12:00', 'qatar', 'QAT', '2', '0', corPlacar('1'), corPlacar('2')) +
            createGame('iran', 'IRN', '16:00', 'united-states', 'USA', '0', '1', corPlacar('2'), corPlacar('1')) +
            createGame('wales', 'WAL', '16:00', 'england', 'ENG', '0', '3', corPlacar('2'), corPlacar('1')))}
        ${createCard("30/11", "quarta",
            createGame('tunisia', 'TUN', '12:00', 'france', 'FRA', '1', '0', corPlacar('1'), corPlacar('2')) +
            createGame('australia', 'AUS', '12:00', 'denmark', 'DEN', '1', '0', corPlacar('1'), corPlacar('2')) +
            createGame('poland', 'POL', '16:00', 'argentina', 'ARG', '0', '2', corPlacar('2'), corPlacar('1')) +
            createGame('saudi-arabia', 'KSA', '16:00', 'mexico', 'MEX', '1', '2', corPlacar('2'), corPlacar('1')))}
        ${createCard("01/12", "quinta",
            createGame('croatia', 'CRO', '12:00', 'belgium', 'BEL', '0', '0', corPlacar('3'), corPlacar('3')) +
            createGame('canada', 'CAN', '12:00', 'morocco', 'MAR', '0', '2', corPlacar('2'), corPlacar('1')) +
            createGame('japan', 'JPN', '16:00', 'spain', 'ESP', '', '', corPlacar(''), corPlacar('')) +
            createGame('costa-rica', 'CRC', '16:00', 'germany', 'GER', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("02/12", "sexta",
            createGame('south-korea', 'KOR', '12:00', 'portugal', 'POR', '', '', corPlacar(''), corPlacar('')) +
            createGame('ghana', 'GHA', '12:00', 'uruguay', 'URU', '', '', corPlacar(''), corPlacar('')) +
            createGame('serbia', 'SRB', '16:00', 'switzerland', 'SUI', '', '', corPlacar(''), corPlacar('')) +
            createGame('brazil', 'BRA', '16:00', 'cameroon', 'CMR', '', '', corPlacar(''), corPlacar('')))}
        <p>Será Atualizado Em Breve!</p>
        ${createCard("03/12", "sabado", '<p>Oitavas de Final</p>' +
            createGame('netherlands', 'HOL', '12:00', 'united-states', 'USA', '', '', corPlacar(''), corPlacar('')) +
            createGame('argentina', 'ARG', '16:00', 'australia', 'AUS', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("04/12", "domingo", '<p>Oitavas de Final</p>' +
            createGame('france', 'FRA', '12:00', 'poland', 'POL', '', '', corPlacar(''), corPlacar('')) +
            createGame('england', 'ENG', '16:00', 'senegal', 'SEN', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("05/12", "segunda", '<p>Oitavas de Final</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')) +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("06/12", "terça", '<p>Oitavas de Final</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')) +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("09/12", "sexta", '<p>Quartas de Final</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')) +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("10/12", "sabado", '<p>Quartas de Final</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')) +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("13/12", "terça", '<p>Semi Finais</p>' +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("14/12", "quarta", '<p>Semi Finais</p>' +
            createGame('empty', '', '16:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("17/12", "sabado", '<p>Disputa de Terceiro Lugar</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')))}
        ${createCard("18/12", "domingo", '<p>Final</p>' +
            createGame('empty', '', '12:00', 'empty', '', '', '', corPlacar(''), corPlacar('')) + '<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>' )}
    </main>`

// Criador das Classificações com a Pontuação de cada time
document.querySelector("#classification").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" /><br>
        <label>Será atualizado diariamente <br />durante a copa do mundo 2022</label><br /><br />
        <button class="scroll-top-btn" onclick="mostrarOuEsconder('#classification', '#app', diaDeHoje, 'smooth')">VOLTAR</button>
        <button class="scroll-day-btn" onclick="rolagem(10000, 'smooth')">LEGENDAS</button>
        <button class="classification-btn" onclick="mostrarOuEsconder('#classification', '#app', diaDeHoje, 'smooth')">CALENDÁRIO</button>
        <button class="fases-finais-btn" onclick="mostrarOuEsconder('#classification', '#play-offs', 0, 'auto')">FASES FINAIS</button>
        <button class="stats-btn" onclick="mostrarOuEsconder('#classification', '#stats', 0, 'auto')">ESTATÍSTICAS</button>
    </header>
<main id="cards">
    <h1>Classificação</h1>
    <span>Atualizado por último em: 01/12/2022 - 14h</span>
    ${gerarGrupoCard('A',
        gerarEquipeNaTabela('netherlands', 'HOL', 'Holanda', 7, 3, 2, 1, 0, 5, 1, 4, true) +
        gerarEquipeNaTabela('senegal', 'SEN', 'Senegal', 6, 3, 2, 0, 1, 5, 4, 1, true) +
        gerarEquipeNaTabela('ecuador', 'ECU', 'Equador', 4, 3, 1, 1, 1, 4, 3, 1, false) +
        gerarEquipeNaTabela('qatar', 'QAT', 'Catar', 0, 3, 0, 0, 3, 1, 7, -6, false) )}
    ${gerarGrupoCard('B',
        gerarEquipeNaTabela('england', 'ENG', 'Inglaterra', 7, 3, 2, 1, 0, 9, 2, 7, true) +
        gerarEquipeNaTabela('united-states', 'USA', 'Estados Unidos', 5, 3, 1, 2, 0, 2, 1, 1, true) +
        gerarEquipeNaTabela('iran', 'IRN', 'Irã', 3, 3, 1, 0, 2, 4, 7, -3, false) +
        gerarEquipeNaTabela('wales', 'WAL', 'Gales', 1, 3, 0, 1, 2, 1, 6, -5, false) )}
    ${gerarGrupoCard('C',
        gerarEquipeNaTabela('argentina', 'ARG', 'Argentina', 6, 3, 2, 0, 1, 5, 2, 3, true) +
        gerarEquipeNaTabela('poland', 'POL', 'Polônia', 4, 3, 1, 1, 1, 2, 2, 0, true) +
        gerarEquipeNaTabela('mexico', 'MEX', 'México', 4, 3, 1, 1, 1, 2, 3, -1, false) +
        gerarEquipeNaTabela('saudi-arabia', 'KSA', 'Arábia Saudita', 3, 3, 1, 0, 2, 3, 5, -2, false) )}
    ${gerarGrupoCard('D',
        gerarEquipeNaTabela('france', 'FRA', 'França', 6, 3, 2, 0, 1, 6, 3, 3, true) +
        gerarEquipeNaTabela('australia', 'AUS', 'Austrália', 6, 3, 2, 0, 1, 3, 4, -1, true) +
        gerarEquipeNaTabela('denmark', 'DEN', 'Dinamarca', 4, 3, 1, 1, 1, 1, 1, 0, false) +
        gerarEquipeNaTabela('tunisia', 'TUN', 'Tunísia', 1, 3, 0, 1, 2, 1, 3, -2, false) )}
    ${gerarGrupoCard('E',
        gerarEquipeNaTabela('spain', 'ESP', 'Espanha', 4, 2, 1, 1, 0, 8, 0, 7, true) +
        gerarEquipeNaTabela('japan', 'JAP', 'Japão', 3, 2, 1, 0, 1, 2, 2, 0, true) +
        gerarEquipeNaTabela('costa-rica', 'CRC', 'Costa Rica', 3, 2, 1, 0, 1, 1, 7, -6, false) +
        gerarEquipeNaTabela('germany', 'GER', 'Alemanha', 1, 2, 0, 1, 1, 2, 3, -1, false) )}
    ${gerarGrupoCard('F',
        gerarEquipeNaTabela('morocco', 'MAR', 'Marrocos', 7, 3, 2, 1, 0, 4, 1, 3, true) +
        gerarEquipeNaTabela('croatia', 'CRO', 'Croácia', 5, 3, 1, 2, 0, 4, 1, 3, true) +
        gerarEquipeNaTabela('belgium', 'BEL', 'Bélgica', 4, 3, 1, 1, 1, 1, 2, -1, false) +
        gerarEquipeNaTabela('canada', 'CAN', 'Canadá', 0, 3, 0, 0, 3, 2, 7, -5, false) )}
    ${gerarGrupoCard('G',
        gerarEquipeNaTabela('brazil', 'BRA', 'Brasil', 6, 2, 2, 0, 0, 3, 0, 3, true) +
        gerarEquipeNaTabela('switzerland', 'SUI', 'Suíça', 3, 2, 1, 0, 1, 1, 1, 0, true) +
        gerarEquipeNaTabela('cameroon', 'CMR', 'Camarões', 1, 2, 0, 1, 1, 3, 4, -1, false) +
        gerarEquipeNaTabela('serbia', 'SRB', 'Sérvia', 1, 2, 0, 1, 1, 3, 5, -2, false) )}
    ${gerarGrupoCard('H',
        gerarEquipeNaTabela('portugal', 'POR', 'Portugal', 6, 2, 2, 0, 0, 5, 2, 3, true) +
        gerarEquipeNaTabela('ghana', 'GHA', 'Gana', 3, 2, 1, 0, 1, 5, 5, 0, true) +
        gerarEquipeNaTabela('south-korea', 'KOR', 'Coréia do Sul', 1, 2, 0, 1, 1, 2, 3, -1, false) +
        gerarEquipeNaTabela('uruguay', 'URU', 'Uruguai', 1, 2, 0, 1, 1, 0, 2, -2, false) )}
    ${gerarLegendas()}
    </main>`

// Criador da tela de Mata-Mata
document.querySelector("#play-offs").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" /><br>
        <label>Será atualizado diariamente <br />durante a copa do mundo 2022</label><br /><br />
        <span>Pode travar um pouco no celular<br>
        Recomendado abrir no computador<br>
        Ou girar o celular e reduzir o zoom</span><br><br>
        <h1>Fases Finais</h1>
        <span>Atualizado por último em: 01/12 - 14h</span>
    </header>
    <main id="cards">
        <div class="card">
            ${gerarLinhaMataMata('Oitavas de Final', 'oitavas',
                //name1, nome1, cla1, sigla1, name2, nome2, cla2, sigla2, goal1, goal2, semBorda, data, horário, vencedor(1ou2)
                gerarGameMataMata('netherlands', 'Holanda', '1A', 'HOL', 'united-states', 'Estados Unidos', '2B', 'USA', '', '', false, '03/12', '12h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('argentina', 'Argentina', '1C', 'ARG', 'australia', 'Austrália', '2D', 'AUS', '', '', false, '03/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('spain', 'Espanha', '1E', 'ESP', 'croatia', 'Croácia', '2F', 'CRO', '', '', false, '05/12', '12h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('brazil', 'Brasil', '1G', 'BRA', 'ghana', 'Gana', '2H', 'GHA', '', '', false, '05/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('france', 'França', '1D', 'FRA', 'poland', 'Polônia', '2C', 'POL', '', '', false, '04/12', '12h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('england', 'Inglaterra', '1B', 'ENG', 'senegal', 'Senegal', '2A', 'SEN', '', '', false, '04/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('portugal', 'Portugal', '1H', 'POR', 'switzerland', 'Suíça', '2G', 'SUI', '', '', false, '06/12', '12h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('morocco', 'Marrocos', '1F', 'MAR', 'japan', 'Japão', '2E', 'JPN', '', '', true, '06/12', '16h', corPlacar(''), corPlacar(''))
                 ) + '<br><p>Grupos Confirmados até o momento: A, B, C, D, F<br>O restante apenas está de acordo com<br>as classificações, ainda tem mais jogos!</p>'}
            ${gerarLinhaMataMata('Quartas de Final', 'quartas',
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', false, '09/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', false, '09/12', '12h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', false, '10/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', true, '10/12', '12h', corPlacar(''), corPlacar('')) )}
            ${gerarLinhaMataMata('Semi Finais', 'semifinais',
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', false, '13/12', '16h', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', true, '14/12', '16h', corPlacar(''), corPlacar('')) )}
            ${gerarLinhaMataMata('Final', 'final',
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', false, '17/12', '12h<br>3º Lugar', corPlacar(''), corPlacar('')) +
                gerarGameMataMata('empty', 'empty', '', '', 'empty', 'empty', '', '', '', '', true, '18/12', '12h<br>FINAL!', corPlacar(''), corPlacar('')) )}
            <button class="btn-nav" onclick="mostrarOuEsconder('#play-offs', '#classification', 0, 'auto')">CLASSIFICAÇÕES</button>
            <button class="btn-nav" onclick="mostrarOuEsconder('#play-offs', '#app', diaDeHoje, 'smooth')">CALENDÁRIO</button>
            <button class="btn-nav" onclick="mostrarOuEsconder('#play-offs', '#stats', 0, 'auto')">ESTATÍSTICAS</button>
        </div>
    </main>`

// Criador da tela de Estatísticas
document.querySelector("#stats").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" /><br>
        <label>Será atualizado diariamente <br />durante a copa do mundo 2022</label><br /><br />
        <button class="scroll-day-btn" onclick="rolagem(0, 'smooth')">TOPO</button>
        <button class="classification-btn" onclick="mostrarOuEsconder('#stats', '#classification', 0, 'auto')">CLASSIFICAÇÕES</button>
        <button class="fases-finais-btn" onclick="mostrarOuEsconder('#stats', '#play-offs', 0, 'auto')">FASES FINAIS</button>
        <button class="stats-btn" onclick="mostrarOuEsconder('#stats', '#app', diaDeHoje, 'smooth')">CALENDÁRIO</button>
    </header>
    <main id="cards">
        <h1>Estatísticas</h1>
        <span>Atualizado por último em: 01/12 - 14h</span>
        ${gerarCartaoEstatisticas('Artilheiros',
            gerarJogadorEstatistica('netherlands', 'Cody<br>Gakpo', '3', 'gols', 'HOL') +
            gerarJogadorEstatistica('ecuador', 'Enner<br>Valencia', '3', 'gols', 'ECU') +
            gerarJogadorEstatistica('france', 'Kylian<br>Mbappé', '3', 'gols', 'FRA') +
            gerarJogadorEstatistica('england', 'Marcus<br>Rashford', '3', 'gols', 'ENG') +
            gerarJogadorEstatistica('spain', 'Álvaro<br>Morata', '2', 'gols', 'ESP') +
            gerarJogadorEstatistica('croatia', 'Andrej<br>Kramarić', '2', 'gols', 'CRO') +
            gerarJogadorEstatistica('portugal', 'Bruno<br>Fernandes', '2', 'gols', 'POR') +
            gerarJogadorEstatistica('england', 'Bukayo<br>Saka', '2', 'gols', 'ENG') +
            gerarJogadorEstatistica('south-korea', 'Cho<br>Gue-sung', '2', 'gols', 'KOR') +
            gerarJogadorEstatistica('spain', 'Ferran<br>Torres', '2', 'gols', 'ESP') +
            gerarJogadorEstatistica('argentina', 'Lionel<br>Messi', '2', 'gols', 'ARG') +
            gerarJogadorEstatistica('iran', 'Mehdi<br>Taremi', '2', 'gols', 'IRN') +
            gerarJogadorEstatistica('ghana', 'Mohammed<br>Kudus', '2', 'gols', 'GHA') +
            gerarJogadorEstatistica('france', 'Olivier<br>Giroud', '2', 'gols', 'FRA') +
            gerarJogadorEstatistica('brazil', 'Richarlison', '2', 'gols', 'BRA') +
            gerarJogadorEstatistica('saudi-arabia', 'Salem<br>Al-Dawsari', '2', 'gols', 'KSA') )}
        ${gerarCartaoEstatisticas('Cartões Amarelos',
            gerarJogadorEstatistica('saudi-arabia', 'Abdulelah Ali<br>Awadh Al Amri', '2', 'cartões', 'KSA') +
            gerarJogadorEstatistica('saudi-arabia', 'Abdulellah<br>Al-Malki', '2', 'cartões', 'KSA') +
            gerarJogadorEstatistica('iran', 'Alireza<br>Jahanbakhsh', '2', 'cartões', 'IRN') +
            gerarJogadorEstatistica('belgium', 'Amadou<br>Mvom Onana', '2', 'cartões', 'BEL') +
            gerarJogadorEstatistica('costa-rica', 'Francisco<br>Calvo', '2', 'cartões', 'CRC') +
            gerarJogadorEstatistica('senegal', 'Idrissa<br>Gueye', '2', 'cartões', 'SEN') +
            gerarJogadorEstatistica('ecuador', 'Jhegson<br>Méndez', '2', 'cartões', 'ECU') +
            gerarJogadorEstatistica('senegal', 'Boulaye<br>Dia', '1', 'cartão', 'SEN') +
            gerarJogadorEstatistica('qatar', 'Homan<br>Ahmed', '1', 'cartão', 'QAT') +
            gerarJogadorEstatistica('senegal', 'Ismail<br>Jakobs', '1', 'cartão', 'SEN') +
            gerarJogadorEstatistica('wales', 'Joe<br>Rodon', '1', 'cartão', 'WAL') +
            gerarJogadorEstatistica('netherlands', 'Matthijs<br>de Ligt', '1', 'cartão', 'HOL') +
            gerarJogadorEstatistica('ecuador', 'Moisés<br>Caicedo', '1', 'cartão', 'ECU') +
            gerarJogadorEstatistica('iran', 'Morteza<br>Pouraliganji', '1', 'cartão', 'IRN') +
            gerarJogadorEstatistica('senegal', 'Nampalys<br>Mendy', '1', 'cartão', 'SEN') +
            gerarJogadorEstatistica('united-states', 'Sergiño<br>Dest', '1', 'cartão', 'USA') +
            gerarJogadorEstatistica('united-states', 'Tim<br>Ream', '1', 'cartão', 'USA') +
            gerarJogadorEstatistica('wales', 'Wayne<br>Hennessey', '1', 'cartão', 'WAL') +
            gerarJogadorEstatistica('united-states', 'Weston<br>McKennie', '1', 'cartão', 'USA') )}
        ${gerarCartaoEstatisticas('Cartões Vermelhos',
            gerarJogadorEstatistica('wales', 'Wayne<br>Hennessey', '1', 'cartão', 'WAL') +
            '<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>' )}
    </main>`

//PARTE AUXILIAR DO CÓDIGO (JSON + FUNÇÕES + ROLAGEM + VARIÁVEL)
// JSON com o nome de todos os grupos, siglas e nomes dos jogadores
const json = [
    {
        "id": 0,
        "sigla": "ARG",
        "pais": "Argentina",
        "grupo": "C",
        "jogadores": {
            "tecnico": "Lionel Scaloni",
            "goleiros": ["Franco Armani", "Geronimo Rulli", "Damian Martinez"],
            "zagueiros": ["Juan Foyth", "Nicolas Tagliafico", "Gonzalo Montiel", "German Pezzella", "Cristian Romero", "Nicolas Otamendi", "Lisandro Martinez", "Nahuel Molina"],
            "meioscampos": ["Leandro Paredes", "Rodrigo De Paul", "Marcos Acuna", "Exequiel Palacios", "Thiago Almada", "Alejandro Gomez", "Rodriguez Guido", "Alexis Mac Allister", "Enzo Fernandez"],
            "atacantes": ["Julian Alvarez", "Lionel Messi", "Angel Di Maria", "Angel Correa", "Paulo Dybala", "Lautaro Martinez"]
        }
    },
    {
        "id": 1,
        "sigla": "AUS",
        "pais": "Australia",
        "grupo": "D",
        "jogadores": {
            "tecnico": "Graham James Arnold",
            "goleiros": ["Mathew Ryan", "Andrew Redmayne", "Danny Vukovic"],
            "zagueiros": ["Milos Degenek", "Nathaniel Atkinson", "Kye Rowles", "Fran Karacic", "Bailey Wright", "Aziz Behich", "Harry Souttar", "Thomas Deng", "Joel Bruce King"],
            "meioscampos": ["Ajdin Hrustic", "Aaron Mooy", "Riley McGree", "Cameron Devlin", "Jackson Irvine", "Keanu Baccus"],
            "atacantes": ["Marco Tilio", "Mathew Leckie", "Jamie MacLaren", "Awer Mabil", "Mitch Duke", "Garang Kuol", "Craig Goodwin", "Jason Cummings"]
        }
    },
    {
        "id": 2,
        "sigla": "BEL",
        "pais": "Bélgica",
        "grupo": "F",
        "jogadores": {
            "tecnico": "Roberto Martínez Montoliu",
            "goleiros": ["Thibaut Courtois", "Simon Mignolet", "Koen Casteels"],
            "zagueiros": ["Toby Alderweireld", "Arthur Theate", "Wout Faes", "Jan Vertonghen", "Leander Dendoncker", "Zeno Debast"],
            "meioscampos": ["Axel Witsel", "Kevin De Bruyne", "Youri Tielemans", "Thomas Meunier", "Thorgan Hazard", "Amadou Onana", "Hans Vanaken", "Timothy Castagne"],
            "atacantes": ["Romelu Lukaku", "Eden Hazard", "Yannick Carrasco", "Dries Mertens", "Leandro Trossard", "De Ketelaere", "Michy Batshuayi", "Lois Openda", "Jeremy Doku"]
        }
    },
    {
        "id": 3,
        "sigla": "BRA",
        "pais": "Brasil",
        "grupo": "G",
        "jogadores": {
            "tecnico": "Tite",
            "goleiros": ["Alisson", "Ederson", "Weverton"],
            "zagueiros": ["Danilo", "Alex Sandro", "Daniel Alves", "Alex Telles", "Militão", "Marquinhos", "Thiago Silva", "Bremer"],
            "meioscampos": ["Bruno Guimarães", "Casemiro", "Fabinho", "Fred", "Paquetá", "Everton Ribeiro"],
            "atacantes": ["Neymar", "Vinicius Júnior", "Antony", "Rodrygo", "Raphinha", "Richarlison", "Pedro", "Gabriel Jesus", "Gabriel Martinelli"]
        }
    },
    {
        "id": 4,
        "sigla": "CMR",
        "pais": "Camarões",
        "grupo": "G",
        "jogadores": {
            "tecnico": "Rigobert Song Bahanag",
            "goleiros": ["Brady Ngapandouetnbu", "Devis Epassy", "Andre Onana"],
            "zagueiros": ["Jerome Ngom Mbekeli", "Nicolas Nkoulou", "Christopher Wooh", " Olivier Mbaizo", "Collins Fai", " Jean Charles Castelletto", "Enzo Ebosse", "Nouhou Tolo"],
            "meioscampos": ["Gael Ondoua", "Georges Kevin Nkoudou", "Andre Frank Zambo", "Samuel Gouet", "Pierre Kunde", "Martin Hongla", "Olivier Ntcham", "Souaibou Marou"],
            "atacantes": ["Nicolas Ngameleu", "Jean Pierre Nsame", "Vincent Aboubakar", "Christian Bassogog", "Karl Toko Ekambi", "Choupo Moting Eric", "Bryan Mbeumo"]
        }
    },
    {
        "id": 5,
        "sigla": "CAN",
        "pais": "Canadá",
        "grupo": "F",
        "jogadores": {
            "tecnico": "John Herdman",
            "goleiros": ["Dayne St Clair", "James Pantemis", "Milan Borjan"],
            "zagueiros": ["Alistair Johnston", "Sam Adekugbe", "Kamal Miller", "Steven Vitoria", "Richie Laryea", "Derek Cornelius", "Joel Waterman"],
            "meioscampos": ["Samuel Piette", "Stephen Eustaquio", "Liam Fraser", "Junior Hoilett", "Atiba Hutchinson", "Mark Anthony Kaye", "Ismael Kone", "Jonathan Osorio", "Liam Millar", "David Wotherspoon"],
            "atacantes": ["Lucas Cavallini", "Tajon Buchanan", "Ike Ugbo", "Cyle Larin", "Davies Alphonso", "Jonathan David"]
        }
    },
    {
        "id": 6,
        "sigla": "CRC",
        "pais": "Costa Rica",
        "grupo": "E",
        "jogadores": {
            "tecnico": "Fernando Suárez",
            "goleiros": ["Keylor Navas", "Esteban Alvarado", "Patrick Sequeira"],
            "zagueiros": ["Juan Vargas", "Keysher Fuller", "Oscar Duarte", "Bryan Oviedo", "Francisco Calvo", "Carlos Martinez", "Kendall Waston", "Ronald Matarrita"],
            "meioscampos": ["Daniel Chacon", "Celso Borges", "Jewison Bennette", "Bryan Ruiz", "Gerson Torres", "Youstin Salas", "Yeltsin Tejeda", "Brandon Aguilera", "Douglas Lopez", "Roan Wilson", "Anthony Hernandez", "Alvaro Zamora"],
            "atacantes": ["Anthony Contreras", "Johan Venegas", "Joel Campbell"]
        }
    },
    {
        "id": 7,
        "sigla": "CRO",
        "pais": "Croacia",
        "grupo": "F",
        "jogadores": {
            "tecnico": "Zlatko Dalić",
            "goleiros": ["Dominik Livakovic", "Ivo Grbic", "Ivica Ivusic"],
            "zagueiros": ["Josip Stanisic", "Borna Barisic", "Martin Erlic", "Dejan Lovren", "Borna Sosa", "Josko Gvardiol", "Domagoj Vida", "Josip Juranovic", "Josip Sutalo"],
            "meioscampos": ["Lovro Majer", "Mateo Kovacic", "Luka Modric", "Marcelo Brozovic", "Nikola Vlasic", "Mario Pasalic", "Luka Sucic", "Kristijan Jakic"],
            "atacantes": ["Ivan Persic", "Andrej Kramaric", "Marko Livaja", "Bruno Petkovic", "Ante Budimir", "Mislav Orsic"]
        }
    },
    {
        "id": 8,
        "sigla": "DEN",
        "pais": "Dinamarca",
        "grupo": "D",
        "jogadores": {
            "tecnico": "Kasper Hjulmand",
            "goleiros": ["Kasper Schmeichel", "Oliver Christensen", "Frederik Ronnow"],
            "zagueiros": ["Joachim Anderson", "Victor Nelsson", "Simon Kjaer", "Joakim Maehle", "Andreas Christensen", "Rasmus Kristensen", "Jens Stryger Larsen", "Daniel Wass", "Alexander Bah"],
            "meioscampos": ["Mathias Jensen", "Thomas Delaney", "Christian Eriksen", "Andreas Skov Olsen", "Mikkel Damsgaard", "Christian Norgaard", "Pierre Emile Hojbjerg", "Robert Skov", "Jesper Lindstrom"],
            "atacantes": ["Martin Braithwaite", "Kasper Dolberg", "Jonas Wind", "Yussuf Yurary Poulsen", "Andreas Cornelius"]
        }
    },
    {
        "id": 9,
        "sigla": "ECU",
        "pais": "Equador",
        "grupo": "A",
        "jogadores": {
            "tecnico": "Gustavo Alfaro",
            "goleiros": ["Hernan Galindez", "Moises Ramirez", "Alexander Dominguez"],
            "zagueiros": ["Felix Torres", "Piero Hincapie", "Robert Arboleda", "William Pacho", "Pervis Estupinan", "Xavier Arreaga", "Angelo Preciado", "Diego Jose Palacios Espinoza", "Jackson Porozo"],
            "meioscampos": ["Jose Cifuentes", "Carlos Gruezo", "Eduar Preciado", "Romario Ibarra", "Angel Mena", "Jeremy Sarmiento", "Gonzalo Plata", "Jhegson Mendez", "Alan Franco", "Moises Caicedo"],
            "atacantes": ["Michael Estrada", "Enner Valencia", "Djorkaeff Reasco", "Kevin Rodriguez"]
        }
    },
    {
        "id": 10,
        "sigla": "ENG",
        "pais": "Inglaterra",
        "grupo": "B",
        "jogadores": {
            "tecnico": "Gareth Southgate",
            "goleiros": ["Jordan Pickford", "Nick Pope", "Aaron Ramsdale"],
            "zagueiros": ["Kyle Walker", "Luke Shaw", "John Stones", "Harry Maguire", "Kieran Trippier", "Eric Dier", "Conor Coady", "Trent Alexander-Arnold", "Ben White"],
            "meioscampos": ["Declan Rice", "Jordan Henderson", "Kalvin Phillips", "Mason Mount", "Philip Foden", "Jude Bellingham", "James Maddison", "Conor Gallagher"],
            "atacantes": ["Jack Grealish", "Harry Kane", "Raheem Sterling", "Marcus Rashford", "Bukayo Saka", "Callum Wilson"]
        }
    },
    {
        "id": 11,
        "sigla": "FRA",
        "pais": "França",
        "grupo": "D",
        "jogadores": {
            "tecnico": "Didier Deschamps",
            "goleiros": ["Hugo Lloris", "Steve Mandanda", "Alphonse Areola"],
            "zagueiros": ["Pavard Benjamin", "Axel Arthur Disasi", "Raphael Varane", "Jules Kounde", "Youssouf Fofana", "William Saliba", "Dayotchanculle Upamecano", "Hernandez Lucas", "Theo Hernandez", "Ibrahima Konate"],
            "meioscampos": ["Matteo Guendouzi", "Aurelien Tchouameni", "Adrien Rabiot", "Jordan Veretout", "Eduardo Celmi Camavinga"],
            "atacantes": ["Antoine Griezmann", "Olivier Giroud", "Kylian Mbappe", "Ousmane Dembele", "Randal Kolo Muani", "Karim Benzema", "Coman Kingsley", "Marcus Thuram"]
        }
    },
    {
        "id": 12,
        "sigla": "GER",
        "pais": "Alemanha",
        "grupo": "E",
        "jogadores": {
            "tecnico": "Hans Dieter Flick",
            "goleiros": ["Neuer Manuel", "Kevin Trapp", "Marc Andre Ter Stegen"],
            "zagueiros": ["Antonio Ruediger", "David Raum", "Matthias Ginter", "Thilo Kehrer", "Suele Niklas", "Lukas Klostermann", "Christian Günter", "Nico Schlotterbeck", "Armel Bella Kotchap"],
            "meioscampos": ["Kimmich Joshua", "Goretzka Leon", "Mario Goetze", "Mueller Thomas", "Musiala Jamal", "Julian Brandt", "Jonas Hofmann", "Sane Leroy", "Ilkay Guendogan"],
            "atacantes": ["Kai Havertz", "Niclas Füllkrug", "Gnabry Serge", "Karim David Adeyemi", "Youssoufa Moukoko"]
        }
    },
    {
        "id": 13,
        "sigla": "GHA",
        "pais": "Gana",
        "grupo": "H",
        "jogadores": {
            "tecnico": "Otto Addo",
            "goleiros": ["Lawrence Ati", "Danlad Ibrahim", "Abdul Manaf Nurudeen"],
            "zagueiros": ["Tariq Lamptey", "Denis Odoi", "Mohammed Salisu", "Gideon Mensah", "Joseph Aidoo", "Abdul Rahman Baba", "Daniel Amartey", "Alexander Djiku", "Seidu Alidu"],
            "meioscampos": ["Thomas Partey", "Elisha Owusu", "Abdul Fatawu Issahaku", "Daniel Kofi Kyereh", "Osman Bukari", "Daniel Afriyie", "Kodus Mohammed", "Salis Abdul Samed", "Kamaldeen Sulemana", "Kamal Sowah"],
            "atacantes": ["Jordan Ayew", "Andre Ayew", "Inaki Williams", "Antoine Semenyo"]
        }
    },
    {
        "id": 14,
        "sigla": "IRN",
        "pais": "Irã",
        "grupo": "B",
        "jogadores": {
            "tecnico": "Carlos Queiroz",
            "goleiros": ["Alireza Beiranvand", "Payam Niazmand", "Amir Abedzadeh", "Hossein Hosseini"],
            "zagueiros": ["Sadegh Moharrami", "Ehsan Haji Safi", "Shojae Khalilzadeh", "Milad Mohammadi", "Morteza Pouraliganji", "Mohammad Kanaani", "Roozbeh Cheshmi", "Majid Hosseini", "Ramin Rezaeian", "Abolfazl Jalali"],
            "meioscampos": ["Saeid Ezatolahi", "Alireza Jahanbakhsh", "Vahid Amiri", "Saman Ghoddos", "Mahdi Torabi", "Ali Gholizadeh", "Karimi Ali", "Ahmad Noorollahi", ""],
            "atacantes": ["Mehdi Taremi", "Karim Ansarifard", "Sardar Azmoun"]
        }
    },
    {
        "id": 15,
        "sigla": "JPN",
        "pais": "Japão",
        "grupo": "E",
        "jogadores": {
            "tecnico": "Hajime Moriyasu",
            "goleiros": ["Eiji Kawashima", "Shuichi Gonda", "Daniel Schmidt"],
            "zagueiros": ["Miki Yamane", "Shogo Taniguchi", "Kou Itakura", "Yuto Nagatomo", "Takehiro Tomiyasu", "Hiroki Sakai", "Maya Yoshida", "Hiroki Ito"],
            "meioscampos": ["Wataru Endo", "Gaku Shibasaki", "Ritsu Doan", "Kaoru Mitoma", "Takumi Minamino", "Takefusa Kubo", "Hidemasa Morita", "Junya Ito", "Daichi Kamada", "Ao Tanaka", "Yuki Soma"],
            "atacantes": ["Takuma Asano", "Shuto Machino", "Ayase Ueda", "Daizen Maeda"]
        }
    },
    {
        "id": 16,
        "sigla": "KOR",
        "pais": "Coreia do Sul",
        "grupo": "H",
        "jogadores": {
            "tecnico": "Paulo Jorge Gomes",
            "goleiros": ["Kim Seunggyu", "Song Bumkeun", "Jo Hyeonwoo"],
            "zagueiros": ["Yoon Jonggyu", "Kim Jinsu", "Kim Minjae", "Hong Chul", "Kim Moonhwan", "Kim Younggwon", "Kwon Kyungwon", "Kim Taehwan", "Cho Yumin"],
            "meioscampos": ["Jung Wooyoung", "Hwang Inbeom", "Son Heungmin", "Paik Seungho", "Lee Jaesung", "Hwang Heechan", "Son Junho", "Na Sangho", "Lee Kangin", "Kwon Changhoon", "Jeong Wooyeong", "Song Minkyu"],
            "atacantes": ["Cho Guesung", "Hwang Uijo"]
        }
    },
    {
        "id": 17,
        "sigla": "MEX",
        "pais": "Mexico",
        "grupo": "C",
        "jogadores": {
            "tecnico": "Gerardo Daniel Martino",
            "goleiros": ["Alfredo Talavera", "Rodolfo Cota", "Guillermo Ochoa"],
            "zagueiros": ["Nestor Araujo", "Cesar Montes", "Edson Alvarez", "Johan Vasquez", "Gerardo Arteaga", "Hector Moreno", "Jorge Sanchez", "Jesus Gallardo", "Kevin Alvarez"],
            "meioscampos": ["Luis Romo", "Carlos Rodriguez", "Erick Gutierrez", "Hector Herrera", "Andres Guardado", "Luis Chavez"],
            "atacantes": ["Raul Jimenez", "Alexis Vega", "Gogelio Gabriel Funes", "Orbelin Pineda", "Henry Martin", "Uriel Antuna", "Hirving Lozando", "Roberto Alvarado"]
        }
    },
    {
        "id": 18,
        "sigla": "MAR",
        "pais": "Marrocos",
        "grupo": "F",
        "jogadores": {
            "tecnico": "Hoalid Regragui",
            "goleiros": ["Yassine Bounou", "Monir El Kajoui", "Ahmed Tagnaouti"],
            "zagueiros": ["Achraf Hakimi", "Noussair Mazraoui", "Nayef Aguerd", "Ghanem Saiss", "Jawad El Yamiq", "Dari Achraf", "Benoun Badr", "Yahya Attiat-Allah"],
            "meioscampos": ["Sofyan Amrabat", "Hakim Ziyech", "Azzedine Ounahi", "Anass Zaroury", "Ilias Chair", "Zakaria Aboukhlal", "Selim Amallah", "Sofiane Boufal", "Bilal El Khannouss", "Jabrane Yahya"],
            "atacantes": ["Abd Al Razke Hamdalah", "Abdelhamid Sabiri", "Abde Ezzalzouli", "Youssef En Nesyri", "Walid Cheddira"]
        }
    },
    {
        "id": 19,
        "sigla": "HOL",
        "pais": "Holanda",
        "grupo": "A",
        "jogadores": {
            "tecnico": "Louis Van Gaal",
            "goleiros": ["Remko Pasveer", "Justin Bijlow", "Andries Noppert"],
            "zagueiros": ["Jurrien Timber", "Matthijs De Ligt", "Virgil Van Dijk", "Nathan Ake", "Stefan De Vrij", "Tyrell Malacia", "Daley Blind", "Denzel Dumfries", "Jeremie Frimpong"],
            "meioscampos": ["Steven Berghuis", "Davy Klaassen", "Marten De Roon", "Teun Koopmeiners", "Frenkie De Jong", "Kenneth Taylor", "Xavi Simons"],
            "atacantes": ["Steven Bergwijn", "Cody Gakpo", "Luuk De Jong", "Memphis Depay", "Noa Lang", "Vincent Janssen", "Wout Weghorst"]
        }
    },
    {
        "id": 20,
        "sigla": "POL",
        "pais": "Polônia",
        "grupo": "C",
        "jogadores": {
            "tecnico": "Czes ław Michniewicz",
            "goleiros": ["Wojciech Szczesny", "Lukasz Skorupski", "Kamil Grabara"],
            "zagueiros": ["Matty Cash", "Artur Jedrzejczyk", "Mateusz Wieteska", "Jan Bednarek", "Jakub Kiwior", "Kamil Glik", "Bartosz Bereszynski", "Robert Gumny"],
            "meioscampos": ["Krystian Bielik", "Damian Szymanski", "Grzegorz Krychowiak", "Kamil Grosicki", "Jakub Kaminski", "Szyman Zurkowski", "Sebastian Szymanski", "Piotr Zielinski", "Nicola Zalewski", "Przemyslaw Frankowski", "Michal Skoras"],
            "atacantes": ["Arkadiusz Milik", "Lewandowski Robert", "Karol Swiderski", "Krzysztof Piatek"]
        }
    },
    {
        "id": 21,
        "sigla": "POR",
        "pais": "Portugal",
        "grupo": "H",
        "jogadores": {
            "tecnico": "Fernando Manuel Fernandes",
            "goleiros": ["Rui Patricio", "Jose Sa", "Diogo Costa"],
            "zagueiros": ["Diogo Dalot", "Pepe", "Ruben Dias", "Raphael Guerreiro", "Danilo", "Nuno Mendes", "Joao Cancelo", "Antonio Silva"],
            "meioscampos": ["Joao Palhinha", "Bruno Fernandes", "William", "Vitinha", "Joao Mario", "Rúben Neves", "Matheus Nunes", "Otavio"],
            "atacantes": ["Cristiano Ronaldo", "Andre Silva", "Bernardo Silva", "Joao Felix", "Rafael Leao", "Ricardo Horta", "Goncalo Ramos"]
        }
    },
    {
        "id": 22,
        "sigla": "QAT",
        "pais": "Catar",
        "grupo": "A",
        "jogadores": {
            "tecnico": "Féliz Sánchez Bas",
            "goleiros": ["Saad Alsheeb", "Yousof Hassan", "Meshaal Barsham"],
            "zagueiros": ["Pedro Miguel", "Mohammed Waad", "Tarek Salman", "Musaab Khidir", "Homam Ahmed", "Bassam Hisham", "Boualem Khoukhi", "Ismail Mohamad"],
            "meioscampos": ["Abdelkarim Hassan", "Abdulaziz Hatem", "Ali Assadalla", "Hassan Alhaydos", "Karim Boudiaf", "Salem Al Hajri", "Assim Madibo", "Naif Abdulraheem", "Jassem Gaber", "Mostafa Tarek Meshaal"],
            "atacantes": ["Ahmed Alaaeldin", "Mohammed Muntari", "Akram Afif", "Khalid Muneer", "Almoez Ali"]
        }
    },
    {
        "id": 23,
        "sigla": "KSA",
        "pais": "Arabia Saudita",
        "grupo": "C",
        "jogadores": {
            "tecnico": "Hervé Renard",
            "goleiros": ["Mohammed Alyami", "Mohammed Alowais", "Nawaf Alaqidi"],
            "zagueiros": ["Sultan Alghannam", "Abdullah Madu", "Abdulelah Alamri", "Ali Albulathi", "Mohammed Alburayk", "Saud Abdulhamid", "Yasser Alshahrani", "Hassan Altambakti"],
            "meioscampos": ["Salman Alfaraj", "Abdulelah Almalki", "Abdullah Otayf", "Ali Alhassan", "Sami Alnaji", "Nawaf Al Abid", "Mohamed Kanno", "Nasser Aldawsari", "Riyadh Sharahili"],
            "atacantes": ["Feras Albrikan", "Salem Aldawsari", "Saleh Alshehri", "Hatam Bahbri", "Abdulrahman Alobud", "Haitham Asiri"]
        }
    },
    {
        "id": 24,
        "sigla": "SEN",
        "pais": "Senegal",
        "grupo": "A",
        "jogadores": {
            "tecnico": "Aliou Cissé",
            "goleiros": ["Seny Dieng", "Edouard Mendy", "Alfred Gomis"],
            "zagueiros": ["Formose Mendy", "Kalidou Koulibaly", "Pape Abou Cisse", "Cheikhou Kouyate", "Moussa Ndiaye", "Fode Ballo", "Ismail Jakobs", "Youssouf Sabaly", "Abdou Diallo", "Moustapha Name"],
            "meioscampos": ["Idrissa Gana Gueye", "Nampalys Mendy", "Pathe Ciss", "Krepin Diatta", "Pape Sarr", "Mamadou Ndiaye", "Pape Gueye"],
            "atacantes": ["Nicolas Jackson", "Boulaye Dia", "Iliman Ndiaye", "Ismaila Sarr", "Famara Diedhiou", "Cheikh Dieng"]
        }
    },
    {
        "id": 25,
        "sigla": "SRB",
        "pais": "Sérvia",
        "grupo": "G",
        "jogadores": {
            "tecnico": "Dragan Stojković",
            "goleiros": ["Marko Dmitrovic", "Predrag Rajkovic", "Vanja Milinkovic"],
            "zagueiros": ["Strahinja Pavlovic", "Strahinja Erakovic", "Nikola Milenkovic", "Milos Veljkovic", "Stefan Mitrovic", "Srdan Babic", "Filip Mladenovic"],
            "meioscampos": ["Nemanja Maksimovic", "Nemanja Gudelj", "Andrija Zivkovic", "Sasa Lukic", "Filip Kostic", "Uros Racic", "Sergej Milinkovic-Savic", "Darko Lazovic", "Ivan Ilic", "Marko Grujic"],
            "atacantes": ["Nemanja Radonjic", "Aleksandar Mitrovic", "Dusan Tajic", "Luka Jovic", "Dusan Vlahovic", "Filip Djuricic"]
        }
    },
    {
        "id": 26,
        "sigla": "ESP",
        "pais": "Espanha",
        "grupo": "E",
        "jogadores": {
            "tecnico": "Luis Enrique Martínez",
            "goleiros": ["Robert Lynch Sánchez", "David Raya", "Unai Simon"],
            "zagueiros": ["Cesar Azpilicueta", "Eric Garcia", "Pau Torres", "Alejandro Balde", "Hugo Guillamon", "Jordi Alba", "Dani Carvajal", "Aymeric Laporte"],
            "meioscampos": ["Sergio Busquets", "Marcos Llorente", "Koke", "Gavi", "Rodri", "Carlos Soler", "Pedri Gonzalez"],
            "atacantes": ["Alvaro Morata", "Marco Asensio", "Ferran Torres", "Nico Williams", "Yeremy Pino", "Dani Olmo", "Pablo Sarabia", "Anssumane Fati"]
        }
    },
    {
        "id": 27,
        "sigla": "SUI",
        "pais": "Suíça",
        "grupo": "G",
        "jogadores": {
            "tecnico": "Murat Yakin",
            "goleiros": ["Yann Sommer", "Jonas Omlin", "Gregor Kobel", "Philipp Koehn"],
            "zagueiros": ["Edimilson Fernandes", "Silvan Widmer", "Nico Elvedi", "Manuel Akanji", "Renato Steffen", "Ricardo Rodriguez", "Eray Comert", "Fabian Schaer"],
            "meioscampos": ["Denis Zakaria", "Remo Freuler", "Granit Xhaka", "Michel Aebischer", "Mohameth Sow", "Christian Fassnacht", "Fabian Frei", "Xherdan Shaqiri", "Fabian Rieder", "Ardon Jashari"],
            "atacantes": ["Breel Embolo", "Haris Seferovic", "Ruben Vargas", "Noah Okafor"]
        }
    },
    {
        "id": 28,
        "sigla": "TUN",
        "pais": "Tunísia",
        "grupo": "D",
        "jogadores": {
            "tecnico": "Jalel Kadri",
            "goleiros": ["Aymen Mathlouthi", "Aymen Dahmen", "Ben Said Bechir", "Hassen Mouez"],
            "zagueiros": ["Ifa Bilel", "Talbi Montassar", "Meriah Yassine", "Dylan Bronn", "Maaloul Ali", "Drager Mohamed", "Wajdi Kechrida", "Ali Abdi"],
            "meioscampos": ["Nader Ghandri", "Mejbri Hannibal", "Sassi Ferjani", "Aissa Laidouni", "Ben Romdhane Ali", "Ellyes Skhiri", "Chaaleli Ghaylen"],
            "atacantes": ["Msakni Youssef", "Issam Jebali", "Wahbi Khazri", "Taha Khenissi", "Jaziri Seifeddine", "Sliti Naim", "Ben Slimane Anis"]
        }
    },
    {
        "id": 29,
        "sigla": "USA",
        "pais": "Estados Unidos",
        "grupo": "B",
        "jogadores": {
            "tecnico": "Gregg Berhalter",
            "goleiros": ["Matt Turner", "Ethan Horvath", "Sean Johnson"],
            "zagueiros": ["Sergino Dest", "Walker Zimmerman", "Antonee Robinson", "Tim Ream", "Aaron Long", "Shaquell Moore", "Cameron Carter-Vickers", "DeAndre Yedlin", "Joseph Scally"],
            "meioscampos": ["Tyler Adams", "Yunus Musah", "Weston James Earl Mc Kennie", "Luca De La Torre", "Cristian Roldan", "Kellyn Perry-Acosta"],
            "atacantes": ["Giovanni Reyna", "Jesus Ferreira", "Christian Pulisic", "Branden Aaronson", "Jordan Morris", "Haji Wright", "Tim Weah", "Josh Sargent"]
        }
    },
    {
        "id": 30,
        "sigla": "URU",
        "pais": "Uruguai",
        "grupo": "H",
        "jogadores": {
            "tecnico": "Diego Alonso",
            "goleiros": ["Fernando Muslera", "Sebastian Sosa", "Sergio Rochet"],
            "zagueiros": ["Jose Gimenez", "Diego Godin", "Ronald Araujo", "Guillermo Varela", "Mathias Olivera", "Vina Matias", "Sebastian Coates", "Martin Caceres", "Jose Luis Rodriguez"],
            "meioscampos": ["Matias Vecino", "Rodrigo Bentancur", "Nicolas De La Cruz", "Giorgian De Arrascaeta", "Lucas Torreira", "Federico Valverde", "Agustin Canobbio", "Manuel Ugarte"],
            "atacantes": ["Facundo Pellistri", "Luis Suarez", "Darwin Nunez", "Maximiliano Gomez", "Facundo Torres", "Edinson Cavani"]
        }
    },
    {
        "id": 31,
        "sigla": "WAL",
        "pais": "Gales",
        "grupo": "B",
        "jogadores": {
            "tecnico": "Robert John Page",
            "goleiros": ["Wayne Hennessey", "Danny Ward", "Adam Davies"],
            "zagueiros": ["Chris Gunter", "Neco Shay Williams", "Ben Davies", "Chris Mepham", "Joe Rodon", "Connor Roberts", "Ethan Ampadu", "Tom Lockyer", "Ben Cabango", "Rubin Colwill"],
            "meioscampos": ["Joe Allen", "Harry Wilson", "Aaron Ramsey", "Joseff Morrell", "Jonathan Williams", "Sorba Thomas", "Dylan Levitt", "Matt Smith", ""],
            "atacantes": ["Brennan Johnson", "Gareth Bale", "Kieffer Moore", "Mark Harris", "Daniel James"]
        }
    }
]

// Função AUXILIAR PARA ARRAY JSON
function escolherIndice(sigla) {
    let paisEscolhido;
    switch (sigla) {
        case "ARG":
            paisEscolhido = 0
            break;
        case "AUS":
            paisEscolhido = 1
            break;
        case "BEL":
            paisEscolhido = 2
            break;
        case "BRA":
            paisEscolhido = 3
            break;
        case "CMR":
            paisEscolhido = 4
            break;
        case "CAN":
            paisEscolhido = 5
            break;
        case "CRC":
            paisEscolhido = 6
            break;
        case "CRO":
            paisEscolhido = 7
            break;
        case "DEN":
            paisEscolhido = 8
            break;
        case "ECU":
            paisEscolhido = 9
            break;
        case "ENG":
            paisEscolhido = 10
            break;
        case "FRA":
            paisEscolhido = 11
            break;
        case "GER":
            paisEscolhido = 12
            break;
        case "GHA":
            paisEscolhido = 13
            break;
        case "IRN":
            paisEscolhido = 14
            break;
        case "JPN":
            paisEscolhido = 15
            break;
        case "KOR":
            paisEscolhido = 16
            break;
        case "MEX":
            paisEscolhido = 17
            break;
        case "MAR":
            paisEscolhido = 18
            break;
        case "HOL":
            paisEscolhido = 19
            break;
        case "POL":
            paisEscolhido = 20
            break;
        case "POR":
            paisEscolhido = 21
            break;
        case "QAT":
            paisEscolhido = 22
            break;
        case "KSA":
            paisEscolhido = 23
            break;
        case "SEN":
            paisEscolhido = 24
            break;
        case "SRB":
            paisEscolhido = 25
            break;
        case "ESP":
            paisEscolhido = 26
            break;
        case "SUI":
            paisEscolhido = 27
            break;
        case "TUN":
            paisEscolhido = 28
            break;
        case "USA":
            paisEscolhido = 29
            break;
        case "URU":
            paisEscolhido = 30
            break;
        case "WAL":
            paisEscolhido = 31
            break;
        default:
            paisEscolhido = 3
            break;
    }
    return paisEscolhido;
}

// Função CABEÇALHO - CLASSIFICAÇÕES
function gerarCabecalhoTable() {
    return `
        <tr>
            <td></td>
            <td>Equipe</td>
            <td>PTS</td>
            <td>PJ</td>
            <td>VIT</td>
            <td>E</td>
            <td>DER</td>
            <td>GM</td>
            <td>GC</td>
            <td>SG</td>
        </tr>`
}

// Função LEGENDAS - CLASSIFICAÇÕES
function gerarLegendas() {
    return `
    <div class="card legendas">
        <h2>Legendas:</h2>
        <p>Circulados em Verde = Classificados</p><br>
        <p>PTS = Pontos</p><br>
        <p>PJ = Partidas Jogadas</p><br>
        <p>VIT = Vitórias</p><br>
        <p>E = Empates</p><br>
        <p>DER = Derrotas</p><br>
        <p>GM = Gols Marcados</p><br>
        <p>GC = Gols Contra</p><br>
        <p>SG = Saldo de Gols</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </div>`
}

//Função CADA TIME - CLASSIFICAÇÕES
function gerarEquipeNaTabela(name, sigla, nome, pts, pj, vit, e, der, gm, gc, sg, selected) {
    let classe = '';
    selected ? classe = ` class="selected"` : '';
    return `
    <tr ${classe}>
        <td><img src="./assets/icon-${name}.svg" alt="Bandeira ${nome}" onclick="gerarNovosDados('${sigla}', '${name}', 'classification')" /></td>
        <td>${nome}</td>
        <td>${pts}</td>
        <td>${pj}</td>
        <td>${vit}</td>
        <td>${e}</td>
        <td>${der}</td>
        <td>${gm}</td>
        <td>${gc}</td>
        <td>${sg}</td>
    </tr>`
}

// Função CARD - CLASSIFICAÇÕES
function gerarGrupoCard(grupo, paises) {
    return `
    <div class="card">
        <h3>Grupo ${grupo}</h3>
        <table>
            ${gerarCabecalhoTable()}
            ${paises}
        </table>
    </div>`
}

// Função PARTIDA - MATAMATA
function gerarGameMataMata(name1, nome1, cla1, sigla1, name2, nome2, cla2, sigla2, goal1, goal2, semBorda, data, tituloJogo, vencedor1, vencedor2) {
    let borda = '';
    semBorda ? borda = ` sem-borda` : '';
    return `
        <div class="game ${borda}">
            <div class="data">
                <p>${data} <span>${tituloJogo ? tituloJogo : ''}</span></p>
            </div>
            <div class="fotos">
                <img src="./assets/icon-${name1}.svg" alt="Bandeira ${nome1}" onclick="gerarNovosDados('${sigla1}', '${name1}', 'play-offs')" />
                <img src="./assets/icon-${name2}.svg" alt="Bandeira ${nome2}" onclick="gerarNovosDados('${sigla2}', '${name2}', 'play-offs')" /><br>
            </div>
            <div class="siglas">
                <div><span class="sigla">${sigla1 ? sigla1 : ''}</span><p class="cla">${cla1 ? cla1 : ''}</p><h4 ${vencedor1}>${goal1 ? goal1 : ''}</h4></div>
                <div><span class="sigla">${sigla2 ? sigla2 : ''}</span><p class="cla">${cla2 ? cla2 : ''}</p><h4 ${vencedor2}>${goal2 ? goal2 : ''}</h4></div>
            </div>
        </div>`
}

// Função LINHA CHEIA DE PARTIDAS - MATAMATA
function gerarLinhaMataMata(titulo, jogoClass, games) {
    return `
        <h3>${titulo ? titulo : ''}</h3>
        <div class="games ${jogoClass}">
            ${games}
        </div>`
}

// Função CARD - ESTATÍSTICAS
function gerarCartaoEstatisticas(title, players) {
    return `
        <div class="card">
            <h2>${title}</h2>
            <ul>
                ${players}
            </ul>
        </div>`
}

// Função CADA JOGADOR - ESTATÍSTICAS
function gerarJogadorEstatistica(nome, player, quantidade, info, sigla) {
    return `
        <li>
            <div>
                <img src="./assets/icon-${nome}.svg" alt="Bandeira ${nome}" onclick="gerarNovosDados('${sigla}', '${nome}', 'stats')" />
                <span>${sigla}</span>
            </div>

            <h3>${player}</h3>
            <p><span>${quantidade}</span> ${info}</p>
        </li>`
}

//Função CADA JOGO - CALENDÁRIO
function createGame(player1, sigla1, hour, player2, sigla2, goal1, goal2, vencedor1, vencedor2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" onclick="gerarNovosDados('${sigla1}', '${player1}', 'app')" />
            <div><span>${sigla1}</span><h4 ${vencedor1}>${goal1 ? goal1 : ''}<h4></div>
            <strong>${hour}</strong>
            <div><span>${sigla2}</span><h4 ${vencedor2}>${goal2 ? goal2 : ''}<h4></div>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" onclick="gerarNovosDados('${sigla2}', '${player2}', 'app')" />
        </li>`
}

//função CARD - CALENDÁRIO
function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

// Função TELA INTEIRA - GROUP
function gerarNovosDados(sigla, nomePic, telaAnterior) {
    mostrarOuEsconder(`#${telaAnterior}`, '#group', 0 , 'auto');
    document.querySelector("#group").innerHTML = `
    <main id="cards">
        ${rendenizarSelecao(sigla, nomePic, telaAnterior)}
    </main>`
}

// Função TODOS OS PLAYERS - GROUP
function gerarJogadores(quatidade, indice, tipoJogador) {
    let listaJogadores = '';
    for (let i = 0; i < quatidade; i++) {
        listaJogadores += `<li>${json[indice].jogadores[tipoJogador][i]}</li>`
    }
    return listaJogadores;
}

// Função AUXILIAR TELA INTEIRA - GROUP (PODE SER REFATORADO!!!)
function rendenizarSelecao(sigla, nomePic, telaAnterior) {
    let indice = escolherIndice(sigla);
    let numGoleiros = json[indice].jogadores.goleiros.length;
    let numZagueiros = json[indice].jogadores.zagueiros.length;
    let numMeiosCampos = json[indice].jogadores.meioscampos.length;
    let numAtacantes = json[indice].jogadores.atacantes.length;
    return `
    <div class="card">
        <h1 onclick="mostrarOuEsconder('#group', '#${telaAnterior}', ${(telaAnterior == 'app' ? diaDeHoje : 0)}, 'auto')">VOLTAR</h1>
        <h2>Grupo ${json[indice].grupo}</h2>
        <h2>${json[indice].pais} <span>${json[indice].sigla}</span></h2>
        <img src="./assets/icon-${nomePic}.svg" alt="Bandeira ${nomePic}" />
        <h3>Técnico: <span>${json[indice].jogadores.tecnico}</span></h3>
        <h3>Goleiros:</h3>
        <ul>
            ${gerarJogadores(numGoleiros, indice, "goleiros")}
        </ul>
        <h3>Zagueiros:</h3>
        <ul>
            ${gerarJogadores(numZagueiros, indice, "zagueiros")}
        </ul>
        <h3>Meios-Campos:</h3>
        <ul>
            ${gerarJogadores(numMeiosCampos, indice, "meioscampos")}
        </ul>
        <h3>Atacantes:</h3>
        <ul>
            ${gerarJogadores(numAtacantes, indice, "atacantes")}
        </ul>
        <h1 onclick="mostrarOuEsconder('#group', '#${telaAnterior}', ${(telaAnterior == 'app' ? diaDeHoje : 0)}, 'auto')">VOLTAR</h1>
    </div>`
}

// Função que retorna a cor para o PLACAR
function corPlacar(quemVenceu) {
    let string;
    switch (quemVenceu) {
        case "1":
            string = "class='ganhador'";
            break;
        case "2":
            string = "class='perdedor'";
            break;
        case "3":
            string = "class='empatou'";
            break;
        default:
            string = "";
            break;
    }
    return string;
}

// Função que automatiza a rolagem durante os dias da copa - fora da copa vai para o topo
function diaAtual() {
    const d = new Date();
    const milisegundos = d.getTime();
    let rolagem = 0;
    if (milisegundos > 1668913200000 && milisegundos < 1668999600000){
        //dia 20/11
        rolagem = 400;
    } else if (milisegundos > 1668999600001 && milisegundos < 1669086000000 ) {
        //dia 21/11
        rolagem = 666;
    } else if (milisegundos > 1669086000001 && milisegundos < 1669172400000) {
        //dia 22/11
        rolagem = 1199;
    } else if (milisegundos > 1669172400001 && milisegundos < 1669258800000) {
        //dia 23/11
        rolagem = 1732;
    } else if (milisegundos > 1669258800001 && milisegundos < 1669345200000) {
        //dia 24/11
        rolagem = 2305;
    } else if (milisegundos > 1669345200001 && milisegundos < 1669431600000) {
        //dia 25/11
        rolagem = 2860;
    } else if (milisegundos > 1669431600001 && milisegundos < 1669518000000) {
        //dia 26/11
        rolagem = 3440;
    } else if (milisegundos > 1669518000001 && milisegundos < 1669604400000) {
        //dia 27/11
        rolagem = 4000;
    } else if (milisegundos > 1669604400001 && milisegundos < 1669690800000) {
        //dia 28/11
        rolagem = 4580;
    } else if (milisegundos > 1669690800001 && milisegundos < 1669777200000) {
        //dia 29/11
        rolagem = 5150;
    } else if (milisegundos > 1669777200001 && milisegundos < 1669863600000) {
        //dia 30/11
        rolagem = 5720;
    } else if (milisegundos > 1669863600001 && milisegundos < 1669950000000) {
        //dia 01/12
        rolagem = 6290;
    } else if (milisegundos > 1669950000001 && milisegundos < 1670036400000) {
        //dia 02/12
        rolagem = 6850;
    } else if (milisegundos > 1670036400001 && milisegundos < 1670122800000) {
        //dia 03/12
        rolagem = 7464;
    } else if (milisegundos > 1670122800001 && milisegundos < 1670209200000) {
        //dia 04/12
        rolagem = 7905;
    } else if (milisegundos > 1670209200001 && milisegundos < 1670295600000) {
        //dia 05/12
        rolagem = 8304;
    } else if (milisegundos > 1670295600001 && milisegundos < 1670382000000) {
        //dia 06/12
        rolagem = 8730;
    } else if (milisegundos > 1670382000001 && milisegundos < 1670641200000) {
        //dia 07/12 e 08/12 DATA SEM JOGOS = dia 09/12
        rolagem = 9129;
    } else if (milisegundos > 1670641200001 && milisegundos < 1670727600000) {
        //dia 10/12
        rolagem = 9570;
    } else if (milisegundos > 1670727600001 && milisegundos < 1670986800000) {
        //dia 11/12 e 12/12 DATA SEM JOGOS = dia 13/12
        rolagem = 9966;
    } else if (milisegundos > 1670986800001 && milisegundos < 1671073200000) {
        //dia 14/12
        rolagem = 10270;
    } else if (milisegundos > 1671073200001 && milisegundos < 1671332400000) {
        //dia 15/12 e 16/12 DATA SEM JOGOS = dia 17/12
        rolagem = 10596;
    } else if (milisegundos > 1671332400001 && milisegundos < 1671418800000) {
        //dia 18/12 FINAL
        rolagem = 10600;
    } else {
        //Qualquer outro dia = pode ir para o topo
        rolagem = 0;
    }
    return rolagem;
}

//Função SCROLL
function rolagem(paraOnde, tipoDeRolagem) {
    window.scrollTo({
        top: paraOnde,
        left: 0,
        behavior: `${tipoDeRolagem}`,
    })
}

// Função NAVEGAÇÃO HTML
function mostrarOuEsconder(saindo, entrando, paraOnde, tipoDeRolagem) {
    document.querySelector(saindo).classList.remove("mostrar");
    document.querySelector(saindo).classList.add("esconder");
    document.querySelector(entrando).classList.remove("esconder");
    document.querySelector(entrando).classList.add("mostrar");
    rolagem(paraOnde, tipoDeRolagem);
}

// Executa o scroll na inicialização
setTimeout(() => rolagem(diaDeHoje, 'smooth'), 1500);

// Variável usada em diversas funções sobre o dia atual
let diaDeHoje = diaAtual();
