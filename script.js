let soundArray = ['sounds/a1.wav', 'sounds/a1s.wav', 'sounds/b1.wav', 'sounds/c1.wav', 'sounds/c1s.wav', 'sounds/d1.wav', 'sounds/e1.wav', 'sounds/f1.wav', 'sounds/f1s.wav', 'sounds/g1.wav', 'sounds/g1s.wav', 'sounds/c2.wav', 'sounds/d1s.wav'];

let randomKey;
let score = 0;

let piano = $("#piano");
piano[0].style.pointerEvents = 'none';

function playSound(){
  piano[0].style.pointerEvents = 'auto';

  randomKey = soundArray[Math.floor(Math.random() * soundArray.length)];

  let randomSound = new Audio(randomKey);
  randomSound.play();

  $(".key").removeClass('red');
  $(".key").removeClass('green');
  $(".key").removeClass('yellow');
}

$(".start").on("click", function(){
  playSound();
});

  $(".key").on("click", function(){
  $(this).addClass('clicked');

  this.style.pointerEvents = 'none';

  let key = $(this).attr('src')

  mySound = new Audio(key);
  mySound.play();

  if(randomKey === key) {
    $("#message").html('<li>yeah!!!</li>')
    score++
    $(this).addClass('green');
    $("#score").text(score);
  } else {
    $("#message").html('<li>noooooope!</li>');
    $(this).addClass('red');

    let answer = $("div").find(`[src='${randomKey}']`);
    $(answer).addClass('yellow');
  }
  setTimeout(function(){
    playSound();

    let userClick = $("div").find(`[src='${key}']`);
    userClick[0].style.pointerEvents = 'auto';

  }, 2000);
});
