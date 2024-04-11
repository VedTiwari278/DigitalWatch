
function updateTime() {
var now = new Date();
var hours = now.getHours().toString().padStart(2, '0');
var minutes = now.getMinutes().toString().padStart(2, '0');
var seconds = now.getSeconds().toString().padStart(2, '0');
var timeString = hours + ":" + minutes + ":" + seconds;
document.getElementById('time').textContent = timeString;
 
var date=new Date().toDateString();
document.getElementById('date').textContent=date;

}

setInterval(updateTime, 1000);