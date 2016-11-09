var resource=["fish1","fish2","fish3","fish4","fish5","bottom","cannon1","cannon2","cannon3","cannon4","cannon5","cannon6","cannon7","bullet","coinAni1","coinAni2","web"];
var FISH_SIZE=[null,{w:55,h:37,collR:17},{w:78,h:64,collR:24},{w:72,h:56,collR:20},{w:77,h:59,collR:22},{w:107,h:122,collR:29}];function Fish(type){this.type=type;this.x=0;this.y=0;this.cur=0;this.rotate=0;this.iSpeed=1;this.collR=FISH_SIZE[this.type].collR;this.move()}Fish.prototype.draw=function(gd){var w=FISH_SIZE[this.type].w;var h=FISH_SIZE[this.type].h;gd.save();gd.translate(this.x,this.y);gd.rotate(d2a(this.rotate));if(this.rotate>90&&this.rotate<270){gd.scale(1,-1)}gd.drawImage(JSON["fish"+this.type],0,h*this.cur,w,h,-w/2,-h/2,w,h);gd.restore()};Fish.prototype.move=function(){var _this=this;setInterval(function(){_this.x+=Math.cos(d2a(_this.rotate))*_this.iSpeed;_this.y+=Math.sin(d2a(_this.rotate))*_this.iSpeed},16);setInterval(function(){_this.cur++;if(_this.cur==4){_this.cur=0}},200)};Fish.prototype.isIn=function(x,y){var a=this.x-x;var b=this.y-y;var c=Math.sqrt(a*a+b*b);if(c<this.collR){return true}else{return false}};
function DieFish(type){this.type=type;this.x=0;this.y=0;this.rotate=0;this.cur=0;this.move()}DieFish.prototype.draw=function(gd){var w=FISH_SIZE[this.type].w;var h=FISH_SIZE[this.type].h;gd.save();gd.translate(this.x,this.y);gd.rotate(d2a(this.rotate));if(this.rotate>90&&this.rotate<270){gd.scale(1,-1)}gd.drawImage(JSON["fish"+this.type],0,h*(this.cur+4),w,h,-w/2,-h/2,w,h);gd.restore()};DieFish.prototype.move=function(){var _this=this;setInterval(function(){_this.cur++;if(_this.cur==4){_this.cur=0}},200)};
function Coin(type){this.type=type;this.x=0;this.y=0;this.cur=0;this.move()}Coin.prototype.draw=function(gd){gd.save();gd.translate(this.x,this.y);if(this.type==1||this.type==2){gd.drawImage(JSON["coinAni1"],0,this.cur*60,60,60,-30,-30,60,60)}else{if(this.type==3||this.type==4||this.type==5){gd.drawImage(JSON["coinAni2"],0,this.cur*60,60,60,-30,-30,60,60)}}gd.restore()};Coin.prototype.move=function(){var _this=this;setInterval(function(){_this.x+=(-50-_this.x)/10;_this.y+=(650-_this.y)/10;_this.cur++;if(_this.cur==10){_this.cur=0}},30)};
function rnd(m,n){return Math.floor(m+Math.random()*(n-m))}function d2a(n){return n*Math.PI/180}function a2d(n){return n*180/Math.PI}var JSON={};function loadImage(arr,fnSucc){var count=0;for(var i=0;i<arr.length;i++){var oImg=new Image();(function(index){oImg.onload=function(){JSON[arr[index]]=this;count++;if(count==arr.length){fnSucc&&fnSucc()}}})(i);oImg.src="img1/"+arr[i]+".png";oImg.style.width="100%";oImg.style.height="100%"}};
var BULLET_SIZE=[null,{x:86,y:0,w:24,h:26},{x:62,y:0,w:25,h:29},{x:30,y:0,w:31,h:35},{x:32,y:35,w:27,h:31},{x:30,y:82,w:29,h:33},{x:0,y:82,w:30,h:34},{x:0,y:0,w:30,h:44}];function Bullet(type){this.type=type;this.x=0;this.y=0;this.rotate=0;this.iSpeed=this.type*5;this.move()}Bullet.prototype.draw=function(gd){var x=BULLET_SIZE[this.type].x;var y=BULLET_SIZE[this.type].y;var w=BULLET_SIZE[this.type].w;var h=BULLET_SIZE[this.type].h;gd.save();gd.translate(this.x,this.y);gd.rotate(d2a(this.rotate));gd.drawImage(JSON["bullet"],x,y,w,h,-w/2,-h/2,w,h);gd.restore()};Bullet.prototype.move=function(){var _this=this;setInterval(function(){_this.x+=Math.sin(d2a(_this.rotate))*_this.iSpeed;_this.y-=Math.cos(d2a(_this.rotate))*_this.iSpeed},30)};
var CANNON_SIZE=[null,{w:74,h:74},{w:74,h:76},{w:74,h:76},{w:74,h:83},{w:74,h:85},{w:74,h:90},{w:74,h:94}];function Cannon(type){this.type=type;this.x=631;this.y=638;this.cur=0;this.rotate=0;this.timer=null}Cannon.prototype.draw=function(gd){var w=CANNON_SIZE[this.type].w;var h=CANNON_SIZE[this.type].h;gd.save();gd.translate(this.x,this.y);gd.rotate(d2a(this.rotate));gd.drawImage(JSON["cannon"+this.type],0,h*this.cur,w,h,-w/2,-h/2,w,h);gd.restore()};Cannon.prototype.emitChange=function(){var _this=this;clearInterval(_this.timer);this.timer=setInterval(function(){_this.cur++;if(_this.cur==5){_this.cur=0;clearInterval(_this.timer)}},30)};
function Web(){this.x=0;this.y=0;this.scale=1}Web.prototype.draw=function(gd){gd.save();gd.translate(this.x,this.y);gd.scale(this.scale,this.scale);gd.drawImage(JSON["web"],22,22,200,200,-100,-100,200,200);gd.restore()};