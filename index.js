console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
]

// audioElement.play();

// handle playpause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-regular fa-circle-play");
        masterPlay.classList.add("fa-regular fa-circle-pause");
        }
})

// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // /update seekbar
})
