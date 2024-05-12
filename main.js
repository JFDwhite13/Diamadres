
var textos = ["TE AMO", "I love you", "Je t'aime", "愛してます", "사랑해요", "Я тебя люблю", "Ich liebe dich", "ฉันรักคุณ", "Eu te amo", "我爱你"];
var i = 0;

setInterval(function() {
  document.querySelector('.unique h1').innerText = textos[i];
  i = (i + 1) % textos.length;
}, 3000);
