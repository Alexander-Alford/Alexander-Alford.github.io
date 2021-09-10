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




openAndClose("greet_box", "aboutme");