document.addEventListener('DOMContentLoaded', () => {
    const players = [
        { name: 'M.S.Dhoni', role: 'Batsman', image: 'https://www.hdwallpapers.in/download/closeup_view_of_ms_dhoni_is_wearing_yellow_dress_and_cap_hd_dhoni-HD.jpg' },
        { name: 'Ruturaj Gaikwad', role: 'Batter', image: 'https://www.hdwallpapers.in/download/ruturaj_gaikwad_with_bat_yellow_sports_dress_white_background_hd_ruturaj_gaikwad-1600x900.jpg' },
        { name: 'Ravindra Jadeja', role: 'All-rounder', image: 'https://th.bing.com/th/id/OIP.1YR2FeklL99_vMfz-Z2wgAHaEK?rs=1&pid=ImgDetMain' },
        { name: 'Mukesh chowdary', role: 'Bowler', image: 'https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2022/04/Mukesh-Choudhary-Cricketer-stock-1.jpg?fit=1200%2C675&ssl=1' },
        { name: 'Devon Conway', role: 'Batsman', image:'https://www.hdwallpapers.in/download/devon_conway_with_cricket_bat_is_wearing_yellow_sports_dress_standing_in_sky_background_hd_devon_conway-HD.jpg' },
        { name: 'Moeen Ali', role: 'All-rounder', image: 'https://staticg.sportskeeda.com/editor/2021/04/a6fac-16180513625093-800.jpg' },
        { name: 'Simarjeet Singh', role: 'Bowler;', image: 'https://www.newsintv.com/wp-content/uploads/2022/05/Simarjeet-Singh-Weight.jpg' },
        { name: 'Nishanth Sindhu', role: 'All-rounder', image: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/07/indiatv-2023-07-22t200224-1690036355.jpg' },
        { name: 'Deepak Chahar', role: 'Bowler', image: 'https://th.bing.com/th/id/OIP.wzNyZU-zquX07n7ToqQP2AHaEK?rs=1&pid=ImgDetMain' }
    ]

    function filterPlayers(role) {
        if (role === 'all') {
            displayPlayers(players);
        } else {
            const filteredPlayers = players.filter(player => player.role === role);
            displayPlayers(filteredPlayers);
        }
    }



    function displayPlayers(filteredPlayers) {
        const playerCards = document.getElementById("player-cards");
        playerCards.innerHTML = "";
        filteredPlayers.forEach(player => {
            const card = document.createElement("div");
            card.className = "player-card";
            card.innerHTML = `<h3>${player.name}</h3><p>${player.role}</p>`;
            playerCards.appendChild(card);
        });
    }
    
    const schedule = [
        { date: '2024-05-25', opponent: 'Team A', venue: 'Stadium 1<br> Chennai', msg:'Do Visit!!!' },
        { date: '2024-05-28', opponent: 'Team B', venue: 'Stadium 2<br> Gujarat', msg:'Do Visit!!!' }
    ];

    const news = [
        { title: 'Match Preview: CSK vs RCB', content: 'Great match is going to happen tomorrow...<br>Most awaited match' },
        { title: 'M.S.Dhoni scores a century!', content: 'Thala for a reason.....' }
    ];

    const playerCardsContainer = document.getElementById('player-cards');
    players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.role}</p>
        `;
        playerCardsContainer.appendChild(card);
    });

    const scheduleListContainer = document.getElementById('schedule-list');
    schedule.forEach(match => {
        const item = document.createElement('div');
        item.classList.add('schedule-item');
        item.innerHTML = `
            <h3>${match.date}</h3>
            <p>Opponent: ${match.opponent}</p>
            <p>Venue: ${match.venue}</p>
        `;
        scheduleListContainer.appendChild(item);
    });

    const newsListContainer = document.getElementById('news-list');
    news.forEach(article => {
        const item = document.createElement('div');
        item.classList.add('news-item');
        item.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        newsListContainer.appendChild(item);
    });
});