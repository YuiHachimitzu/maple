document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
    const watchBtn = document.getElementById('watch-btn');
    const animeSection = document.getElementById('anime-section');
    const animeList = document.querySelector('.anime-list');

    const recommendations = [
        { title: 'Naruto', image: 'images/naruto.jpg' },
        { title: 'One Piece', image: 'images/onepiece.jpg' },
        { title: 'Attack on Titan', image: 'images/attackontitan.jpg' },
        { title: 'My Hero Academia', image: 'images/myheroacademia.jpg' },
        { title: 'Demon Slayer', image: 'images/demonslayer.jpg' },
        { title: 'Jujutsu Kaisen', image: 'images/jujutsukaisen.jpg' },
        { title: 'Fullmetal Alchemist: Brotherhood', image: 'images/fullmetalalchemist.jpg' },
        { title: 'Death Note', image: 'images/deathnote.jpg' },
        { title: 'Sword Art Online', image: 'images/swordartonline.jpg' },
        { title: 'Tokyo Ghoul', image: 'images/tokyoghoul.jpg' }
    ];

    function displayRecommendations(animeArray) {
        animeList.innerHTML = '';
        animeArray.forEach(anime => {
            const animeItem = document.createElement('div');
            animeItem.classList.add('anime-item');
            const animeImage = document.createElement('img');
            animeImage.src = anime.image;
            animeImage.alt = anime.title;
            animeItem.appendChild(animeImage);
            animeList.appendChild(animeItem);
        });
    }

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        alert(`Searching for: ${query}`);
    });

    watchBtn.addEventListener('click', () => {
        window.location.href = 'anime.html';
    });

    // Initially hide the anime section
    animeSection.style.display = 'none';
});