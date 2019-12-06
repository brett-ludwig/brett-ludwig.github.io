var nukeDropped = false;

function startup() {
    var bgm = new Audio("./res/war_bgm.mp3");
    bgm.play()
}

function dropNuke() {
  if (!nukeDropped){
    var snd = new Audio("./res/nukeDrop.mp3");
    document.getElementById("warzone").src = "https://image.flaticon.com/icons/svg/2070/2070300.svg";
    snd.play();
    setTimeout(
      function () {
      document.getElementById("warzone").src = "https://cdn3.iconfinder.com/data/icons/modern-war/514/war-001-512.png";
    }, 13000);

    nukeDropped = true;
  }
}
