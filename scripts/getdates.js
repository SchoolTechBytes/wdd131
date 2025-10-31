const today = new Date();
const year = document.getElementById("currentyear").innerHTML = today.getFullYear();

year.innerHTML = `${today.getFullYear()}`;

const lastmodded = document.getElementById("lastModified").innerHTML += document.lastModified;

