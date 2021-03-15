function openAndClose(open, close){
  document.getElementById(close).style.opacity = 0;
  document.getElementById(close).style.position = "absolute";
  document.getElementById(open).style.position = "static";
  document.getElementById(open).style.opacity = 1;  
}
