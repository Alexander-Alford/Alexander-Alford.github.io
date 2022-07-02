var homeButtons = ["but_about", "but_proj", "but_exper", "but_res", "but_git", "but_linkin"];
var aboutButtons = ["goback_about"];
var projButtons = ["goback_proj", "but_gameproj", "but_atomproj", "but_tortproj", "but_ecomproj"];
var gameprojButtons = ["goback_gameproj"]
var currentSection = "greet_box"

function openSec(open){
  oElem = document.getElementById(open);
  cElem = document.getElementById(currentSection);

  cElem.style.opacity = 0;
  cElem.style.position = "absolute";
  cElem.style.transition = "opacity 1s";
  oElem.style.position = "static";
  oElem.style.opacity = 1;

  currentSection = open;  
  disableFocusForAll();
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
  
 // document.getElementById('atom_but').innerHTML = "Try It";
 // document.getElementById('atom_but').setAttribute("onclick", "atomOpen();");
}

function atomOpen(){
  embedHtml('atom.html', 600, 600, 'atom_embed');
  //document.getElementById('atom_but').innerHTML = "Close";
  //document.getElementById('atom_but').setAttribute("onclick", "atomClose();");
}

function enableNormalFocusOnElements(id_list){
  id_list.forEach(function(elem){ document.getElementById(elem).tabIndex = 0; });
}

function disableFocusForAll(){
  let all = homeButtons.concat(projButtons).concat(aboutButtons).concat(gameprojButtons);
  all.forEach(function(elem){ document.getElementById(elem).tabIndex = -1; });
}



function openHome(){
  openSec('greet_box');
  enableNormalFocusOnElements(homeButtons);
}

function openAboutMe(){
  openSec('aboutme');
  enableNormalFocusOnElements(aboutButtons);
}

function openProjects(){
  openSec('projects');
  enableNormalFocusOnElements(projButtons);
}

//Event listener setup.
  //Home buttons.
document.getElementById(homeButtons[0]).onclick = function () { openAboutMe(); };
document.getElementById(homeButtons[1]).onclick = function () { openProjects(); };
document.getElementById(homeButtons[2]).onclick = function () {openAndClose('experience', 'greet_box')};
  //About Me buttons.
document.getElementById(aboutButtons[0]).onclick = function () { openHome(); };
  //Project buttons.
document.getElementById(projButtons[0]).onclick = function () { openHome(); };
document.getElementById(projButtons[1]).onclick = function () {  };


openHome();