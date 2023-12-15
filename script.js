window.addEventListener("load",AddListeners)

function AddListeners(){
  document.getElementById("btnSubmit").addEventListener("click",Check)
}

function Check(){
  var input = document.getElementById("txtInput").value
  while (input < 6 || input > 20){
    alert("Error enter a number from 6-20.")
  }
  Multiple()
}

function Multiple(){
  var n = 0
  var input = document.getElementById("txtInput").value
  var ans = String(input)
  input = parseInt(input)
  while (n < 4){
    input = input * 2
    ans = ans + "," + " " +String(input);
    n = n + 1
  }
  document.getElementById("lblresult").innerText = ans
}