window.addEventListener("load",AddListeners)
function AddListeners(){
  document.getElementById("btnSubmit").disabled = true
  document.getElementById("btnSubmit").addEventListener("click",Check)
  document.getElementById("txtInput").addEventListener("input",Vis)
}

function Check(){
  var input = document.getElementById("txtInput").value
  input = parseFloat(input)
  //Integer check
  if (input%1 == 0){
    document.getElementById("lblresult2").innerText = "integer, "
  }
  else { 
    document.getElementById("lblresult2").innerText = "not integer, "
  }
  
  //num check
  if (input < 6){
    document.getElementById("lblerror").innerText = "Error enter a number from 6-20."
  }
  else if (input > 20){
    document.getElementById("lblerror").innerText = "Error enter a number from 6-20."
  }
  else{
    document.getElementById("lblerror").innerText = ""
    Multiple()
  }
  
}

function Multiple(){
  var n = 0
  var input = document.getElementById("txtInput").value
  var result2 = document.getElementById("lblresult2").value
  var ans = String(input)
  input = parseInt(input)
  
  //ODD OR EVEN CHECK
  if (input % 2 == 0){
    document.getElementById("lblresult3").innerText = "Even"
  }else {
    alert("l")
    document.getElementById("lblresult").innerText = "Odd"
  }
  
  //MULTIPLES OF TWO
  while (n < 4){
    input = input * 2
    ans = ans + "," + " " +String(input);
    n = n + 1
  }
  document.getElementById("lblresult1").innerText = ans
}

function Vis(){
  document.getElementById("btnSubmit").disabled = false
}