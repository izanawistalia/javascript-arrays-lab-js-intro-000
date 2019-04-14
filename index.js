 //define your array here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.shift(name);
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
