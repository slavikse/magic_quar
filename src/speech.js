const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent ||
// window.webkitSpeechRecognitionEvent;

const words = [
  'раз',
  'парашют',
  'выстрел',
];

const grammar = `#JSGF V1.0; grammar words; public <words> = ${words.join(' | ')} ;`;
const speechRecognitionList = new SpeechGrammarList();
const recognition = new SpeechRecognition();
speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'ru-RU';
recognition.maxAlternatives = 1;
recognition.start();

const synth = window.speechSynthesis;
// const voices = synth.getVoices();

const utter = new SpeechSynthesisUtterance();

recognition.onresult = ({ results }) => {
  const last = results.length - 1;
  const text = results[last][0].transcript;

  console.log(`Точность: ${results[0][0].confidence}`);
  const message = text.trim();

  if (message === 'выстрел') {
    window.app.PlayerFire();
  }

  // utter.lang = 'ru-RU';
  // utter.pitch = 0.1;
  // utter.rate = 0.8;
  // utter.voice = voices[0];
  utter.text = `Команда: ${message}, принята!`;

  if (message === 'пасхалка') {
    utter.text = 'Не надо тут выпрашивать, что ещё не реализовано я СКАЗАЛ!!! А-ТА-ТА!!!';
  }

  synth.speak(utter);
  console.log(utter.text);
};

recognition.onspeechend = () => {
  console.log('onspeechend');

  setTimeout(() => {
    recognition.start();
  }, 1000);
};
