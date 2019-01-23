$(document).ready(function() {
  console.clear();
});
var pattern = [];
var guide = [];
var choices = ["yellow", "blue", "red", "green"];
var current = '';
var count = 0;
var turn = 0;
var strict = "off";
var yelSnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var bluSnd = new Audio(' https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var redSnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var grnSnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
$('#yellow').on('click', (yellowPlay));
$('#blue').on('click', (bluePlay));
$('#red').on('click', (redPlay));
$('#green').on('click', (greenPlay));
$('#reset').on('click', (reset));
$('#start').on('click', (play));
$('#strict').on('click', (strictToggle));
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');

function strictToggle() {
  if (strict == "off") {
    strict = "on";
    alert('Warning! Strict mode turned on, one mistake and you are done for! Turn back!');
    $('#strict').css('background-color', 'orangered');
    setTimeout(function(){play()},1000);
  } else if (strict == "on") {
    strict = "off";
    alert('strict mode turned off');
    $('#strict').css('background-color', 'black');
  }
}

function yellow() {
  $('#yellow').css('background-color', 'yellow');
  yelSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  setTimeout(function() {
    $('#yellow').css('background-color', 'goldenrod')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
  /* if ((turn == count) && (guide.last == "yellow")) {
    turn += 1;
    generate();
    pattern.append("yellow");
  } else {
    playback();
  }
*/
}

function blue() {
  $('#blue').css('background-color', 'dodgerblue');
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  bluSnd.play();
  setTimeout(function() {
    $('#blue').css('background-color', 'midnightblue')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');

  }, 500);
  /*if ((turn == count) && (guide.last == "blue")) {
    turn += 1;
    generate();
    pattern.append("blue");
  } else {
    playback();
  }
*/
}

function red() {
  $('#red').css('background-color', 'crimson');
  redSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  setTimeout(function() {
    $('#red').css('background-color', 'darkred')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
  /*if ((turn == count) && (guide.last == "red")) {
    turn += 1;
    generate();
    pattern.append("red");
  } else {
    playback();
  }
  */
}

function green() {
  $('#green').css('background-color', 'lawngreen');
  grnSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  setTimeout(function() {
    $('#green').css('background-color', 'forestgreen')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
  /* if ((turn == count) && (guide.last == "green")) {
     turn += 1;
     generate();
     pattern.append("green");
   } else {
     playback();
   }
   */
}

function redPlay() {
  $('#red').css('background-color', 'crimson');
  redSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  if (guide[turn] !== "red") {
    wrong();
  } else if (turn == 21) {
    alert('You win!');
    count = 0;
    generate();
  } else if ((turn == guide.length - 1) && (guide[turn] == "red")) {
    setTimeout(function() {
      generate()
    }, 1000);
  } else if (guide[turn] == "red") {
    turn++;
  }

  setTimeout(function() {
    $('#red').css('background-color', 'darkred')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
}
/*if ((turn == count) && (guide.last == "red")) {
  turn += 1;
  generate();
  pattern.append("red");
} else {
  playback();
}
*/

function greenPlay() {
  $('#green').css('background-color', 'lawngreen');
  grnSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  if (guide[turn] !== "green") {
    wrong();
  } else if (turn == 21) {
    alert('You win!');
    count = 0;
    generate();
  } else if ((turn == guide.length - 1) && (guide[turn] == "green")) {
    setTimeout(function() {
      generate()
    }, 1000);
  } else if (guide[turn] == "green") {
    turn++;
  }
  setTimeout(function() {
    $('#green').css('background-color', 'forestgreen')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
  /* if ((turn == count) && (guide.last == "green")) {
     turn += 1;
     generate();
     pattern.append("green");
   } else {
     playback();
   }
   */
}

function yellowPlay() {
  $('#yellow').css('background-color', 'yellow');
  yelSnd.play();
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  if (guide[turn] !== "yellow") {
    wrong();
  } else if (turn == 21) {
    alert('You win!');
    count = 0;
    generate();
  } else if ((turn == guide.length - 1) && (guide[turn] == "yellow")) {
    setTimeout(function() {
      generate()
    }, 1000);
  } else if (guide[turn] == "yellow") {
    turn++;
  }

  setTimeout(function() {
    $('#yellow').css('background-color', 'goldenrod')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
  }, 500);
  /* if ((turn == count) && (guide.last == "yellow")) {
    turn += 1;
    generate();
    pattern.append("yellow");
  } else {
    playback();
  }
*/
}

function bluePlay() {
  $('#blue').css('background-color', 'dodgerblue');
  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  bluSnd.play();
  if (guide[turn] !== "blue") {
    wrong();
  } else if (turn == 21) {
    alert('You win!');
    count = 0;
    generate();
  } else if ((turn == guide.length - 1) && (guide[turn] == "blue")) {
    setTimeout(function() {
      generate()
    }, 1000);
  } else if (guide[turn] == "blue") {
    turn++;
  }

  setTimeout(function() {
    $('#blue').css('background-color', 'midnightblue')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');

  }, 500);
 
}

function reset() {
  pattern = [];
  count = 0;
  turn = 0;
  $('#countNum').html(count);
  guide = [];
  console.clear();
  //setTimeout(function(){play()},2000);
  $('#countNum').html(count);
  $('#strict').css('pointer-events', 'auto');
  $('#start').css('pointer-events','auto');
}

function play() {
  generate();
    $('#blue').css('pointer-events', 'auto');
  $('#red').css('pointer-events', 'auto');
  $('#yellow').css('pointer-events', 'auto');
  $('#green').css('pointer-events', 'auto');
  $('#strict').css('pointer-events', 'auto');
  $('#start').css('pointer-events','none');
}

function generate() {
  current = (choices[Math.floor(Math.random() * choices.length)]);
  //$('#start').css('pointer-events','none');
  guide.push(current);
  console.log(guide);
  count++;
  turn = 0;
  $('#countNum').html(count);
  var i = 0,
    max = guide.length,
    delay = 600;
  var run = function() {
    if (guide[i] == "yellow") {
      yellow();
    } else if (guide[i] == "green") {
      green();
    } else if (guide[i] == "blue") {
      blue();
    } else if (guide[i] == "red") {
      red();
    };
    if (i++ < max) {
      setTimeout(run, delay);
    }
    return false;
    pattern = [];
  }

  run();
}

function wrong() {
  $('#green').css('background-color', 'lawngreen');
  $('#red').css('background-color', 'crimson');
  $('#blue').css('background-color', 'dodgerblue');
  $('#yellow').css('background-color', 'yellow');

  $('#blue').css('pointer-events', 'none');
  $('#red').css('pointer-events', 'none');
  $('#yellow').css('pointer-events', 'none');
  $('#green').css('pointer-events', 'none');
  turn = 0;
  if (strict == "on") {
    alert('ouch back to level 1!');
    reset();
  } else if (strict == "off"){
    alert('Wrong pattern pay attention! Try again');
  }
  setTimeout(function() {
    $('#green').css('background-color', 'forestgreen')
    $('#red').css('background-color', 'darkred')
    $('#blue').css('background-color', 'midnightblue')
    $('#yellow').css('background-color', 'goldenrod')
    $('#blue').css('pointer-events', 'auto');
    $('#red').css('pointer-events', 'auto');
    $('#yellow').css('pointer-events', 'auto');
    $('#green').css('pointer-events', 'auto');
 var i = 0,
    max = guide.length,
    delay = 600;
  var run = function() {
    if (guide[i] == "yellow") {
      yellow();
    } else if (guide[i] == "green") {
      green();
    } else if (guide[i] == "blue") {
      blue();
    } else if (guide[i] == "red") {
      red();
    };
    if (i++ < max) {
      setTimeout(run, delay);
    }
    return false;
    pattern = [];
  }

  run();
  }, 500);

}

//console.log(pattern);