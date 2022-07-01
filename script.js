function openAndClose(open, close){
  oElem = document.getElementById(open);
  cElem = document.getElementById(close);

  cElem.style.opacity = 0;
  cElem.style.position = "absolute";
  cElem.style.transition = "opacity 1s";
  oElem.style.position = "static";
  oElem.style.opacity = 1;  
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


//Event listener setup.
document.getElementById("but_1").onclick = function () {openAndClose('aboutme', 'greet_box')};
document.getElementById("but_2").onclick = function () {window.open('Resume.pdf', '_blank')};
document.getElementById("but_4").onclick = function () {window.open('https://github.com/Alexander-Alford', '_blank')};
document.getElementById("but_5").onclick = function () {window.open('https://www.linkedin.com/in/alexanderralford/', '_blank')};
document.getElementById("but_3").onclick = function () {openAndClose('projects', 'greet_box')};
document.getElementById("but_6").onclick = function () {openAndClose('projects', 'greet_box')};


openAndClose("greet_box", "aboutme");