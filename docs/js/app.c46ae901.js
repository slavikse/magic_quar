(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)a=r[d],i[a]&&h.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={0:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,1]),s()})({0:function(t,e,s){t.exports=s("Vtdi")},"ALD+":function(t,e,s){"use strict";s.r(e);s("yt8O"),s("VRzm");var n=window.SpeechRecognition||window.webkitSpeechRecognition,i=window.SpeechGrammarList||window.webkitSpeechGrammarList,o=["раз","парашют","выстрел"],a="#JSGF V1.0; grammar words; public <words> = ".concat(o.join(" | ")," ;"),r=new i,l=new n;r.addFromString(a,1),l.grammars=r,l.continuous=!0,l.lang="ru-RU",l.maxAlternatives=1,l.start();var c=window.speechSynthesis,u=new SpeechSynthesisUtterance;l.onresult=function(t){var e=t.results,s=e.length-1,n=e[s][0].transcript;console.log("Точность: ".concat(e[0][0].confidence));var i=n.trim();"выстрел"===i&&window.app.PlayerFire(),u.text="Команда: ".concat(i,", принята!"),"пасхалка"===i?u.text="Не надо тут выпрашивать, что ещё не реализовано я СКАЗАЛ!!! А-ТА-ТА!!!":"соообщение"===i&&(u.text="С Днём Рождения дружище!!! Желаю тебе, чтобы всё было хорошо!!! Остальное у тебя уже есть и скоро будет еще!"),c.speak(u),console.log(u.text)},l.onspeechend=function(){console.log("onspeechend"),setTimeout(function(){l.start()},1e3)}},"AoO/":function(t,e){function s(t){var e=t.path,s=t.volume,n=void 0===s?.6:s,i=t.loop,o=void 0!==i&&i,a=new Audio(e);a.volume=n,a.loop=o,a.play()}window.app={},window.app.noise=s,s({path:"audios/ambiences/horror.mp3",volume:1,loop:!0})},Vtdi:function(t,e,s){"use strict";s.r(e);s("yt8O"),s("VRzm"),s("sEhn"),s("MsAy"),s("RQMZ"),s("YeD5");var n=s("Kw5r"),i=(s("kPFv"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-scene",{attrs:{id:"App",physics:"\n    debug: false;\n    iterations: 3000;\n    maxInterval: 0.008;\n  ",stats:"false","vr-mode-ui":"enabled: false"}},[s("AssetsAudios"),s("AssetsImages"),s("AssetsModels"),s("Balls"),s("Mobs"),s("Player"),s("Walls"),s("Lights"),s("World")],1)}),o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-assets",{attrs:{id:"AssetsAudios"}})},r=[],l={name:"AssetsAudios"},c=l,u=s("KHd+"),d=Object(u["a"])(c,a,r,!1,null,null,null),h=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-assets",{attrs:{id:"AssetsImages"}},[s("img",{attrs:{id:"AssetsImagesRoof",src:"images/roof.jpg"}}),s("img",{attrs:{id:"AssetsImagesFloor",src:"images/floor.jpg"}}),s("img",{attrs:{id:"AssetsImagesWall",src:"images/wall.jpg"}}),s("img",{attrs:{id:"AssetsImagesBackground",src:"images/background.jpg"}})])},m=[],f={name:"AssetsImages"},g=f,b=Object(u["a"])(g,p,m,!1,null,null,null),v=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-assets",{attrs:{id:"AssetsModels"}},[s("a-asset-item",{attrs:{id:"AssetsModelsGun",src:"models/gun/scene.gltf"}})],1)},y=[],A={name:"AssetsModels"},M=A,x=Object(u["a"])(M,w,y,!1,null,null,null),j=x.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"Balls"}},t._l(t.balls,function(e){var n=e.id,i=e.isShown;return i?s("BallsBall",{key:n,attrs:{id:n}}):t._e()}))},E=[],_=s("iv4g"),k=(s("ls82"),s("MECJ")),O=s("xDdU"),P=s.n(O),Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-sphere",{attrs:{id:"BallsBall","dynamic-body":"mass: 2",radius:"0.03",shadow:"receive: true",color:"black"},on:{collide:t.collide}})},B=[],I={name:"BallsBall",methods:{collide:function(t){switch(t.detail.contact.bj.el.id){case"MobsMagicQuARShape":document.dispatchEvent(new CustomEvent("MobsMagicQuARCollide"));break;default:}}}},W=I,S=Object(u["a"])(W,Q,B,!1,null,null,null),F=S.exports,L={name:"Balls",components:{BallsBall:F},data:function(){return{balls:[],lifeTime:1e4,interval:null,clearTime:6e4}},mounted:function(){document.addEventListener("PlayerFire",this.fire),this.interval=setInterval(this.cleaner,this.clearTime)},destroyed:function(){document.removeEventListener("PlayerFire",this.fire),clearInterval(this.interval)},methods:{fire:function(t){var e=t.detail,s=e.position,n=e.direction,i=P()();setTimeout(this.hide.bind(this,i),this.lifeTime),this.balls.push({id:i,isShown:!0}),this.$nextTick(this.acceleration.bind(null,i,s,n))},hide:function(t){var e=this;this.balls.some(function(s,n){var i=s.id;return i===t&&(e.balls[n].isShown=!1,!0)})},acceleration:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e,s,n){var i,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,document.getElementById(e);case 2:a=t.sent,(i=a.body.position).set.apply(i,Object(_["a"])(s)),(o=a.body.velocity).set.apply(o,Object(_["a"])(n));case 5:case"end":return t.stop()}},t,this)}));return function(e,s,n){return t.apply(this,arguments)}}(),cleaner:function(){this.balls=this.balls.filter(function(t){var e=t.isShown;return e})}}},$=L,C=Object(u["a"])($,R,E,!1,null,null,null),T=C.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"Lights"}},[s("a-light",{attrs:{id:"LightsAmbient",type:"ambient",color:"#fff"}})],1)},z=[],U={name:"Lights"},G=U,J=Object(u["a"])(G,D,z,!1,null,null,null),V=J.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"Mobs"}},[s("MobsMagicQuAR")],1)},K=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"MobsMagicQuAR"}},[s("a-box",{attrs:{id:"MobsMagicQuAREngine","dynamic-body":"mass: 0",constraint:"\n      target: #MobsMagicQuARShape;\n      type: coneTwist;\n      pivot: 0 -2 0;\n    ",position:"0, 3.15, 0",width:"0.1",height:"0.1",depth:"0.1",visible:"true",animation:t.movement}}),s("a-entity",{attrs:{id:"MobsMagicQuARShape",position:"0 1.4 0","dynamic-body":"mass: 2",shadow:"receive: true"}},[s("a-box",{attrs:{id:"MobsMagicQuARHead",constraint:"target: #MobsMagicQuARBody",position:"0 1.5 0",width:"0.4",height:"0.4",depth:"0.4",color:"#755"}}),s("a-box",{attrs:{id:"MobsMagicQuARBody",position:"0 0.4 0",width:"0.7",height:"1.5",depth:"0.7",color:"#955"}}),s("a-box",{attrs:{id:"MobsMagicQuARLeftHand",constraint:"target: #MobsMagicQuARBody",position:"-0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",color:"#755"}}),s("a-box",{attrs:{id:"MobsMagicQuARRightHand",constraint:"target: #MobsMagicQuARBody",position:"0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",color:"#755"}}),s("a-box",{attrs:{id:"MobsMagicQuARLeftLeg",constraint:"target: #MobsMagicQuARBody",position:"-0.4 -0.84 0",width:"0.5",height:"0.3",depth:"0.5",color:"#755"}}),s("a-box",{attrs:{id:"MobsMagicQuARRightLeg",constraint:"target: #MobsMagicQuARBody",position:"0.4 -0.84 0",width:"0.5",height:"0.3",depth:"0.5",color:"#755"}})],1)],1)},Z=[],q=s("yT7P"),N={name:"MobsMagicQuAR",data:function(){return{Player:null,MobsMagicQuAREngine:null,interval:null,movement:{property:"position",easing:"linear",dur:3e3,to:{x:0,y:3.15,z:0}},health:100}},mounted:function(){this.Player=document.getElementById("Player").object3D,this.MobsMagicQuAREngine=document.getElementById("MobsMagicQuAREngine").object3D,this.interval=setInterval(this.tick,200),document.addEventListener("MobsMagicQuARCollide",this.collide)},destroyed:function(){clearInterval(this.interval),document.removeEventListener("MobsMagicQuARCollide",this.collide)},methods:{tick:function(){var t=this.Player.getWorldPosition(),e=t.x,s=t.z;this.move(e,s),this.lookAt(e,s)},move:function(t,e){this.movement=Object(q["a"])({},this.movement,{to:{x:t,z:e}})},lookAt:function(t,e){this.MobsMagicQuAREngine.lookAt(t,3,e)},collide:function(){this.health-=1}}},X=N,tt=Object(u["a"])(X,Y,Z,!1,null,null,null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"MobsUnits"}})},nt=[],it={name:"MobsUnits"},ot=it,at=Object(u["a"])(ot,st,nt,!1,null,null,null),rt=at.exports,lt={name:"Mobs",components:{MobsMagicQuAR:et,MobsUnits:rt}},ct=lt,ut=Object(u["a"])(ct,H,K,!1,null,null,null),dt=ut.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"Player",position:"-10 0 25","movement-controls":t.controls,"jump-ability":"distance: 1.2","kinematic-body":"",shadow:"receive: true"}},[s("a-entity",{attrs:{id:"PlayerCamera",position:"0 1.6 0","look-controls":"pointerLockEnabled: true",camera:""},on:{click:t.click}},[s("a-cursor",{attrs:{id:"PlayerCursor",position:"0 -0.7 -2",cursor:"fuse: false"}}),s("a-gltf-model",{attrs:{id:"PlayerGun",position:"0 -0.6 -1",rotation:"0 90 0",scale:"0.05 0.05 0.05",src:"#AssetsModelsGun"}})],1)],1)},pt=[],mt=s("m2rO"),ft={name:"Player",data:function(){return{PlayerCursor:null,click:Function,rate:250,move:Function,run:Function,jump:Function,duration:{move:350,run:200,jump:600},controls:{speed:.45},acceleration:-40}},mounted:function(){this.PlayerCursor=document.getElementById("PlayerCursor").object3D,this.click=window.AFRAME.utils.throttle(this.fire,this.rate,null),this.move=window.AFRAME.utils.throttle(window.app.noise,this.duration.move,null),this.run=window.AFRAME.utils.throttle(window.app.noise,this.duration.run,null),this.jump=window.AFRAME.utils.throttle(window.app.noise,this.duration.jump,null),window.app.PlayerFire=this.click,this.movement()},destroyed:function(){mt["a"].unbind("w, a, s, d, w+a, w+d, shift+w, shift+w+a, shift+w+d, space")},methods:{fire:function(){var t=this,e=this.PlayerCursor.getWorldPosition(),s=e.x,n=e.y,i=e.z,o=this.PlayerCursor.getWorldDirection(),a=o.x,r=o.y,l=o.z,c=new CustomEvent("PlayerFire",{detail:{position:[s,n,i],direction:[a,r,l].map(function(e){return e*t.acceleration})}});document.dispatchEvent(c),window.app.noise({path:"audios/revolver_shoot1.mp3"})},movement:function(){var t=this,e="w, a, s, d, w+a, w+d",s="shift+w, shift+w+a, shift+w+d, space";Object(mt["a"])("".concat(e,", ").concat(s),function(e,s){var n=s.key;switch(n){case"w":case"a":case"s":case"d":case"w+a":case"w+d":t.controls=Object(q["a"])({},t.controls,{speed:.45}),t.move({path:"audios/step_stone.mp3"});break;case"shift+w":case"shift+w+a":case"shift+w+d":t.controls=Object(q["a"])({},t.controls,{speed:.8}),t.run({path:"audios/step_stone.mp3"});break;case"space":t.jump({path:"audios/male_jump.mp3"});break;default:}})}}},gt=ft,bt=Object(u["a"])(gt,ht,pt,!1,null,null,null),vt=bt.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"Walls"}},[s("a-box",{attrs:{id:"WallsRoof",src:"#AssetsImagesRoof",position:"0 5 0",rotation:"-90 0 0",height:"30",width:"30",depth:"0.5",material:"side: double",repeat:"5 10",roughness:"1","static-body":""}}),s("a-plane",{attrs:{id:"WallsFloor",src:"#AssetsImagesFloor",rotation:"-90 0 0",height:"80",width:"80",repeat:"30 45",roughness:"1","static-body":"",shadow:"receive: true"}}),s("a-box",{attrs:{id:"WallsFront",src:"#AssetsImagesWall",position:"0 2 -15",rotation:"0 0 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"5 2",roughness:"1","static-body":""}}),s("a-box",{attrs:{id:"WallsLeft",src:"#AssetsImagesWall",position:"4 2 15",rotation:"0 180 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"5 2",roughness:"1","static-body":"",animation:t.movement}}),s("a-box",{attrs:{id:"WallsRight",src:"#AssetsImagesWall",position:"-15 2 0",rotation:"0 90 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"5 2",roughness:"1","static-body":""}}),s("a-box",{attrs:{id:"WallsBack",src:"#AssetsImagesWall",position:"15 2 0",rotation:"0 -90 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"5 2",roughness:"1","static-body":""}})],1)},yt=[],At={name:"Walls",data:function(){return{status:"closed",movement:{property:"position",easing:"linear",dir:"alternate",dur:3e3,loop:!0,to:{x:0},startEvents:"test",autoplay:!0}}},methods:{test:function(){console.log("test")}}},Mt=At,xt=Object(u["a"])(Mt,wt,yt,!1,null,null,null),jt=xt.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-entity",{attrs:{id:"World"}},[s("a-sky",{attrs:{id:"WorldImagesBackground",src:"#AssetsImagesBackground",radius:"200"}})],1)},Et=[],_t={name:"World"},kt=_t,Ot=Object(u["a"])(kt,Rt,Et,!1,null,null,null),Pt=Ot.exports,Qt={name:"App",components:{AssetsAudios:h,AssetsImages:v,AssetsModels:j,Balls:T,Lights:V,Mobs:dt,Player:vt,Walls:jt,World:Pt}},Bt=Qt,It=Object(u["a"])(Bt,i,o,!1,null,null,null),Wt=It.exports,St=s("L2JU");n["a"].use(St["a"]);var Ft=new St["a"].Store({state:{},mutations:{},actions:{}});s("AoO/");n["a"].config.productionTip=!1,new n["a"]({store:Ft,render:function(t){return t(Wt)}}).$mount("#app"),s("ALD+")},kPFv:function(t,e){}});
//# sourceMappingURL=app.c46ae901.js.map