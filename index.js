 //define your array here
function destructivelyAppendKitten(){
  kittens.push('Ralph');
}
function destructivelyPrependKitten(){
  kittens.shift('Ralph');
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.unshift();
}
function appendKitten(name){
   var narr = kittens.concat(name)
   return narr;
}
function prependKitten(name){
  var narr = [...kittens, name]
  return narr;
}
var kittens = ['Milo','Otis','Garfield'];