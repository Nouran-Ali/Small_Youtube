var btnPlay = document.querySelector("[value=Play]"),
    btnPause = document.querySelector("[value=Pause]"),
    btnstop = document.querySelector("[value=Restart]"),
    btnFullScreen = document.querySelector("[value=FullScreen]"),
    seekbar = document.querySelector("[type=range]"),
    video = document.getElementById("video"),
    video2 = document.getElementById("video2");

btnPlay.addEventListener("click", () => {
    video.play()
})

btnPause.addEventListener("click", () => {
    video.pause()
})


btnstop.addEventListener("click", () => {
    video.pause()
    video.currentTime = 0
})

btnFullScreen.addEventListener("click", () => {
    video.webkitEnterFullScreen()
})



video.addEventListener("timeupdate", () => {
    seekbar.value = video.currentTime * 100 / video.duration
})

video2.addEventListener("click", () => {
    var video = document.getElementById('video');
    video.src= "video/Sherlock Intro Season 1.mp4";
    video.currentTime = 0;
    video.play();
})

video3.addEventListener("click", () => {
    var video = document.getElementById('video');
    video.src= "video/PiXAR.mp4";
    video.currentTime = 0;
    video.play();
})

video4.addEventListener("click", () => {
    var video = document.getElementById('video');
    video.src= "video/Sherlock Intro Season 1.mp4";
    video.currentTime = 0;
    video.play();
})

// function passValues(){
//     var UserName = document.getElementById('name').value,
//     email = document.getElementById('email').value,
//     password = document.getElementById('password').value,
//     gender = document.querySelectorAll('[name = Gender]').value;

//     localStorage.setItem("name",UserName);
//     localStorage.setItem("Email",email);
//     localStorage.setItem("gender",gender);

//     console.log(UserName,email,gender)

//     // return false;
// }

