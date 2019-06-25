console.log('keys.js');

var keys = {
  'W' : 87,
  'A' : 65,
  'S' : 83,
  'D' : 68,
  'up' : 38,
  'down' : 40,
  'left' : 37,
  'right' : 39 
};

var keyDown = {};

var setKey = function(keyCode){
  keyDown[keyCode] = true;
};

var clearKey = function(keyCode){
  keyDown[keyCode] = false;
};

var isKeyDown = function(keyName){
  return keyDown[keys[keyName]] == true;
};


window.onload = function(){
 
  window.onkeydown = function(e){
    setKey(e.keyCode);

  };

  window.onkeyup = function(e){
  	clearKey(e.keyCode);
  };


}
