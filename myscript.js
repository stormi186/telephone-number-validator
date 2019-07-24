var convertButton = document.getElementById("check");

function telephoneCheck(str) {
  var areaRegex = /^1(?=\s)|^1(?=\()/;
  if (str[0] == 1 && !areaRegex.test(str)) {
    return false;
  }
  if (/\(/.test(str) && !(/\)/.test(str))) {
    return false;
  }
  if (/\)/.test(str) && !(/\(/.test(str))){
    return false;
  }
  if (/^\(/.test(str) && str[4]!=")"){
    return false;
  }
  if (/\?/.test(str)) {
    return false;
  }
  
  var newNum = str.replace(/\W/g, "");

  if(str[0]==1 && newNum.length==11) {
    return true;
  }
  else if(newNum.length==10) {
    return true;
  }
  else {
    return false;
  }
}

convertButton.addEventListener("click", function() {
  var number = document.getElementById("text").value;
  if(telephoneCheck(number)){
    document.getElementById('converted-number').innerHTML = "Telefonnummer er et US nummer";
  }
  else {
    document.getElementById('converted-number').innerHTML = "Telefonnummer er ikke et US nummer";
  }
});

