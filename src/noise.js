function noise({ path, volume = 0.6, loop = false }) {
  const audio = new Audio(path);
  audio.volume = volume;
  audio.loop = loop;
  audio.play();
}

window.app = {};
window.app.noise = noise;

noise({ path: 'audios/ambiences/horror.mp3', volume: 1, loop: true });
