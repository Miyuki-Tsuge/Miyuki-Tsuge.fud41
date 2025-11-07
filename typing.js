'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const arrayOfWord = [
  "ornaments",
  "present",
  "stocking",
  "carol",
  "bells",
  "snowman",
  "reindeer",
  "chimney",
  "holiday",
  "turkey"
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

function setWord() {
  if(typedError === false) {
    if(arrayOfWord.length !== 10){
      i += 1;
    }
  }

  let key = Math.floor(Math.random() * arrayOfWord.length);
  let word = arrayOfWord[key];
  arrayOfWord.splice(key, 1);
  
  document.getElementById("typed").textContent = "";
  document.getElementById("remained").textContent = word;
  document.getElementById("typedText").value = "";
  document.getElementById("supportMessage").textContent = "🎉".repeat(Math.floor(i / 2));
  document.getElementById("chrissmassTreeImg").src=arrayOfImg[i];
  
  typedError = false;
}

setWord();

function confirmText(){
  let typedStr = document.getElementById("typedText").value;
  let typedLastWord = typedStr.slice(typedStr.length -1);
  let compareFirstWord = document.getElementById("remained").textContent.slice(0, 1);
  if (compareFirstWord === typedLastWord) {
    document.getElementById("typed").textContent += typedLastWord;
    document.getElementById("remained").textContent = document.getElementById("remained").textContent.slice(1);
    if(document.getElementById("remained").textContent.length === 0) {
      if(arrayOfWord.length > 0) {
        setWord();
      } else {
        document.getElementById("typingArea").style.visibility = "hidden";
        document.getElementById("textArea").style.visibility = "hidden";
        document.getElementById("retry").style.visibility = "";
        if(i === 9) {
          document.getElementById("supportMessage").textContent = "完成！🎁🎁🎁🎁🎁";
          document.getElementById("chrissmassTreeImg").src = "christmasTree4.png";
        } else {
          document.getElementById("supportMessage").textContent = "";
          document.getElementById("retryMessage").style.visibility = "";
        }
      }
    }
  } else {
    if(typedError === false) {
      typedError = true;
    }
  }
}

const targetconfirmText = document.getElementById("typedText");
targetconfirmText.addEventListener("input", confirmText);

function retry() {
  window.location.reload();
}

const targetRetry = document.getElementById("retry");
targetRetry.addEventListener("click", retry);
