// Replace 'YOUR_API_KEY' with the actual API key obtained from the Google Cloud Console.
const API_KEY = 'AIzaSyAxw0YLpvjCZQhRRcFi5wfIU-jreNsbXuw';

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube video ID.
const VIDEO_ID = 'u6nosR4y7V8';

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: VIDEO_ID,
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'showinfo': 0,
      'rel': 0,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // You can add custom logic based on player state changes if needed.
}

// Load the YouTube API script
const script = document.createElement('script');
script.src = `https://www.youtube.com/iframe_api`;
document.head.appendChild(script);
