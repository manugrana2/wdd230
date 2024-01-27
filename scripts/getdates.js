const yearHolder = document.getElementById("year-holder");
const year = new Date();
yearHolder.innerText = year.getFullYear();


document.getElementById("lastModified").innerText += " "+document.lastModified