function openAboutMe(){
  document.getElementById("greet_box").style.opacity = 0;
  document.getElementById("greet_box").style.position = "absolute";
  document.getElementById("aboutme").style.position = "static";
  document.getElementById("aboutme").style.opacity = 1;
}
function closeAboutMe(){
  document.getElementById("aboutme").style.opacity = 0;
  document.getElementById("aboutme").style.position = "absolute";
  document.getElementById("greet_box").style.position = "static";
  document.getElementById("greet_box").style.opacity = 1;
}

function openProjects(){
  document.getElementById("greet_box").style.opacity = 0;
  document.getElementById("greet_box").style.position = "absolute";
  document.getElementById("projects").style.position = "static";
  
  //document.getElementById("projects").style.top = "0";
  document.getElementById("projects").style.opacity = 1; 
}

function closeProjects(){
  document.getElementById("projects").style.opacity = 0;
  document.getElementById("projects").style.position = "absolute";
  //document.getElementById("projects").style.top = "-1000px";
  document.getElementById("greet_box").style.position = "static";
  document.getElementById("greet_box").style.opacity = 1; 
}

function openSpecificProject(target){
  document.getElementById(target).style.opacity = 1;
  document.getElementById(target).style.position = "static";
  document.getElementById("projects").style.opacity = 0;
  document.getElementById("projects").style.position = "absolute";
}

function closeSpecificProject(target){
  document.getElementById(target).style.opacity = 0;
  document.getElementById(target).style.position = "absolute";
  document.getElementById("projects").style.opacity = 1;
  document.getElementById("projects").style.position = "static";
}