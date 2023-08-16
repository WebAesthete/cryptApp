const leftTextArea=document.querySelector("#leftTextArea")
const rightTextArea=document.querySelector("#rightTextArea");
const encodeButton=document.querySelector("#encodeButton");  //şifreleme
const decodeButton=document.querySelector("#decodeButton");  //çözme
const cleanButton=document.querySelector("#cleanButton");


runEventsListener();
function runEventsListener(){
encodeButton.addEventListener("click",encode);
decodeButton.addEventListener("click",decode);
cleanButton.addEventListener("click",clean)

}

function encode(){
    if(leftTextArea.value==""){
        alert("lütfen değer giriniz");
        return;
    }
    rightTextArea.value = btoa(leftTextArea.value)  //btoa metodu girdiğimiz şifreyi kriptolamaya yarıyor  //atob ise kriptolanan şifreyi çözmeye yarıyor
    leftTextArea.value=""
}

function decode(){
      leftTextArea.value=atob(rightTextArea.value);
      rightTextArea.value=""
}

function clean(){
    leftTextArea.value="";
    rightTextArea.value="";
}