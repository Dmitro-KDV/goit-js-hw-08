import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoPlayer = document.querySelector('iframe');
const iframePlayer = new Player(videoPlayer);

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

// iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'))


iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
            default:
                // some other error occurred
                break;
        }
    });
    
    iframePlayer.setColor('#45a247').then(function (color) {
        // the color that was set
    }).catch(function (error) {
        // an error occurred setting the color
    });