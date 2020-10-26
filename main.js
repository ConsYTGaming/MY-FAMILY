var reasons = [
  "DAD",
  "MOTHER",
  "SISTER",
  "ME",
  "MY GRANDMOTHER",
  "MY FAMILY"
];

var images = [
  "DAK_6148.jpg",
  "DAK_6009.jpg",
  "DAK_5881.jpg",
  "DAK_5759.jpg",
  "DAK_6044.jpg",
  "DAK_6224.jpg",          
];

var i = 0;

function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
}
