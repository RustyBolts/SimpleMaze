require=function s(c,r,a){function h(i,t){if(!r[i]){if(!c[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(u)return u(i,!0);var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}var n=r[i]={exports:{}};c[i][0].call(n.exports,function(t){var e=c[i][1][t];return h(e||t)},n,n.exports,s,c,r,a)}return r[i].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)h(a[t]);return h}({1:[function(t,e,i){"use strict";e.exports=function(t,e,i,o){e=e||"&",i=i||"=";var n={};if("string"!=typeof t||0===t.length)return n;var s=/\+/g;t=t.split(e);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var r,a,h=t.length;0<c&&c<h&&(h=c);for(var u=0;u<h;++u){var d,l,f,p,_=t[u].replace(s,"%20"),m=_.indexOf(i);0<=m?(d=_.substr(0,m),l=_.substr(m+1)):(d=_,l=""),f=decodeURIComponent(d),p=decodeURIComponent(l),r=n,a=f,Object.prototype.hasOwnProperty.call(r,a)?v(n[f])?n[f].push(p):n[f]=[n[f],p]:n[f]=p}return n};var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],2:[function(t,e,i){"use strict";var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(i,o,n,t){return o=o||"&",n=n||"=",null===i&&(i=void 0),"object"==typeof i?r(a(i),function(t){var e=encodeURIComponent(s(t))+n;return c(i[t])?r(i[t],function(t){return e+encodeURIComponent(s(t))}).join(o):e+encodeURIComponent(s(i[t]))}).join(o):t?encodeURIComponent(s(t))+n+encodeURIComponent(s(i)):""};var c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t,e){if(t.map)return t.map(e);for(var i=[],o=0;o<t.length;o++)i.push(e(t[o],o));return i}var a=Object.keys||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push(i);return e}},{}],3:[function(t,e,i){"use strict";i.decode=i.parse=t("./decode"),i.encode=i.stringify=t("./encode")},{"./decode":1,"./encode":2}],ControlFlip:[function(t,e,i){"use strict";cc._RF.push(e,"6560dEzMixJRqADBtX84cYi","ControlFlip"),cc.Class({extends:cc.Component,onLoad:function(){this._positionStart=new cc.v2(0,0),this._positionEnd=new cc.v2(0,0),this._enableLimit=.2*this.node.width,this._activeCount=0,cc.log(this._enableLimit)},update:function(){if(0<this._activeCount){this._activeCount--;var t=this.node.position.x,e=this.node.position.y,i=this._positionEnd.x,o=this._positionEnd.y;this.node.position=new cc.v2(t+.5*(i-t),e+.5*(o-e))}},onPress:function(t){},onDrag:function(t,e){if(this.node.active){var i=this._positionEnd;this._positionEnd=new cc.v2(i.x+e.x,i.y+e.y),this._activeCount=5}},onRelease:function(t){if(this.node.active){var e={x:this._positionEnd.x-this._positionStart.x,y:this._positionEnd.y-this._positionStart.y},i=Math.abs(e.x),o=Math.abs(e.y);o<i&&i>this._enableLimit?e.x<0?NAERT.dispatchCustomEvent("NotifyUIControlFlip",UIEnum.Flip.RIGHT,this):NAERT.dispatchCustomEvent("NotifyUIControlFlip",UIEnum.Flip.LEFT,this):i<o&&o>this._enableLimit&&(0<e.y?NAERT.dispatchCustomEvent("NotifyUIControlFlip",UIEnum.Flip.DOWN,this):NAERT.dispatchCustomEvent("NotifyUIControlFlip",UIEnum.Flip.UP,this)),this._positionEnd=this._positionStart,this._activeCount=10}}}),cc._RF.pop()},{}],ControlFoldList:[function(t,e,i){"use strict";cc._RF.push(e,"05051PcmtNASKvrFh6hJukg","ControlFoldList"),cc.Class({extends:cc.Component,onLoad:function(){this._positionStart=new cc.v2(0,0),this._positionEnd=new cc.v2(0,0),this._enableLimit=.3*this.node.width,this._activeCount=0,this._type=1},update:function(){if(0<this._activeCount){this._activeCount--;var t=this.node.position.x,e=this.node.position.y,i=this._positionEnd.x,o=this._positionEnd.y;this.node.position=new cc.v2(t+.5*(i-t),e+.5*(o-e))}},onPress:function(t){},onDrag:function(t,e){if(this.node.active){var i=this._positionEnd;this._positionEnd=new cc.v2(i.x+e.x,i.y+e.y),this._activeCount=5}},onRelease:function(t){if(this.node.active){var e={x:this._positionEnd.x-this._positionStart.x,y:this._positionEnd.y-this._positionStart.y};Math.abs(e.x)>this._enableLimit?e.x<0?cc.log(this._type--):cc.log(this._type++):(Math.abs(e.y),this._enableLimit),this._positionEnd=this._positionStart,this._activeCount=10}}}),cc._RF.pop()},{}],ControlMain:[function(t,e,i){"use strict";cc._RF.push(e,"abd7eFOMIBOkanzrnsRipFd","ControlMain"),cc.Class({extends:cc.Component,properties:{startTaps:[cc.Component.EventHandler],currentTaps:[cc.Component.EventHandler],finishTaps:[cc.Component.EventHandler]},onLoad:function(){},start:function(){var o=this,t=this.node;t.on(cc.Node.EventType.TOUCH_START,function(t){var e=t.touch.getLocation();o.startTaps.forEach(function(t){return t.emit([e])})}),t.on(cc.Node.EventType.TOUCH_MOVE,function(t){var e=t.touch.getLocation(),i=t.touch.getDelta();o.currentTaps.forEach(function(t){return t.emit([e,i])})}),t.on(cc.Node.EventType.TOUCH_END,function(t){var e=t.touch.getLocation();o.finishTaps.forEach(function(t){return t.emit([e])})}),t.on(cc.Node.EventType.TOUCH_CANCEL,function(t){var e=t.touch.getLocation();o.finishTaps.forEach(function(t){return t.emit([e])})})},onDestroy:function(){}}),cc._RF.pop()},{}],Dice:[function(t,e,i){"use strict";cc._RF.push(e,"26c5dUk38VEDI2GKHVssFk5","Dice"),cc.Class({extends:cc.Component,properties:{Hint:cc.Label,Points:[cc.String],Logo:cc.Sprite,Icons:[cc.Graphics]},onLoad:function(){this._base=0,this._value=1,this._record={point:0,icon:null,hint:""},this._list=[]},start:function(){0<this.Icons.length?(this._list=this.Icons,!this.Logo&&cc.error("未設定骰子圖示")):0<this.Points.length?(this._list=this.Points,!this.Hint&&cc.error("未設定骰子文字")):cc.error("未設定骰子"),this.base(1).dice().show()},onEnable:function(){this._init()},onDisable:function(){this._init()},base:function(t){return this._base=t,this},value:function(t){return this._value=t,this},dice:function(){var t=Object.keys(this._list).sort(function(){return.5-Math.random()})[0],e=parseInt(t,10),i=this.Icons?this._list[e]:null;return this._record={point:e,icon:i,hint:t},cc.log(this._record),this},show:function(){return this.Hint?this.Hint.string=this._list[this._record.point]:this.Icons&&cc.log("ok"),this},hit:function(){return this.dice().show(),this._easeBounceOut(this.node,200,.9),this._easeBounceOut(this.Hint.node,120,.5),this},rotate:function(t){return this},lock:function(){},collect:function(){return(this._record.point+this._base)*this._value},_init:function(){this._record={point:0,icon:null,hint:""},this.Hint.string=""},_easeBounceOut:function(t,e,i){t.opacity=e,t.setScale(i,i),t.runAction(cc.spawn(cc.fadeTo(.2,255),cc.scaleTo(.4,1,1).easing(cc.easeBounceOut())))}}),cc._RF.pop()},{}],DoorRoomItem:[function(t,e,i){"use strict";cc._RF.push(e,"93b78u7AI9DSq6V0ePiygJz","DoorRoomItem"),cc.Class({extends:cc.Component,properties:{Refer:"Boardgame/DoorRoom/",Field:"Heartbeat/",GateLayout:cc.Node},setRef:function(t){this._refPath=t},showGates:function(t,i){this.GateLayout.getChildren().forEach(function(t,e){return t.active=i[e].exist})},showFloors:function(t){}}),cc._RF.pop()},{}],DoorRoomMap:[function(t,e,i){"use strict";cc._RF.push(e,"4586albIBNKSJywy9IA4Yd6","DoorRoomMap");var n=t("Firebase");cc.Class({extends:cc.Component,properties:{Refer:"Boardgame/DoorRoom/",Field:"Field/",Size:50,DoorRoomItem:cc.Node,RankList:cc.Label,CloseButton:cc.Node,MyRoom:t("SimpleMaze")},onLoad:function(){var o=this;this.node.opacity=0,n.listen(this.Refer+this.Field,this._showMap.bind(this)),n.listen(this.Refer+this.Field+"heartbeat/",function(t){var e=t.success,i=t.data;return e&&o._checkBeat(i)}),n.listen(this.Refer+this.Field+"rank/",this._rankList.bind(this))},_showMap:function(t){var s=this,e=t.success,i=t.data;if(e){var o=this.MyRoom.getRoomAxis(),c=o[0].toString(),r=o[1].toString(),a=this.node.getChildren();Object.keys(i).forEach(function(t,e){t.replace(/tile_(.*)_(.*)/,function(t,e,i){var o="tile_"+e+"_"+i,n=a.find(function(t){return t.name==o});n||((n=cc.instantiate(s.DoorRoomItem)).name=o,n.parent=s.node,n.active=!0,n.setPosition(e*s.Size,i*s.Size),n.getComponent("DoorRoom").load(e,i,1,0)),n.color=c==e&&r==i?cc.Color.RED:cc.Color.GRAY})})}},_checkBeat:function(t){var i=this.node.getChildren();Object.keys(t).forEach(function(e){var t=i.find(function(t){return t.name==e});t.stopAllActions(),t.setScale(1,1),t.runAction(cc.sequence(cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1),cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1),cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1)))})},_rankList:function(t){var i=this,e=t.success,o=t.data;e&&(this.RankList.string="==RANK LIST==",Object.keys(o).sort(function(t,e){return o[t].score<o[e].score}).forEach(function(t,e){return i.RankList.string+="\n"+(e+1)+" "+o[t].name+" : "+o[t].score+" 分"}))},clickOnVisible:function(){this.node.active=!0,this.node.opacity=(this.node.opacity+255)%510,this.CloseButton.active=255==this.node.opacity}}),cc._RF.pop()},{Firebase:"Firebase",SimpleMaze:"SimpleMaze"}],DoorRoomMazeItem:[function(t,e,i){"use strict";cc._RF.push(e,"ac1f9cravZAVqqmtBEzfuqz","DoorRoomMazeItem");var _=t("Firebase");cc.Class({extends:t("DoorRoomItem"),properties:{FloorLayout:cc.Node,CharacterLayout:cc.Node,Character:cc.Node,BlockLayout:cc.Node,Block:cc.Node,ItemLayout:cc.Node,Item:cc.Node,Dialog:t("HintWindow"),Heartbeat:t("Heartbeat")},onLoad:function(){this._gates=[],this._floors=[],this._standHere=-1,this._standCode="",this._uniqueid=NAERT.localStorage.getItem("uniqueid",NAERT.randomUniqueCode()),this._stake=[],this._monster="",this._immonster=!1,this.addListener()},setRef:function(t){this._refPath=t,this._stake=[],this.doorRoomMoved()},addListener:function(){var i=this;this.FloorLayout&&this.FloorLayout.getChildren().forEach(function(t,e){t.on(cc.Node.EventType.TOUCH_START,i._standOnFloor.bind(i,e))})},notifyMonster:function(t){this._monster=t,this._immonster=t==this._uniqueid,this._immonster&&this.Heartbeat.noHeart()},randomGates:function(){return new Array(4).fill(!1).map(function(t){return{exist:.5<Math.random()}})},randomFloors:function(t){return new Array(t).fill(!1).map(function(t){return{exist:.2<Math.random()}})},randomItem:function(t){var o=this;t.find(function(t,e){var i=e+4;if(t.exist&&.8<Math.random())return _.record(o._refPath+"/"+i+"/block/","block"),!0})},notify:function(){this.Dialog.catched(),this.stay(-1),this.Heartbeat.eating(),this.Heartbeat.music(.1)},showGates:function(t,i){this.GateLayout.getChildren().forEach(function(t,e){return t.active=i[e].exist}),this._gates=i,-1<this._standHere&&this._addPug(t),!this._immonster&&this.Heartbeat.pressureUp()},showFloors:function(i){this.Character.active=!1,this.Block.active=!1,this.Item.active=!1,this.FloorLayout&&this.FloorLayout.getChildren().forEach(function(t,e){i[e].exist?t.color=cc.Color.GRAY:t.color=cc.Color.BLACK}),this._floors=i},getTilesPostion:function(t){return t<4?this.GateLayout.children[t].position:this.FloorLayout.children[t-4].position},checkPass:function(t){return this._gates[t].exist},moveIn:function(t){t.stopAllActions(),t.setScale(1,1),t.runAction(cc.sequence(cc.scaleTo(.3,1.2,1.2).easing(cc.easeElasticOut()),cc.scaleTo(.5,1,1).easing(cc.easeElasticIn())))},stay:function(t){t<0?this._removePug():this._standOnFloor(t)},passGate:function(e){var i=this,o=this._refPath;this._standInGate(e),this.scheduleOnce(function(t){_.destroy(o+"/"+e+"/characters/"+i._standCode)},.1)},doorRoomMoved:function(){var p=this;this._prevRef&&_.remove(this._prevRef),this._prevRef=this._refPath,_.listen(this._refPath,function(t){var e=t.success,i=t.data;if(e){var u=-1,d=!1,l=p.CharacterLayout.getChildren(),f=p.ItemLayout.getChildren();l.forEach(function(t){return t.active=!1}),f.forEach(function(t){return t.active=!1}),Object.keys(i).map(function(t){return i[t]}).forEach(function(t,n){var o=p.getTilesPostion(n),s=t.characters,e=t.block,i=t.traps,c=t.items;if(s){var r=Object.keys(s);r.forEach(function(t){var e=s[t],i=l.find(function(t){return t.name==e});i||((i=cc.instantiate(p.Character)).name=e,i.parent=p.CharacterLayout,e==p._monster?(i.children[0].active=!1,i.children[1].active=!0):(i.children[0].active=!0,i.children[1].active=!1)),i.active=!0,p._moveTo(i,o.x,o.y,n),e==p._uniqueid?(i.children[0].color=cc.Color.GREEN,u=n):e==p._monster&&(cc.log("有怪物"),!p._immonster&&(d=!0))}),r.find(function(t){var o=s[t];if(u==n&&o!=p._uniqueid&&(cc.log("有人！"),o==p._monster))return cc.log("被抓到了！",o,p._uniqueid),_.check(p.Refer+p.Field+"players/"+o).then(function(t){var e=t.success,i=t.data;e&&(p.stay(-1),p.notify(),_.destroy(p.Refer+p.Field+"players/"+p._uniqueid),_.refresh(p.Refer+p.Field+"players/"+o+"/catch/",i.catch+1))}),!0})}if(e&&(p.Block.active=!0,p.Block.setPosition(o.x,o.y),cc.log("block",n),n==u&&p.moveIn(p.Block)),i&&cc.log("有陷阱"),c){var a=c,h=f[n]||cc.instantiate(p.Item);h.name=a,h.parent=p.ItemLayout,h.active=!0,h.setPosition(o.x,o.y),n!=u||p._immonster||(cc.log("撿東西"),_.destroy(p._refPath+"/"+n+"/items/"),_.check(p.Refer+p.Field+"players/"+p._uniqueid).then(function(t){var e=t.success,i=t.data;e&&_.refresh(p.Refer+p.Field+"players/"+p._uniqueid+"/pick/",i.pick+1)}))}}),d?(p.Heartbeat.roar(),p.Heartbeat.pressureUp()):p.Heartbeat.roar(0),p.Heartbeat.boom()&&NAERT.dispatchCustomEvent("NotifyHeartbeat",!0,p)}})},_moveTo:function(t,e,i,o){t.stopAllActions(),t.setScale(1,1),o<4?t.setPosition(e,i):t.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1,1.2,1),cc.moveTo(.1,t.x,t.y-10)),cc.spawn(cc.scaleTo(.1,1,1.2),cc.moveTo(.1,e,i+20)),cc.spawn(cc.scaleTo(.2,1,1),cc.moveTo(.2,e,i))))},_standInGate:function(t){this._removePug(),this._addPug(t)},_standOnFloor:function(t){this._removePug(),this._addPug(t+4),!this._floors[t].exist&&NAERT.dispatchCustomEvent("NotifyDoorRoomTrap",t,this),this._immonster&&0<Math.random()&&_.refresh(this._refPath+"/"+(t+4)+"/items/","jin")},_addPug:function(t){var e=this;cc.log("add pug",this._standHere),this._standHere=t,_.record(this._refPath+"/"+this._standHere+"/characters/",this._uniqueid).then(function(t){return e._standCode=t})},_removePug:function(){var n=this;cc.log("remove pug",this._standHere,this._standCode),-1<this._standHere&&(_.destroy(this._refPath+"/"+this._standHere+"/characters/"+this._standCode),_.check(this._refPath).then(function(t){var e=t.success,i=t.data;e&&Object.keys(i).map(function(t){return i[t]}).forEach(function(t,i){var o=t.characters;o&&Object.keys(o).forEach(function(t,e){o[t]==n._uniqueid&&_.destroy(n._refPath+"/"+i+"/characters/"+t)})})}))},_reloadwebsite:function(){window.location.reload()},clickOnFloor:function(t){cc.log(t),this._standOnFloor(t)},clickOnTrap:function(t){NAERT.dispatchCustomEvent("NotifyDoorRoomTrap",!0,this),this._standOnFloor(t),this.Dialog.trap(t)}}),cc._RF.pop()},{DoorRoomItem:"DoorRoomItem",Firebase:"Firebase",Heartbeat:"Heartbeat",HintWindow:"HintWindow"}],DoorRoom:[function(t,e,i){"use strict";cc._RF.push(e,"32f62XLUwRHCrXfXzsqAXlB","DoorRoom");var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=t("Firebase");cc.Class({extends:cc.Component,properties:{Refer:"Boardgame/DoorRoom/",Field:"Field/",Mask:cc.Node,FloorNumber:9,RoomItem:t("DoorRoomItem")},load:function(o,n,s,c){var r=this,t=this.getTilePath(o,n,s);cc.log(this.node.name),this.RoomItem.setRef(t),this.Mask.opacity=255,l.check(t).then(function(t){var e=t.success,i=t.data;e?r._showRoom(c,i):r.create(o,n,s,c,r.RoomItem.randomGates(),r.RoomItem.randomFloors(r.FloorNumber))})},create:function(n,s,c,r,a,h){var u=this,d=0;[[n,s+1],[n-1,s],[n,s-1],[n+1,s]].forEach(function(t,o){l.check(u.getTilePath(t[0],t[1],c)).then(function(t){var e=t.success,i=t.data;e&&(a[o]=i[(o+2)%4]),4==++d&&(l.refresh(u.getTilePath(n,s,c),a.concat(h)),u._showRoom(r,a.concat(h)))})})},getTilePath:function(t,e,i){return this.Refer+this.Field+this._tileName(t,e,i)+"/"},_tileName:function(t,e,i){return"tile_"+t*i+"_"+e*i},_showRoom:function(t,e){cc.log(void 0===e?"undefined":o(e));var i=Object.keys(e).map(function(t){return e[t]});this.RoomItem.showGates(t,i.splice(0,4)),this.RoomItem.showFloors(i),this.Mask.runAction(cc.fadeTo(.1,0))}}),cc._RF.pop()},{DoorRoomItem:"DoorRoomItem",Firebase:"Firebase"}],EventButton:[function(t,e,i){"use strict";cc._RF.push(e,"8d40bEHs/lO7YmE02m0JEBx","EventButton"),cc.Class({extends:cc.Component,properties:{Hint:cc.Label},setInfo:function(t){this.Hint.string=t.hint,this._callback=t.cb,this._closeDialog=t.close},onClick:function(){this._callback&&this._callback(),this._closeDialog()}}),cc._RF.pop()},{}],EventDestroy:[function(t,e,i){"use strict";cc._RF.push(e,"bf3d2yx1xdDZKQEuxNgX+du","EventDestroy"),cc.Class({extends:cc.Component,addEventParam:function(t){this._registeredEventArray||(this._registeredEventArray=[]),this._registeredEventArray.push(t)},onDestroy:function(){this._registeredEventArray&&this._registeredEventArray.forEach(function(t){NAERT.removeCustomEvent(t.name,t.func,t.target)})}}),cc._RF.pop()},{}],EventHover:[function(t,e,i){"use strict";cc._RF.push(e,"c11c6M/2lJN4K1PslvMgoaS","EventHover"),cc.Class({extends:cc.Component,properties:{hoverEvents:[cc.Component.EventHandler]},onLoad:function(){this.node.on(cc.Node.EventType.MOUSE_ENTER,this._onRollOver,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this._onRollOut,this)},_onRollOver:function(){if(!this._hovered){this._hovered=!0;var t=new cc.Event.EventCustom;t.detail={isHoverd:this._hovered},t.target=this.node,cc.Component.EventHandler.emitEvents(this.hoverEvents,t)}},_onRollOut:function(){if(this._hovered){this._hovered=!1;var t=new cc.Event.EventCustom;t.detail={isHoverd:this._hovered},t.target=this.node,cc.Component.EventHandler.emitEvents(this.hoverEvents,t)}}}),cc._RF.pop()},{}],Firebase:[function(t,e,i){"use strict";cc._RF.push(e,"a8ecbg8kYhNwZZXeTLu0wxb","Firebase");var o=null,n=[],s=function(){var t=new Promise(function(t){o?t(o):n.push({resolve:t})});return 1==n.length&&cc.loader.load("https://www.gstatic.com/firebasejs/4.2.0/firebase.js",function(t){if(t)return console.log("firebase error: "+t);o=firebase.initializeApp({apiKey:"AIzaSyAc5PRwmE14gBH5az8TSoqs9aBrQ8YWa4o",authDomain:"fir-test-756e1.firebaseapp.com",databaseURL:"https://fir-test-756e1.firebaseio.com",projectId:"fir-test-756e1",storageBucket:"fir-test-756e1.appspot.com",messagingSenderId:"182531440628"}).database(),n.forEach(function(t){t.resolve(o)}),n.length=0}),t};e.exports={getUID:function(){return 0},record:function(i,o){return new Promise(function(e,t){i?s().then(function(t){e(t.ref(i).push(o).getKey())}):t("none_ref")})},refresh:function(i,o){return new Promise(function(e,t){i?s().then(function(t){t.ref(i).set(o,function(t){e(null==t)})}):t("none ref")})},destroy:function(e){e?s().then(function(t){t.ref(e).remove()}):cc.error("none ref")},remind:function(e,i){e?s().then(function(t){t.ref(e).set(i),t.ref(e).remove()}):cc.error("none ref")},listen:function(e,o){s().then(function(t){t.ref(e).on("value",function(t){var e=t.val(),i=t.numChildren();o(null!=e?{success:!0,data:e,num:i}:{success:!1})})})},check:function(e){return new Promise(function(o){s().then(function(t){t.ref(e).once("value",function(t){var e=t.val(),i=t.numChildren();o(null!=e?{success:!0,data:e,num:i}:{success:!1})})})})},remove:function(e){s().then(function(t){t.ref(e).off()})}},cc._RF.pop()},{}],GoogleLogin:[function(t,e,i){"use strict";cc._RF.push(e,"1a611h0p65NCo14EcDtPH+y","GoogleLogin");t("Firebase");cc.Class({extends:cc.Component,properties:{},onLoad:function(){}}),cc._RF.pop()},{Firebase:"Firebase"}],Heartbeat:[function(t,e,i){"use strict";cc._RF.push(e,"4a6f0wJoQtHC4v60Ja3LxXb","Heartbeat"),cc.Class({extends:cc.Component,properties:{Heart:cc.Node,HeartLabel:cc.Label},onLoad:function(){this.Heart.active=!1,this._pressure=0,this._isEating=!1,this._bgAudioID=cc.audioEngine.play(cc.url.raw("resources/They_Might_Not.mp3"),!0),cc.audioEngine.setVolume(this._bgAudioID,.05)},onStart:function(){this.Heart.active=!0},pressureUp:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;this._pressure<10&&(this._pressure+=t),cc.log("增壓",this._pressure),this.pressureDown()},pressureDown:function(){var e=this;this.unscheduleAllCallbacks(),cc.log("減壓",this._pressure),this.HeartLabel.string=10*this._pressure,this.scheduleOnce(function(t){0<e._pressure&&(e._pressure--,e.pressureDown())},5)},boom:function(){return 10==this._pressure},music:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;cc.audioEngine.setVolume(this._bgAudioID,t)},beat:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;null!=this._beatAudioID&&(cc.audioEngine.stop(this._beatAudioID),this._beatAudioID=null),this._beatAudioID=cc.audioEngine.play(cc.url.raw("resources/heartbeat.mp3"),!1),cc.audioEngine.setVolume(this._beatAudioID,t),this.Heart.stopAllActions(),this.Heart.setScale(1,1),this.Heart.runAction(cc.sequence(cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1),cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1),cc.scaleTo(.2,.8,.8).easing(cc.easeElasticOut()),cc.scaleTo(.3,1,1)))},roar:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;this._isEating||(null!=this._roarAudioID&&(cc.audioEngine.stop(this._roarAudioID),this._roarAudioID=null),this._roarAudioID=cc.audioEngine.play(cc.url.raw("resources/Monster_Alien_Roar_Aggressive.mp3"),!1),cc.audioEngine.setVolume(this._roarAudioID,t))},eating:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;this._isEating=!0,this._roarAudioID,cc.audioEngine.stop(this._roarAudioID),null!=this._eatAudioID&&(cc.audioEngine.stop(this._eatAudioID),this._eatAudioID=null),this._eatAudioID=cc.audioEngine.play(cc.url.raw("resources/Monster_Alien_Grunt_Hiss.mp3"),!1),cc.audioEngine.setVolume(this._eatAudioID,t)},noHeart:function(){this.Heart.active=!1},playMusic:function(t,e){if(t&&0<t.length)return t.indexOf("http")<0&&(t=cc.url.raw(t)),this._bgAudioID=cc.audioEngine.play(t,e),cc.audioEngine.setVolume(this._bgAudioID,100),this._bgAudioID}}),cc._RF.pop()},{}],HintWindow:[function(t,e,i){"use strict";cc._RF.push(e,"f50bb+Ic/9NwZ9oBqnFtump","HintWindow");var o=cc.Enum({NONE:-1,UP_TO_MIDDLE:-1});cc.Class({extends:cc.Component,properties:{Tween:{type:o,default:o.NONE},Hint:cc.Label,EventButton:cc.Node,ButtonLayout:cc.Node},onEnable:function(){switch(this.Tween){case o.UP_TO_MIDDLE:this._tween(this.node,[cc.v2(0,-150),cc.v2(0,0)],[100,255])}},onDisable:function(){this.ButtonLayout.getChildren(cc.Button).forEach(function(t){return t.destroy()})},hint:function(t){this.unschedule(this.close),this.node.active=!0,this.Hint.string=t},print:function(t){this.Hint.string+="\n"+t},button:function(t,e){var i=new cc.instantiate(this.EventButton);i.parent=this.ButtonLayout,i.active=!0,i.getComponent("EventButton").setInfo({hint:t,cb:e,close:this.hide.bind(this)})},interval:function(t){this.scheduleOnce(this.close,t)},hide:function(){this._tween(this.node,[cc.v2(0,0),cc.v2(0,-150)],[255,0]),this.unschedule(this.close),this.interval(.2)},close:function(){this.unschedule(this.close),this.Hint&&(this.Hint.string=""),this.node.active=!1},_tween:function(t,e,i){t.opacity=i[0],t.setPosition(e[0]),t.runAction(cc.spawn(cc.moveTo(.6,e[1]).easing(cc.easeBackOut()),cc.fadeTo(.3,i[1])))}}),cc._RF.pop()},{}],IndexData:[function(t,e,i){"use strict";cc._RF.push(e,"075b8EaHdFAIZIi532HbGNx","IndexData");cc._RF.pop()},{}],ListFolder:[function(t,e,i){"use strict";cc._RF.push(e,"7143fVNo9JFy7EPxyuGnliY","ListFolder");var a=t("Firebase");cc.Class({extends:cc.Component,properties:{Refer:"Boardgame/",Field:"Field/",Prompt:"Prompt",Label:cc.Label,Layout:cc.Node,ListItem:cc.Node,OnTop:!1,Dialog:t("HintWindow"),CheckConditions:[cc.Component.EventHandler],_uniqueid:"",_isUnfold:!1},onLoad:function(){this._viewUniqueid=NAERT.randomUniqueCode(),this._fireData={},this._listData=[],this._checkStatus=!1,this._loaded=!1,this._isUnfold=this.OnTop,NAERT.addListener("NotifyAddNew"+this._viewUniqueid,this.addNewContent.bind(this)),NAERT.addListener("NotifyModify"+this._viewUniqueid,this.editContent.bind(this)),NAERT.addListener("NotifyDelete"+this._viewUniqueid,this.deleteContent.bind(this))},start:function(){var o=this;this.OnTop&&a.check(this.Refer+this.Field).then(function(t){var e=t.success,i=t.data;e?Object.keys(i).forEach(function(t){return o.setUniqueid(t,!0)}):a.record(o.Refer+o.Field,{text:o.Prompt}).then(function(t){return o.setUniqueid(t,!1)})})},foldList:function(t){this._isUnfold=!1,this.Layout.children.forEach(function(t){return t.active=!1}),t&&t()},unfoldList:function(t){this._isUnfold=!0,this.Layout.children.forEach(function(t){return t.active=!0}),t&&t()},addNewContent:function(t){var i=this;if(cc.log(this.node.name),cc.log("add new contetn listitem:",this.ListItem),this.ListItem){var o=this._uniqueid,n=t.detail,s=this.Field+o,c=this.ListItem.getComponent("ListFolder").Field,r="";return new Promise(function(e){a.record(i.Refer+c,{text:n,from:s}).then(function(t){return r=t,i._checkStatus=!1,a.refresh(i.Refer+i.Field+o+"/list/"+r,!1)}).then(function(t){return e(r)})})}},editContent:function(t){var i=this;return new Promise(function(e){a.refresh(i.Refer+i.Field+"/text/",t.detail,i._isUnfold).then(function(t){return e(t)})})},deleteContent:function(){var i=this;return new Promise(function(e){a.check(i.Refer+i._fromPath).then(function(t){t.success?(a.destroy(i.Refer+i.Field+i._uniqueid),a.destroy(i.Refer+i._fromPath+"/list/"+i._uniqueid)):a.destroy(i.Refer+i.Field+i._uniqueid),i.node.destroy(),e(!0)})})},setUniqueid:function(t,e){this.node.active=this._isUnfold=e,this._uniqueid=t,cc.log(this.node.name,"set unique id",t," visible:",this._isUnfold),!this._loaded&&a.listen(this.Refer+this.Field+t,this._showInfo.bind(this)),this._loaded=!0},getUniqueid:function(){return this._uniqueid},checkUniqueid:function(t){return this._uniqueid==t},_showInfo:function(t){var n=this,e=t.success,i=t.data;if(e){if(cc.log(this.Field,"show info:",i),this._fireData=i,this._fromPath=i.from||"",this.Label.string=i.text||"",cc.log("data.list:",i.list),this._listData=i.list||null,!this._listData)return;var s=this.Layout.getChildren();Object.keys(this._listData).map(function(t,e){var i=s[e]||cc.instantiate(n.ListItem),o=i.getComponent("ListFolder");i.parent=n.Layout,o&&o.setUniqueid(t,n._isUnfold)})}},checkContent:function(t){var o=this;this.CheckConditions.every(function(t){return t.target.getComponent(t.component)[t.handler](o._uniqueid)})&&a.check(this.Refer+this._fromPath+"/list/"+this._uniqueid).then(function(t){var e=t.success,i=t.data;e&&(o.node.color=i?cc.Color.YELLOW:cc.Color.GREEN,a.refresh(o.Refer+o._fromPath+"/list/"+o._uniqueid,!i))})},clickOnCheck:function(){this.checkContent()},clickOnFolder:function(){var e=this;cc.log("點擊bar",this._uniqueid,!this._isUnfold),this._isUnfold=!this._isUnfold,this.Layout.children.forEach(function(t){return t.active=e._isUnfold})},clickOnAddNew:function(){this.Dialog.create("NotifyAddNew"+this._viewUniqueid)},clickOnEdit:function(){this.Dialog.edit("NotifyModify"+this._viewUniqueid,this._fireData,this._uniqueid,this._isUnfold)},clickOnDel:function(){cc.log("del",this.Refer+this.Field+this._uniqueid+"/"),cc.log("&",this.Refer+this._fromPath),this.deleteContent()},clickOnBroadcast:function(){a.remind(this.Refer+"remind/",this._listData),cc.log("廣播:",this._listData)},clickOnFixPosition:function(t){var e=cc.director.getScene().children[0];this.node.setPosition(cc.v2(0,0)),this._isUnfold=!this._isUnfold,this._isUnfold?this.node.y=e.height-t.target.convertToWorldSpaceAR(cc.v2(.5*-e.width,0)).y:this.node.y=.5*e.height}}),cc._RF.pop()},{Firebase:"Firebase",HintWindow:"HintWindow"}],LoginDialog:[function(t,e,i){"use strict";cc._RF.push(e,"7530e9W6qJP0LB9jNQc+7Kq","LoginDialog"),cc.Class({extends:t("HintWindow"),properties:{EditBox:cc.EditBox},placeholder:function(t){this.EditBox.node.active=!0,this.EditBox.placeholder=t},close:function(){this.unschedule(this.close),this.Hint.string="",this.EditBox.node.active=!1,this.node.active=!1},login:function(t){this.hint("輸入暱稱"),this.placeholder(t),this.button("加入遊戲",this._login.bind(this))},createRoom:function(t){this.hint("Room name:"),this.button("Create",this._createRoom.bind(this)),this.button("Cancel",this._back.bind(this)),this.placeholder(t)},_login:function(t){NAERT.dispatchCustomEvent("NotifyPlayerLogin",{name:this._getInputData()},this),this.hide()},_createRoom:function(){NAERT.dispatchCustomEvent("NotifyCreateNewRoom",this._getInputData(),this),this.hide()},_back:function(){NAERT.dispatchCustomEvent("NotifyLobbyRoom",null,this),this.hide()},_getInputData:function(){var t=this.EditBox.string.length?this.EditBox.string:this.EditBox.placeholder;return this.EditBox.string="",t}}),cc._RF.pop()},{HintWindow:"HintWindow"}],Pitcher:[function(t,e,i){"use strict";cc._RF.push(e,"95992ff+5hKbJ3lCWJ1Op9k","Pitcher");var o=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)/Math.PI*180},r=function(t,e,i){return i?{x:t.x+1e-4*Math.floor(i*Math.cos(e*Math.PI/180)*1e4),y:t.y+1e-4*Math.floor(i*Math.sin(e*Math.PI/180)*1e4)}:t},s=function(t,e,i,o,n){var s={x:t.x,y:t.y};if(o){for(var c=0;.05<i;)s=r(s,e,i),i=a(i,o),c++;cc.log(c)}if(n)for(;0<n;)s=r(s,e,i),n--;return s},a=function(t,e){return.001<Math.abs(t)?t-=t*e:0},n=function(t,e){var i=Math.abs(t.x-e.x)<=.5*(t.width+e.width),o=Math.abs(t.y-e.y)<=.5*(t.height+e.height);return i&&o};e.exports={prediction:s,angle:o,project:r,retard:a,hit:n,reflectionAngle:function(t,e,i,o){var n=s(t,i,o,0,1);return Math.abs(n.x)>.5*(e.width-t.width)?180-i:Math.abs(n.y)>.5*(e.height-t.height)?-i:i}},cc._RF.pop()},{}],Poker:[function(t,e,i){"use strict";cc._RF.push(e,"62909MpjvZFb6Imcw5QBo3B","Poker");var o=t("Firebase"),s=["3","4","5","6","7","8","9","10","J","Q","K","A","2"],c=["♣","♦","♥","♠"];cc.Class({extends:cc.Component,properties:{},onLoad:function(){this._refName="PokerRefDefaultName",this._libary=[],this._handCards=[]},create:function(){for(var t=s.length,e=c.length,i=parseInt(s[0]),o=0;o<t;o++)for(var n=0;n<e;n++)this._libary.push({worth:o*c.length+n,number:(o+i)%t,pattern:n,surface:c[n]+s[o]})},shuffle:function(){return this._libary.sort(function(){return.5-Math.random()}),this},deal:function(t){for(var e=Math.floor(this._libary.length/t),i=this._libary.length-e*t,o=0;o<t;o++)this._handCards.push(this._libary.splice(0,e));for(var n=0;n<i;n++)this._handCards[n].push(this._libary.shift());return this},save:function(t){t&&(this._refName=t),o.refresh(this._refName,{libary:this._libary,handCards:this._handCards})},clean:function(){o.destroy(this._refName)},sort:function(i){return this._libary.sort(function(t,e){return t[i]-e[i]}),this}}),cc._RF.pop()},{Firebase:"Firebase"}],SimpleMaze:[function(t,e,i){"use strict";cc._RF.push(e,"63215npVdtKs4n28lypXyrZ","SimpleMaze");var s=t("Firebase");cc.Class({extends:cc.Component,properties:{EscapeValue:5,ScoreLabel:cc.Label,PromptLabel:cc.Label,Dooroom:t("DoorRoom"),RoomItem:t("DoorRoomItem"),Heartbeat:t("Heartbeat"),Dialog:t("HintWindow"),LoginDialog:t("HintWindow")},start:function(){this.LoginDialog.login(NAERT.localStorage.getItem("nickname","路人_"+Math.round(100*Math.random()))),NAERT.addListener("NotifyPlayerLogin",this.onStart.bind(this)),this.ScoreLabel.string="",this._axisX=0,this._axisY=0,this._beating=!1},onStart:function(t){var e=this;this._nickname=t.detail.name,NAERT.localStorage.setItem("nickname",this._nickname),this._uniqueid=NAERT.localStorage.getItem("uniqueid",NAERT.randomUniqueCode()),s.refresh(this.Dooroom.Refer+this.Dooroom.Field+"players/"+this._uniqueid,{name:this._nickname,catch:0,pick:0}),this.Heartbeat.onStart(),this.ScoreLabel.string="Score:0",this.addListener(),window.onbeforeunload=this._onbeforeunload.bind(this),this._checkCheat(),this.PromptLabel.string="規則說明：\n向四方移動，逃離地城\n(從出生點開始計算，第6個房間即算成功逃離)\n手指觸碰地板並滑動整個介面並放開，\n可以朝反方向移動\n點擊此處看大地圖與排行榜",this.Dooroom.Mask.opacity=255,s.check(this.Dooroom.getTilePath(0,0,1)).then(function(t){t.success?e.Dooroom.load(0,0,1,4):e.Dooroom.create(0,0,1,4,e._defaultGatesData(),e._defaultFloorsData())})},addListener:function(){var o=this;NAERT.addListener("NotifyUIControlFlip",this._uiControlFlip.bind(this)),NAERT.addListener("NotifyDoorRoomTrap",function(t){o.Dialog.trap(t.detail),o._isTraped=!0}),NAERT.addListener("NotifyHeartbeat",function(t){!o._beating&&s.remind(o.Dooroom.Refer+o.Dooroom.Field+"heartbeat/"+o.Dooroom._tileName(o._axisX,o._axisY,1),!0)}),s.listen(this.Dooroom.Refer+this.Dooroom.Field+"monster/",function(t){var e=t.success,i=t.data;return e&&o.RoomItem.notifyMonster(i)}),s.listen(this.Dooroom.Refer+this.Dooroom.Field+"heartbeat/",function(t){var e=t.success,i=t.data;return e&&o._checkBeat(i)}),s.listen(this.Dooroom.Refer+this.Dooroom.Field+"players/"+this._uniqueid,function(t){var e=t.success,i=t.data;return e&&o.earnScore(i.pick+i.catch)})},getRoomAxis:function(){return[this._axisX,this._axisY]},earnScore:function(t){var e=this.ScoreLabel.node;this.ScoreLabel.string="Score:"+t,e.stopAllActions(),e.setScale(1,1),e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2,2,2).easing(cc.easeElasticOut()),cc.tintTo(.2,255,0,0)),cc.spawn(cc.scaleTo(.3,1,1),cc.tintTo(.3,255,255,255))))},_checkBeat:function(t){var e=this;Object.keys(t).forEach(function(t){t==e.Dooroom._tileName(e._axisX,e._axisY,1)&&e.Heartbeat.beat()}),this._beating=!0,this.scheduleOnce(function(t){return e._beating=!1},1)},_uiControlFlip:function(t){!this._isTraped&&this._onMove(t.detail),this._isTraped=!1},_controlFlip:function(t){switch(t){case UIEnum.Flip.UP:this._axisY++;break;case UIEnum.Flip.LEFT:this._axisX--;break;case UIEnum.Flip.DOWN:this._axisY--;break;case UIEnum.Flip.RIGHT:this._axisX++}},_onMove:function(t){var n=this;if(this.RoomItem.checkPass(t)){if(this.RoomItem.stay(-1),this._controlFlip(t),Math.abs(this._axisX)>this.EscapeValue||Math.abs(this._axisY)>this.EscapeValue)return cc.log(this._axisX,this._axisY,this.EscapeValue),this.Dialog.escape(),void s.check(this.Dooroom.Refer+this.Dooroom.Field+"players/"+this._uniqueid).then(function(t){var e=t.success,i=t.data;if(e){var o=i.pick+i.catch;s.refresh(n.Dooroom.Refer+n.Dooroom.Field+"rank/"+n._uniqueid,{score:o,name:n._nickname})}});this.Dooroom.load(this._axisX,this._axisY,1,(t+2)%4)}},_onbeforeunload:function(){this.RoomItem.stay(-1)},_reloadwebsite:function(){window.location.reload()},_defaultGatesData:function(){return[{exist:!0},{exist:!0},{exist:!0},{exist:!0}]},_defaultFloorsData:function(){return[{exist:!0},{exist:!0},{exist:!0},{exist:!0},{exist:!0},{exist:!0},{exist:!0},{exist:!0},{exist:!0}]},_checkCheat:function(){t("querystring").parse(window.location.search.substring(1),"&","=").monster&&s.refresh(this.Dooroom.Refer+this.Dooroom.Field+"monster/",this._uniqueid)},clickOnMonster:function(){s.refresh(this.Dooroom.Refer+this.Dooroom.Field+"monster/",this._uniqueid)}}),cc._RF.pop()},{DoorRoom:"DoorRoom",DoorRoomItem:"DoorRoomItem",Firebase:"Firebase",Heartbeat:"Heartbeat",HintWindow:"HintWindow",querystring:3}],SmokeEffect:[function(t,e,i){"use strict";cc._RF.push(e,"bf641qL32lFx63+BJfkmRkI","SmokeEffect"),cc.Class({extends:cc.Component,properties:{Unit:cc.Node},onLoad:function(){},onEnable:function(){for(var t=this.node.children,e=0;e<30;e++){var i=t[e]||cc.instantiate(this.Unit);i.parent=this.node,this.floating(i)}},floating:function(t){t.stopAllActions();var e=.2*Math.round(10*Math.random()),i=Math.round(50*Math.random())-25,o=Math.round(70*Math.random()),n=Math.round(10*Math.random());t.setPosition(i,50*Math.random()-25),t.active=!0,t.opacity=120,t.setScale(e,e),t.runAction(cc.spawn(cc.moveTo(n,t.x,t.y+o),cc.sequence(cc.moveTo(.8*n,t.x+i,t.y).easing(cc.easeElasticOut()),cc.fadeTo(.2*n,0),cc.callFunc(this.floating.bind(this,t)))))}}),cc._RF.pop()},{}],Test:[function(t,e,i){"use strict";cc._RF.push(e,"1d098oefGJP4bUgekTyGj3f","Test"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},onClick:function(){cc.log("hi")}}),cc._RF.pop()},{}],Throw:[function(t,e,i){"use strict";cc._RF.push(e,"1cec8gXqW5HSK644uUQcF5o","Throw");var c=function(t,e,i){return i?{x:t.x+1e-4*Math.floor(i*Math.cos(e*Math.PI/180)*1e4),y:t.y+1e-4*Math.floor(i*Math.sin(e*Math.PI/180)*1e4)}:t},r=function(t,e){return.001<Math.abs(t)?t-=t*e:0};e.exports={prediction:function(t,e,i,o){for(var n={x:t.x,y:t.y},s=0;.05<i;)n=c(n,e,i),i=r(i,o),s++;return cc.log(s),n},angle:function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)/Math.PI*180},project:c,retard:r},cc._RF.pop()},{}],TrapHint:[function(t,e,i){"use strict";cc._RF.push(e,"a6021cuLCBF4JYB4PHEGN2j","TrapHint");t("Firebase");cc.Class({extends:t("HintWindow"),properties:{Icons:[cc.Node]},onEnable:function(){this.EventButton.active=!1,this.ButtonLayout.getChildren(cc.Button).forEach(function(t){return t.destroy()}),this._tween(this.node,[cc.v2(0,-5),cc.v2(0,0)],[0,255])},trap:function(){this.hint("不小心掉進洞裡了！"),this.ButtonLayout.getChildren(cc.Button).forEach(function(t){return t.destroy()}),this.button("爬出來",this._traped.bind(this)),this.Icons.forEach(function(t){return t.active=!1}),this.Icons[0].active=!0},catched:function(){this.hint("你被抓到了！"),this.ButtonLayout.getChildren(cc.Button).forEach(function(t){return t.destroy()}),this.button("重新再來",this._reloadwebsite.bind(this)),this.Icons.forEach(function(t){return t.active=!1}),this.Icons[1].active=!0},escape:function(){this.hint("成功脫逃！"),this.ButtonLayout.getChildren(cc.Button).forEach(function(t){return t.destroy()}),this.button("再玩一次",this._reloadwebsite.bind(this)),this.Icons.forEach(function(t){return t.active=!1}),this.Icons[2].active=!0},_traped:function(){NAERT.dispatchCustomEvent("NotifyTraped","ok",this),this.hide()},_reloadwebsite:function(){window.location.reload()}}),cc._RF.pop()},{Firebase:"Firebase",HintWindow:"HintWindow"}]},{},["ControlFlip","ControlFoldList","ControlMain","Firebase","IndexData","Dice","EventButton","EventDestroy","EventHover","GoogleLogin","HintWindow","ListFolder","Pitcher","Poker","Throw","DoorRoom","DoorRoomItem","DoorRoomMap","DoorRoomMazeItem","Heartbeat","SimpleMaze","Test","TrapHint","LoginDialog","SmokeEffect"]);