console.log("Welcome to Party");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Badtameez Dil- Benny Dayal, Shefali Alvares", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Balam Pichkari- Shalmali Kholgade, Vishal Dadlani", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Dil Chori- Yo Yo Honey Singh, Ishers, Simar Kaur", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Disco Disco  Benny Dayal, Shirley Setia", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg" },
    { songName: "Gallan Goodiyaan- Shankar Mahadevan, Sukhwinder Singh", filePath: "songs/13.mp3", coverPath: "covers/13.png" },
    { songName: "London Thumakda- Sonu Kakkar, Labh Janjua", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Nashe Si Chadh Gayi- Arijit Singh", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Uff Teri Adaa- Benny Dayal, Harshdeep Kaur, Vishal Shekhar", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {

    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    console.log(songIndex)
    console.log(songs[songIndex])
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
