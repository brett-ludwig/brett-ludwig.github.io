var nukeDropped = false;

function startup() {
    var bgm = new Audio("./res/war_bgm.mp3");
    bgm.play()
}

function softRain() {
  bgm = new Audio('./res/rain.mp3');
  bgm.play();
}

function dropNuke() {
  if (!nukeDropped){
    var snd = new Audio("./res/nukeDrop.mp3");
    document.getElementById("warzone").src = "https://image.flaticon.com/icons/svg/2070/2070300.svg";
    bgm.pause();
    snd.play();
    setTimeout(
      function () {
      document.getElementById("warzone").src = "https://cdn3.iconfinder.com/data/icons/modern-war/514/war-001-512.png";
    }, 13000);

    setTimeout( softRain(), 3000);

    nukeDropped = true;
  }
}
