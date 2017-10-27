function animateText(textArea) {
  var text = textArea.value;
  var to = text.length,
    from = 0;

  animate({
    duration: 1500,
    timing: linear,
    draw: function(progress) {
      var result = (to - from) * progress + from;
      textArea.value = text.substr(0, Math.ceil(result))
    }
  });
}

/**
 *
 */
function linear(timeFraction) {
  return timeFraction;
}

// function textPhrases(countCoins, text) {
//   if (countCoins == 0 && countCoins == 1) {
//     text.value = 'ВЫБЕРИТЕ МОНЕТУ!!!';
//   } else  if(countCoins == 2) {
//     text.value = 'САМОЕ ВРЕМЯ ОСВЕЖИТЬСЯ!';
//   } else (countCoins == 3) {
//     text.value = 'НА СЛАДЕНЬКЛЕ ПОТЯНУЛО? =)';
//   }
//   animateText(textHelp);
// }

  