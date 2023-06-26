function droidGenerator() {
  
let alfabeto =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 'U', 'V', 'W', 'X', 'Y', 'Z'];

let alfabetoOrdenado = [...alfabeto].sort(randomizeLetters);

  
let randomNumber = Math.floor(Math.random() * 1000);
  
let sortearAlfabeto = alfabetoOrdenado.splice(0,2).join("");

  alert("Droid name Generated: " + sortearAlfabeto + "-" + randomNumber);
  console.log("Droid name Generated: " + sortearAlfabeto + "-" + randomNumber);
}

  function randomizeLetters() {  
    
  return 0.5 - Math.random();
}  
