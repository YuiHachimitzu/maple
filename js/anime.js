document.addEventListener('DOMContentLoaded', () => {
    const animeList = document.querySelector('.anime-list');
    const animeSearchInput = document.getElementById('anime-search');
    const animeSearchBtn = document.getElementById('anime-search-btn');
    const categories = document.querySelectorAll('.categories li');

    const recommendations = [
        { title: 'Naruto', image: 'images/naruto.jpg', category: 'action' },
        { title: 'One Piece', image: 'images/onepiece.jpg', category: 'adventure' },
        { title: 'Attack on Titan', image: 'images/attackontitan.jpg', category: 'action' },
        { title: 'My Hero Academia', image: 'images/myheroacademia.jpg', category: 'action' },
        { title: 'Demon Slayer', image: 'images/demonslayer.jpg', category: 'action' },
        { title: 'Jujutsu Kaisen', image: 'images/jujutsukaisen.jpg', category: 'action' },
        { title: 'Fullmetal Alchemist: Brotherhood', image: 'images/fullmetalalchemist.jpg', category: 'action' },
        { title: 'Death Note', image: 'images/deathnote.jpg', category: 'drama' },
        { title: 'Sword Art Online', image: 'images/swordartonline.jpg', category: 'adventure' },
        { title: 'Tokyo Ghoul', image: 'images/tokyoghoul.jpg', category: 'horror' },
        { title: 'Bleach', image: 'images/bleach.jpg', category: 'action' },
        { title: 'Fairy Tail', image: 'images/fairytail.jpg', category: 'adventure' },
        { title: 'Hunter x Hunter', image: 'images/hunterxhunter.jpg', category: 'adventure' },
        { title: 'Black Clover', image: 'images/blackclover.jpg', category: 'action' },
        { title: 'Dragon Ball Z', image: 'images/dragonballz.jpg', category: 'action' },
        { title: 'One Punch Man', image: 'images/onepunchman.jpg', category: 'comedy' },
        { title: 'Naruto Shippuden', image: 'images/narutoshippuden.jpg', category: 'action' },
        { title: 'Boruto', image: 'images/boruto.jpg', category: 'action' },
        { title: 'Attack on Titan Season 2', image: 'images/attackontitan2.jpg', category: 'action' },
        { title: 'My Hero Academia Season 2', image: 'images/myheroacademia2.jpg', category: 'action' },
        { title: 'Demon Slayer Season 2', image: 'images/demonslayer2.jpg', category: 'action' },
        { title: 'Jujutsu Kaisen Season 2', image: 'images/jujutsukaisen2.jpg', category: 'action' },
        { title: 'Fullmetal Alchemist', image: 'images/fullmetalalchemist.jpg', category: 'action' },
        { title: 'Death Note Season 2', image: 'images/deathnote2.jpg', category: 'drama' },
        { title: 'Sword Art Online Season 2', image: 'images/swordartonline2.jpg', category: 'adventure' },
        { title: 'Tokyo Ghoul Season 2', image: 'images/tokyoghoul2.jpg', category: 'horror' },
        { title: 'Bleach Season 2', image: 'images/bleach2.jpg', category: 'action' },
        { title: 'Fairy Tail Season 2', image: 'images/fairytail2.jpg', category: 'adventure' },
        { title: 'Hunter x Hunter Season 2', image: 'images/hunterxhunter2.jpg', category: 'adventure' },
        { title: 'Black Clover Season 2', image: 'images/blackclover2.jpg', category: 'action' },
        { title: 'Dragon Ball Super', image: 'images/dragonballsuper.jpg', category: 'action' },
        { title: 'One Punch Man Season 2', image: 'images/onepunchman2.jpg', category: 'comedy' }
    ];

    function displayRecommendations(animeArray) {
        animeList.innerHTML = '';
        animeArray.forEach(anime => {
            const animeItem = document.createElement('div');
            animeItem.classList.add('anime-item');
            animeItem.dataset.title = anime.title;
            const animeImage = document.createElement('img');
            animeImage.src = anime.image;
            animeImage.alt = anime.title;
            animeItem.appendChild(animeImage);
            animeList.appendChild(animeItem);

            animeItem.addEventListener('click', () => {
                window.location.href = `watch.html?title=${encodeURIComponent(anime.title)}`;
            });
        });
    }

    animeSearchBtn.addEventListener('click', () => {
        const query = animeSearchInput.value.toLowerCase();
        const filteredRecommendations = recommendations.filter(anime => anime.title.toLowerCase().includes(query));
        displayRecommendations(filteredRecommendations);
    });

    animeSearchInput.addEventListener('input', () => {
        const query = animeSearchInput.value.toLowerCase();
        const filteredRecommendations = recommendations.filter(anime => anime.title.toLowerCase().includes(query));
        displayRecommendations(filteredRecommendations);
    });

    categories.forEach(category => {
        category.addEventListener('click', async () => {
            const selectedCategory = category.dataset.category;
            if (selectedCategory === 'all') {
                displayRecommendations(recommendations);
            } else {
                const response = await fetch('categories.json');
                const categoriesData = await response.json();
                const filteredTitles = categoriesData[selectedCategory] || [];
                const filteredRecommendations = recommendations.filter(anime => filteredTitles.includes(anime.title));
                displayRecommendations(filteredRecommendations);
            }
        });
    });

    displayRecommendations(recommendations);
});