//open navigation menu
openNav = () => {
  document.getElementById('sidenav').style.width = "25rem";
}
//close navigation menu
closeNav = () => {
  document.getElementById('sidenav').style.width = "0";
}

//register service worker
navigator.serviceWorker.register('/js/sw.js').then(function(reg) {
	console.log("Service worker is registered.");
}).catch(function(err){
	console.log("Error:", err);
});