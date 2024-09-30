function toggle(id) {
  const p = document.getElementById("dropdown-" + id);
  if(p.style.display == "block") {
    p.style.display = "none";
  }
  else {
    p.style.display = "block";
  }
}