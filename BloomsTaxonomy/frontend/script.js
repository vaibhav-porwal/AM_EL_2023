var lev = "bt1"
var url1 = "http://localhost:5000/level?id=" + lev;

lev = "bt2"
url2 = "http://localhost:5000/level?id=" + lev;

lev = "bt3"
url3 = "http://localhost:5000/level?id=" + lev;

lev = "bt4"
url4 = "http://localhost:5000/level?id=" + lev;

lev = "bt5"
url5 = "http://localhost:5000/level?id=" + lev;

lev = "bt6"
url6 = "http://localhost:5000/level?id=" + lev;

async function getapi(url) {
    
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  // console.log(data);
  // show(data);
  return data
}
var bt,bt1,bt2,bt3,bt4,bt5,bt6;
(async()=>
{ bt1=await getapi(url1);
  bt2=await getapi(url2); 
  bt3=await getapi(url3);
  bt4=await getapi(url4);
  bt5=await getapi(url5);
  bt6=await getapi(url6);
})().then(()=>{bt = { bt1: bt1, bt2: bt2, bt3: bt3, bt4: bt4, bt5: bt5, bt6: bt6 };
prin()})
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// sleep(2000).then(() => { console.log("World!"); });


function searchWordPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13 || e.keyCode == 32) {
    document.getElementById("wordSubmit").click();
    return false;
  }
  return true;
}
function wordToLevel() {
  const wordToLevel = document.getElementById("wordToLevel");
  let bool = false;
  const word = document.getElementById("word").value;
  for (const [key, value] of Object.entries(bt)) {
    if (value.includes(word)) {
      wordToLevel.innerHTML =
        key.slice(0, 2).toUpperCase() + "-" + key.slice(2, 3);
      bool = true;
    }
  }
  if (!bool) {
    wordToLevel.innerHTML = "Not found. Please enter the exact word";
  }
}
function searchLevelPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13 || e.keyCode == 32) {
    document.getElementById("levelSubmit").click();
    return false;
  }
  return true;
}
function levelToWord() {
  const levelToWord = document.getElementById("levelToWord");
  let bool = false;
  const level = document.getElementById("level").value.toLowerCase();
  for (const [key, value] of Object.entries(bt)) {
    if (key == level) {
      levelToWord.innerHTML = "";
      levelToWord.classList.remove("display");
      for (const word of value) {
        const node = document.createElement("span");
        const textnode = document.createTextNode(word);
        node.appendChild(textnode);
        node.classList.add("display");
        document.getElementById("levelToWord").appendChild(node);
      }
      bool = true;
    }
  }
  if (!bool) {
    levelToWord.innerHTML =
      "Not found. Please enter the level in the form of bt1,bt2...bt6";
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(element);
    cell.appendChild(text);
  }
}
function prin(){
  for (const [key, value] of Object.entries(bt))
{
  generateTable(document.getElementById(key),value)
}
}
// 

// console.log(bt1)
function handleForm(event) { event.preventDefault(); } 
var form=document.getElementById("insert");
form.addEventListener('submit', (event) => {
  
  
});
function insertword(){
  let lv1=document.getElementById("ins-level").value;
  let wd1=document.getElementById("ins-word").value;
  fetch('http://localhost:5000/insert?level='+lv1+'&word='+wd1, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
return true;
}
function deletword(){
  let lv1=document.getElementById("del-level").value;
  let wd1=document.getElementById("del-word").value;
  fetch('http://localhost:5000/del?level='+lv1+'&word='+wd1, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
return true;
}
function copyText1() {
  var copyText = document.getElementById("wordToLevel").innerHTML;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      document.getElementById("tooltiptext").style.visibility = "visible";
      setTimeout(() => { document.getElementById("tooltiptext").style.visibility = "hidden"; }, 3000);
    })
    .catch(() => {
      alert("something went wrong");
    });
}