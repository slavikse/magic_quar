window.AFRAME.registerComponent('wall', {
  multiple: true,
  schema: {
    color: { default: '#FFF' },
    size: { type: 'int', default: 5 },
  },
});

window.AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init() {
    this.el.addEventListener('raycaster-intersected', () => {
      console.log('Player hit something!');
    });
  },
});
