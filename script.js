var eventsArr = []
 
 const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ])

gameEvents.forEach(logValues);;


function logValues(value){
  eventsArr.push(value)
}

var uniqueArr = eventsArr.filter((c, index) => {
    return eventsArr.indexOf(c) === index;
});

console.log(uniqueArr,"\n")

//2

var unfairEvent = gameEvents.delete(64);

//3

gameEvents.forEach(avarageEvents);

function avarageEvents(value,key){
     if(key % 9 == 0){
        console.log(`${key} ${value} - An event happened, on average, every 9 minutes`);
     }
     else{
         console.log(`${key} ${value}`)
     }
}

console.log("\n")

//4

gameEvents.forEach(logEvents);

function logEvents(value,key) {
  if(key <45){
    console.log(`${key}m - ${value} - First half`);
  }
  else{
    console.log(`${key}m - ${value} - Second half`);
  }
}