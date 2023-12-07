var elInp = document.querySelector(".inp")
var elList = document.querySelector(".list")
var arr = ["lasetti","Captiva","damas","BYD","hunday","Kia"]
function fnEnter(){
    for(var i = 0; i < arr.length; i++){
        if(elInp.value == "katta" && arr[i].toLowerCase() != arr[i]){
            var newLi = document.createElement("li")
            newLi.textContent = arr[i]
            elList.appendChild(newLi)
        }
        if(elInp.value == "kichik" && arr[i].toLowerCase() == arr[i]){
            var newLi = document.createElement("li")
            newLi.textContent = arr[i]
            elList.appendChild(newLi)
        }
    }
    elInp.value = ""
}




