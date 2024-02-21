// // Add imports above this line
// import VimeoPlayer from '@vimeo/player';
// import throttle from 'lodash/throttle';

// // Change code below this line
// const player = new VimeoPlayer(document.getElementById('vimeo-player'));

// // Track timeupdate event and save playback time to local storage
// player.on('timeupdate', throttle(() => {
//     const currentTime = player.getCurrentTime();
//     localStorage.setItem('videoplayer-current-time', currentTime.toString());
// }, 1000));

// // Check local storage for saved playback time and resume from that position
// const savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime) {
//     player.setCurrentTime(parseFloat(savedTime));
// }



import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerTimeUpdate, 1000));

function playerTimeUpdate(data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);