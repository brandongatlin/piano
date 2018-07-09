let soundArray = ['sounds/a1.wav', 'sounds/a1s.wav', 'sounds/b1.wav', 'sounds/c1.wav', 'sounds/c1s.wav', 'sounds/d1.wav', 'sounds/e1.wav', 'sounds/f1.wav', 'sounds/f1s.wav', 'sounds/g1.wav', 'sounds/g1s.wav', 'sounds/c2.wav', 'sounds/d1s.wav'];

let randomKey;

$(".next").on("click", function(){
  randomKey = soundArray[Math.floor(Math.random() * soundArray.length)];

  let randomSound = new Audio(randomKey);
  // console.log("randomKey", randomKey);
  randomSound.play();
})

$(".key").on("click", function(){
  let key = $(this).attr('value')
  // console.log("key", key);
  let clickedVal = `sounds/${key}.wav`;
  // console.log('clickedVal', clickedVal);
  $(this).attr('src', clickedVal);

  mySound = new Audio(clickedVal);
  mySound.play()

  console.log(`${randomKey} ${clickedVal}`);


  if(randomKey === clickedVal) {
    $("#message").html('<li>yeah!!!</li>')
  } else {
    $("#message").html('<li>noooooope!</li>')
  }
})
