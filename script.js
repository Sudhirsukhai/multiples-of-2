window.addEventListener("load",AddListeners)

function AddListeners(){
  document.getElementById("btnSubmit").addEventListener("click",Check)
}

function Check(){
  var input = document.getElementById("txtInput").value
  while (input == ""("txtInput").value
  while (input == ""){){
    
  
  if (input < 6 || input > 20){
    document.getElementById("lblerror").innerText = "Error enter a number from 6-20."
  }
  Multiple()
}

function Multiple(){
  var n = 0
  var input = document.getElementById("txtInput").value
  var ans = String(input)
  input = parseInt(input)
  
  //ODD OR EVEN CHECK
  if (input % 2 == 0){
    document.getElementById("lblresult2").innerText = "Even"
  }else if (input % 2 == 1){
    document.getElementById("lblresult2").innerText = "Odd"
  }
  
  //MULTIPLES OF TWO
  while (n < 4){
    input = input * 2
    ans = ans + "," + " " +String(input);
    n = n + 1
  }
  document.getElementById("lblresult1").innerText = ans
  
}