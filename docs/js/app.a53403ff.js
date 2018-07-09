(function(t){function e(e){for(var n,a,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)a=s[d],r[a]&&h.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={1:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,0]),o()})({0:function(t,e,o){t.exports=o("Vtdi")},KVTb:function(t,e){window.AFRAME.registerComponent("tumbler",{init:function(){console.log("init")},tick:function(){var t=this.el,e=t.getAttribute("rotation");e.x+=.1,e.y+=.1,e.z+=.1,t.setAttribute("rotation",e)}})},Vtdi:function(t,e,o){"use strict";o.r(e);o("VRzm");var n=o("Kw5r"),r=(o("RQMZ"),o("MsAy"),o("YeD5"),o("KVTb"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-scene",{attrs:{embedded:"",arjs:""}},[o("a-assets",[o("a-asset-item",{attrs:{id:"colt",src:"models/colt/scene.gltf"}}),o("a-asset-item",{attrs:{id:"potion",src:"models/potion/scene.gltf"}}),o("a-asset-item",{attrs:{id:"imp",src:"models/imp/scene.gltf"}})],1),o("a-light",{attrs:{type:"ambient",color:"white"}}),o("a-marker",{attrs:{type:"pattern","animation-mixer":"",url:"markers/pattern-marker.patt"}},[o("a-gltf-model",{attrs:{position:"1.5 -1 -1.5",rotation:"0 180 60",scale:"0.1 0.1 0.1",src:"#colt"}})],1)],1)}),i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",t._l(t.balls,function(e,n){return e?o("Ball",{key:n}):t._e()}))},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-sphere",{attrs:{position:"0 0.01 -0.1",radius:"0.04","dynamic-body":"",color:"black"}})},c=[],u={name:"Ball"},d=u,h=o("KHd+"),p=Object(h["a"])(d,l,c,!1,null,null,null),f=p.exports,b={name:"Balls",components:{Ball:f},data:function(){return{balls:[],lifeTime:5e3,interval:null,clearTime:6e4}},mounted:function(){document.addEventListener("fire",this.add),this.interval=setInterval(this.clear,this.clearTime)},destroyed:function(){document.removeEventListener("fire",this.add),clearInterval(this.interval)},methods:{add:function(){setTimeout(this.hide.bind(this,this.balls.length),this.lifeTime),this.balls.push(!0)},hide:function(t){this.balls.splice(t,1,!1)},clear:function(){this.balls=this.balls.filter(function(t){return!t})}}},m=b,y=Object(h["a"])(m,a,s,!1,null,null,null),g=y.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",{attrs:{position:"0 1 -2"},on:{"raycaster-intersected":t.intersected}},[o("a-box",{attrs:{position:"0 1.5 0",width:"0.4",height:"0.4",depth:"0.4",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0 0.4 0",width:"0.7",height:"1.5",depth:"0.7","static-body":"",id:"body",color:"#955"}}),o("a-box",{attrs:{position:"-0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"-0.4 -0.8 0",width:"0.5",height:"0.3",depth:"0.5",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0.4 -0.8 0",width:"0.5",height:"0.3",depth:"0.5",constraint:"target: #body","static-body":"",color:"#755"}})],1)},w=[],x={name:"Mob",methods:{intersected:function(){console.log("intersected")}}},_=x,j=Object(h["a"])(_,v,w,!1,null,null,null),k=j.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",{attrs:{"movement-controls":"fly: false","jump-ability":"maxJumps: 1; distance: 1.2","kinematic-body":"","mesh-smooth":""},on:{click:t.click,collide:t.collide}},[o("a-entity",{attrs:{position:"0 1.5 0","look-controls":"pointerLockEnabled: true",camera:""}},[o("a-sphere",{ref:"ball",attrs:{position:"0 0.01 -0.1",radius:"0.04","dynamic-body":"",color:"black"}}),o("a-cursor",{attrs:{geometry:"primitive: ring; radiusInner: 0.0001; radiusOuter: 0.003",material:"shader: flat; color: black"}})],1)],1)},E=[],M={name:"Player",components:{Balls:g},data:function(){return{click:function(){},rate:300,event:new CustomEvent("fire")}},mounted:function(){this.click=window.AFRAME.utils.throttle(this.fire,this.rate)},methods:{fire:function(){this.$refs.ball.body.position.set(0,.01,-.1),this.$refs.ball.body.velocity.set(0,0,-20),this.$refs.ball.body.angularVelocity.set(0,0,0)},collide:function(t){console.log("collide",t)}}},T=M,$=Object(h["a"])(T,O,E,!1,null,null,null),A=$.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",[o("a-box",{attrs:{position:"0 5 0",rotation:"-90 0 0",height:"30",width:"30",depth:"0.5",material:"side: double",repeat:"20 20",roughness:"1",src:"#roof","static-body":""}}),o("a-plane",{attrs:{rotation:"-90 0 0",height:"100",width:"100",repeat:"50 50",roughness:"1",src:"#floor","static-body":"",shadow:"receive: true"}}),o("a-box",{attrs:{position:"0 2 -15",rotation:"0 0 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}}),o("a-box",{attrs:{position:"0 2 15",rotation:"0 180 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}}),o("a-box",{attrs:{position:"15 2 0",rotation:"0 -90 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}})],1)},S=[],V={name:"Walls",components:{}},B=V,C=Object(h["a"])(B,P,S,!1,null,null,null),J=C.exports,K={name:"App",components:{Mobs:k,Player:A,Walls:J},data:function(){return{color:"#000"}},methods:{fire:function(){this.changeColor()},changeColor:function(){this.color="#".concat((155*Math.random()+100).toFixed(0))}}},L=K,R=Object(h["a"])(L,r,i,!1,null,null,null),F=R.exports,I=o("jE9Z");n["a"].use(I["a"]);var z=new I["a"]({routes:[{path:"/",name:"App",component:F}]}),W=o("L2JU");n["a"].use(W["a"]);var Z=new W["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:z,store:Z,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.a53403ff.js.map