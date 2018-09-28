//open navigation menu
openNav = () => {
  document.getElementById('sidenav').style.width = "25rem";
}
//close navigation menu
closeNav = () => {
  document.getElementById('sidenav').style.width = "0";
}

//register service worker
navigator.serviceWorker.register('./service-worker.js', {scope: './'}).then(function(reg) {
	console.log("Service worker is registered", reg.scope);
}).catch(function(err){
	console.log("Service Worker failed to register. ", err);
});
