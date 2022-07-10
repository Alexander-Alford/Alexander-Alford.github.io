var homeButtons = ["but_about", "but_proj", "but_exper", "but_res", "but_git", "but_linkin"];
var aboutButtons = ["goback_about"];
var projButtons = ["but_ecomproj", "but_tortproj", "but_atomproj", "but_gameproj", "goback_proj"];
var gameprojButtons = ["goback_gameproj"];
var ecomprojButtons = ["goback_ecomproj", "ecom-proj-link"];
var turtprojButtons = ["tort-proj-link", "goback_tortproj"];
var atomprojButtons = ["goback_atomproj"];
var experienceButtons = ["national-university-but", "goback_experience"];

var currentSection = "greet_box"

//var firstFocusableElement = homeButtons[0];
//var lastFocusableElement = homeButtons[5];
var currentButtonList = homeButtons;

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  console.log(currentButtonList[currentButtonList.length - 1]);

  //Fix for if there is only one button in the list.
  if(currentButtonList.length === 1){
    console.log("test");
    if(document.activeElement.id === currentButtonList[0])
    {
      console.log("blur 2");
      document.getElementById(currentButtonList[0]).blur();
      e.preventDefault();
    }
    else{
      document.getElementById(currentButtonList[0]).focus();
      console
      console.log("focus");
      e.preventDefault();
    }
    return;
  }

  //If shift + tab is pressed.
  if (e.shiftKey) { 
    if (document.activeElement.id === currentButtonList[0]) {
      document.getElementById(currentButtonList[0]).blur();
      e.preventDefault();
    }
  } 
  //If tab key alone is pressed.
  else {
      console.log(document.activeElement.id, currentButtonList, currentButtonList.length) ;
    if (document.activeElement.id === currentButtonList[currentButtonList.length - 1]) { 
      console.log("blur")
      document.getElementById(currentButtonList[currentButtonList.length - 1]).blur();
      e.preventDefault();
    }
  }
});



function openSec(open, butList){
  oElem = document.getElementById(open);
  cElem = document.getElementById(currentSection);

  cElem.style.opacity = 0;
  cElem.style.position = "absolute";
  cElem.style.transition = "opacity 1s";
  oElem.style.position = "static";
  oElem.style.opacity = 1;

  currentSection = open;  
  disableFocusForAll();
  enableNormalFocusOnElements(butList);
}

function embedHtml(html, width, height, target){
  const embed = document.createElement("iframe");

  embed.setAttribute("src", html);
  embed.setAttribute("width", width);
  embed.setAttribute("height", height);

  document.getElementById(target).appendChild(embed);
}

function clearElem(id){
  document.getElementById(id).innerHTML = "";
}

function atomClose(){
  if(document.getElementById('atom_embed') != null)
    {
    clearElem('atom_embed');
    }
}

function atomOpen(){
  embedHtml('atom.html', 600, 600, 'atom_embed');
}

function enableNormalFocusOnElements(id_list){
  id_list.forEach(function(elem){ document.getElementById(elem).tabIndex = 0; });
  //firstFocusableElement = id_list[0];
  //lastFocusableElement = id_list[id_list.length - 1];
  currentButtonList = id_list;
  //console.log(firstFocusableElement, lastFocusableElement);
}

function disableFocusForAll(){
  let all = homeButtons.concat(projButtons)
                        .concat(aboutButtons)
                        .concat(gameprojButtons)
                        .concat(ecomprojButtons)
                        .concat(turtprojButtons)
                        .concat(atomprojButtons);
  all.forEach(function(elem){ document.getElementById(elem).tabIndex = -1; });
}


//Button setup.
  //Home
document.getElementById(homeButtons[0]).onclick = function () { openSec("aboutme", aboutButtons); };
document.getElementById(homeButtons[1]).onclick = function () { openSec("projects", projButtons); };
document.getElementById(homeButtons[2]).onclick = function () { openSec("experience", experienceButtons); };
  //About Me
document.getElementById(aboutButtons[0]).onclick = function () { openSec("greet_box", homeButtons); };
  //Projects
document.getElementById(projButtons[0]).onclick = function () { openSec("ecomproj", ecomprojButtons); };
document.getElementById(projButtons[1]).onclick = function () { openSec("tortfolio", turtprojButtons); };
document.getElementById(projButtons[2]).onclick = function () { openSec("atom_sim", atomprojButtons); atomOpen(); };
document.getElementById(projButtons[3]).onclick = function () { openSec("game_proj", gameprojButtons); };
document.getElementById(projButtons[4]).onclick = function () { openSec("greet_box", homeButtons); };
  //PetShop project 
document.getElementById(ecomprojButtons[0]).onclick = function () { openSec("projects", projButtons); };
  //Tortfolio project 
document.getElementById(turtprojButtons[1]).onclick = function () { openSec("projects", projButtons); };  
  //Game project 
document.getElementById(gameprojButtons[0]).onclick = function () { openSec("projects", projButtons); };
  //Atom project 
document.getElementById(atomprojButtons[0]).onclick = function () { openSec("projects", projButtons); atomClose(); };
  //Experience
document.getElementById(experienceButtons[1]).onclick = function () { openSec("greet_box", homeButtons); };
  //National University experience
document.getElementById(experienceButtons[0]).onclick = function () { openSec("national-university-exp", []); };  


openSec("greet_box", homeButtons);