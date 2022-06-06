const xorConst = "CHANGE ME TO YOUR OWN RANDOM STRING";
const items = ["level", "money", "emf", "flashlight", "camera", "lighter", "candle",
               "uvflashlight", "crucifix", "dslrcamera", "evprecorder", "salt",
               "sage", "tripod", "strongflashlight", "motionsensor", "soundsensor",
               "sanitypills", "thermometer", "ghostwriting", "irlightsensor",
               "parabolicmicrophone", "glowstick", "headmountedcamera"];
let saveFileClearJson = "";


//Browse function for the save file 
async function loadSaveFile(file) {
  let saveFileText = await file.text();  
  saveFileToJson(saveFileText);
  document.getElementById("output").innerHTML = JSON.stringify(saveFileClearJson);
  document.getElementById("download").disabled = false;
  var inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }
}

//Decrypt the uploaded save file
function saveFileToJson(text) {
  let saveFileJson = "";
  for (let i = 0; i < text.length; i++) {
    saveFileJson += String.fromCharCode(text.charCodeAt(i) ^ xorConst.charCodeAt(i % xorConst.length));
  }
  saveFileClearJson = JSON.parse(JSON.stringify(JSON.parse(saveFileJson), null, 2));
}

//Encrypt and prepare the download
function JsonToSaveFile() {
  text = document.getElementById("output").innerHTML;
  let saveFile = "";
  for(let i = 0; i < text.length; i++) {
    saveFile += String.fromCharCode(text.charCodeAt(i) ^ xorConst.charCodeAt(i % xorConst.length));
  }
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(saveFile));
  element.setAttribute("download", "saveData.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

//Set the item value to the save file
function inputChange(element) {
  var itemValue = document.getElementById(element.id).value;
  alert(itemValue);
  if(element.id === "level") {
    saveFileClearJson.IntData[items.indexOf(element.id)].Value = JSON.parse('"'+itemValue*100+'"');
  } else {
    saveFileClearJson.IntData[items.indexOf(element.id)].Value = JSON.parse('"'+itemValue+'"');
  }
  document.getElementById("output").innerHTML = JSON.stringify(saveFileClearJson);
}