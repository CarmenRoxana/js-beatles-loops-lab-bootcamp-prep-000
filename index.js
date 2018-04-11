function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  
  for(let i=0;i<musicians.length;i++){
    empty.push(`{musicians[i]} plays {instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts){
  let i=0;
  let newFacts=[];
  while(i<facts.length) {
   newFacts.push();
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var empty= [];
  do{
    empty.push("I love the Beatles!");
    n++;
  }while(n<15);
  return empty;
}