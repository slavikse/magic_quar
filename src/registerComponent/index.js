window.AFRAME.registerComponent('mobs-magic-quar-engine', {
  schema: {
    Player: Object,
    // animation: Object,
  },

  tick() {
    const { x, z } = this.data.Player.getWorldPosition();
    this.el.object3D.lookAt(x, 3, z);

    // this.el.attributes.animation = { ...this.data.animation, to: { x, z } };
  },
});
