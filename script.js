window.addEventListener("load",AddListeners)

function AddListeners(){
  document.getElementById("btnSubmit").addEventListener("click",Multiple)
}

function Multiple(){
  var n = 0
  var input = document.getElementById("txtInput").value
  var ans = ""
  input = parseInt(input)
  while (n < 5){
    input = input * 2
    ans = ans + String(input)+ "," + " ";
    n = n + 1
  }
  document.getElementById("lblresult").innerText = ans
}