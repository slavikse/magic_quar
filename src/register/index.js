window.AFRAME.registerComponent('tumbler', {
  // multiple: true,

  init() {
    // this.delta = 0;
    // this.yPrev = 0;
    console.log('init');
  },

  // tick(time, timeDelta) {
  //   // console.log(time, timeDelta);
  //
  //   const { x, y, z } = this.el.object3D.position;
  //
  //   console.log('y', y);
  //   // console.log('yPrev', (y - this.yPrev).toFixed(16));
  //
  //   // this.yPrev = y;
  //
  //   this.el.setAttribute('position', {
  //     x: x + 0.05,
  //     y: y + 0.05,
  //     z,
  //   });
  // },

  tick() {
    const { el } = this;
    const rotation = el.getAttribute('rotation');

    rotation.x += 0.1;
    rotation.y += 0.1;
    rotation.z += 0.1;

    el.setAttribute('rotation', rotation);
  },
});
