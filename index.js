function takeANumber(cLOP, newPersonName){
  cLOP.push(newPersonName);
  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + cLOP.length + " in line."
  return welcomeMessage;
}

funcion nowServing(cLOP){
var firstPerson = cLOP[0];
cLOP.shift(firstPerson);
if (cLOP.length === 0){return "There is nobody waiting to be served!"}
else {return firstPerson}
}
