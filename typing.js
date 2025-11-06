'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const arrayOfCurrentWord = [
  "JavaScript",
  "array",
  "object",
  "function",
  "undefined",
  "typeof",
  "map",
  "Boolean",
  "length",
  "splice"
]

const arrayOfSupportMessage = [
  "",
  "",
  "🎉",
  "🎉",
  "🎉🎉",
  "🎉🎉",
  "🎉🎉🎉",
  "🎉🎉🎉",
  "🎉🎉🎉🎉",
  "🎉🎉🎉🎉",
]

const arrayOfImg = [
  "christmasTree0.png",
  "christmasTree0.png",
  "christmasTree1.png",
  "christmasTree1.png",
  "christmasTree1.png",
  "christmasTree2.png",
  "christmasTree2.png",
  "christmasTree2.png",
  "christmasTree3.png",
  "christmasTree3.png"
]

let i = 0;
let typedError = false;

function setQuestion () {
  let key = Math.floor(Math.random() * arrayOfCurrentWord.length);
  let currentText = arrayOfCurrentWord[key];
  
  arrayOfCurrentWord.splice(key, 1);
  
  document.getElementById("typed").textContent = "";
  document.getElementById("remained").textContent = currentText;
  document.getElementById("typedText").value = "";
  document.getElementById("supportMessage").textContent = arrayOfSupportMessage[i];
  document.getElementById("chrissmassTreeImg").src=arrayOfImg[i];
  
  if(typedError === false) {
    i += 1;
  }
  
  typedError = false;
}

setQuestion();

function confirmText(){
  let typedStr = document.getElementById("typedText").value;
  let typedLastWord = typedStr.slice(typedStr.length -1);
  let compareFirstWord = document.getElementById("remained").textContent.slice(0, 1);

  if (compareFirstWord === typedLastWord) {

    document.getElementById("typed").textContent += typedLastWord;
    document.getElementById("remained").textContent = document.getElementById("remained").textContent.slice(1);

    if(document.getElementById("remained").textContent.length === 0) {
      if(arrayOfCurrentWord.length === 0) {
        document.getElementById("typingArea").style.visibility = "hidden";
        document.getElementById("textArea").style.visibility = "hidden";
        document.getElementById("retry").style.visibility = "";
        if(i === 10) {
          document.getElementById("supportMessage").textContent = "Finish!" + "🎁".repeat(5);
          document.getElementById("chrissmassTreeImg").src = "christmasTree4.png";
        } else {
          document.getElementById("supportMessage").textContent = "";
          document.getElementById("retryMessage").style.visibility = "";
        }

      } else {
        setQuestion();
      }
    }
  } else {
    typedError = true;
  }
}

const targetconfirmText = document.getElementById("typedText");
targetconfirmText.addEventListener("input", confirmText);


function retry() {
  window.location.reload();
}

const targetRetry = document.getElementById("retry");
targetRetry.addEventListener("click", retry);
