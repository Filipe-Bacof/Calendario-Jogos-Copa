function createGame(player1, sigla1, hour, player2, sigla2, goal1, goal2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" onclick="gerarNovosDados('${sigla1}')" />
            <div><span>${sigla1}</span>${goal1 ? goal1 : ''}</div>
            <strong>${hour}</strong>
            <div><span>${sigla2}</span>${goal2 ? goal2 : ''}</div>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" onclick="gerarNovosDados('${sigla2}')" />
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
        ${createCard("22/11", "terça", createGame('argentina', 'ARG', '07:00', 'saudi-arabia', 'KSA', '1', '2') + createGame('denmark', 'DEN', '10:00', 'tunisia', 'TUN', '0', '0') + createGame('mexico', 'MEX', '13:00', 'poland', 'POL', '0', '0') + createGame('france', 'FRA', '16:00', 'australia', 'AUS', '4', '1'))}
        ${createCard("23/11", "quarta", createGame('morocco', 'MAR', '07:00', 'croatia', 'CRO', '0', '0') + createGame('germany', 'GER', '10:00', 'japan', 'JPN', '1', '2') + createGame('spain', 'ESP', '13:00', 'costa-rica', 'CRC', '', '') + createGame('belgium', 'BEL', '16:00', 'canada', 'CAN', '', ''))}
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
        top: 1670,
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
setTimeout(rolagemDia, 1500);

console.log(window.scrollY);

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

function gerarJogadores(quatidade, indice, tipoJogador) {
    let listaJogadores = '';
    for (let i = 0; i < quatidade; i++){
        listaJogadores += `<li>${json[indice].jogadores[tipoJogador][i]}</li>`
    }
    return listaJogadores;
}

function rendenizarSelecao(sigla) {
    let indice = escolherIndice(sigla);
    let numGoleiros = json[indice].jogadores.goleiros.length;
    let numZagueiros = json[indice].jogadores.zagueiros.length;
    let numMeiosCampos = json[indice].jogadores.meioscampos.length;
    let numAtacantes = json[indice].jogadores.atacantes.length;

    

    return `
    <div class="card">
        <h1 onclick="voltarAoAPP()">VOLTAR</h1>
        <h2>Grupo ${json[indice].grupo}</h2>
        <h2>${json[indice].pais} <span>${json[indice].sigla}</span></h2>
        <h3>Tecnico: <span>${json[indice].jogadores.tecnico}</span></h3>
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
        <h1 onclick="voltarAoAPP()">VOLTAR</h1>
    </div>
    `
}

function gerarNovosDados(sigla) {
    document.querySelector("#app").classList.remove("mostrar")
    document.querySelector("#group").classList.remove("esconder")
    document.querySelector("#app").classList.add("esconder")
    document.querySelector("#group").classList.add("mostrar")
    rolagemTopo()
    document.querySelector("#group").innerHTML = `
    <main id="cards">
        ${rendenizarSelecao(sigla)}
    </main>
`
}


function voltarAoAPP() {
    document.querySelector("#app").classList.remove("esconder")
    document.querySelector("#group").classList.remove("mostrar")
    document.querySelector("#app").classList.add("mostrar")
    document.querySelector("#group").classList.add("esconder")
    rolagemDia()
}