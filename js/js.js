var cookiecount = 0;
var autoClick = 0;

function add() {
  cookiecount = cookiecount + 1
  document.getElementById('text').value = cookiecount;
}
function save() {
  localStorage.setItem("cookiecount", cookiecount);
  localStorage.setItem("autoclick", autoClick);
}

function load() {
  cookiecount = localStorage.getItem("cookiecount");
  cookiecount = parseInt(cookiecount);
  document.getElementById('text').value = cookiecount;
  autoClick = localStorage.getItem("autoclick");
  autoClick = parseInt(autoClick);
  update()
}

function update() {
  document.getElementById('text').value = cookiecount;
  document.getElementById('amount').innerHTML = "You own " + autoClick + " Auto Clickers.";
  document.getElementById('cost').innerHTML = "Cost: " + ((autoClick + 1) * 12) + " Cookies.";
}

function timer() {
  cookiecount = cookiecount + autoClick;
  update()
}
setInterval(timer, 1000)


function buy() {
  if (cookiecount >= ((autoClick + 1) * 12)) {
    cookiecount = cookiecount - ((autoClick + 1) * 12);
    autoClick = autoClick + 1;
    update()
  }
}