document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const animeTitle = document.getElementById('anime-title');
    const animeVideo = document.getElementById('anime-video');
    const episodeList = document.querySelector('.episode-list');
    const videoLink = document.getElementById('video-link');
    const backButton = document.getElementById('back-button');

    const episodes = {
        'Naruto': [
            { season: 1, episode: 1, title: 'Enter: Naruto Uzumaki!', video: 'videos/naruto_s1e1.mp4' },
            { season: 1, episode: 2, title: 'My Name is Konohamaru!', video: 'videos/naruto_s1e2.mp4' },
        ],
        'One Piece': [
            { season: 1, episode: 1, title: 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', video: 'https://cf.animeheaven.me/video.mp4?98b5499202caac1eabb8d95256847990' },
            { season: 1, episode: 2, title: 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', video: 'videos/onepiece_s1e2.mp4' },
        ]
    };

    if (title && episodes[title]) {
        animeTitle.textContent = title;
        animeVideo.src = episodes[title][0].video; // Load the first episode by default
        videoLink.href = episodes[title][0].video;
    } else {
        animeTitle.textContent = 'Anime Not Found';
        return; // Exit if no valid anime is found
    }

    function displayEpisodes(selectedAnime) {
        episodeList.innerHTML = '';
        const animeEpisodes = episodes[selectedAnime] || [];
        animeEpisodes.forEach(episode => {
            const episodeItem = document.createElement('div');
            episodeItem.classList.add('episode-item');
            episodeItem.textContent = `S${episode.season}E${episode.episode}: ${episode.title}`;
            episodeItem.addEventListener('click', () => {
                animeVideo.src = episode.video;
                animeVideo.play();
                videoLink.href = episode.video;
            });
            episodeList.appendChild(episodeItem);
        });
    }

    backButton.addEventListener('click', () => {
        window.location.href = 'anime.html';
    });

    displayEpisodes(title);
});
