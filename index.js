function takeANumber(cLOP, newPersonName){
  cLOP.push(newPersonName);
  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + cLOP.length + " in line."
  return welcomeMessage;
}
