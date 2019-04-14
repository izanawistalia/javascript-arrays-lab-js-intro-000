var kittens = ['Milo','Otis','Garfield']; //define your array here
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
  return (var narr = kittens.concat(name))
}
function prependKitten(name){
  var narr = [...kittens, name]
  return narr;
}
