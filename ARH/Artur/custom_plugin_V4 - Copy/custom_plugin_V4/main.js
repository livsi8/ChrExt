document.addEventListener('DOMContentLoaded', main, false);

function changeBg () {
	chrome.tabs.executeScript(null, {
		code: "document.body.style.backgroundColor='green'"
	});
}

// function addBanerOnPage () {
// 	chrome.tabs.executeScript(null, {
// 		code: 'addBaner'//'alert("Maximarkets extension")'
// 	});
function addBanerOnPage () {
	chrome.tabs.executeScript(null, {
		code: 'alert("maximarkets")'
	});
}

function main () {
	var doc = document,
			elem = doc.querySelector('.btn'),
			btnABaner = doc.querySelector('.butBaner');

	elem.addEventListener('click', changeBg, false);
	btnABaner.addEventListener('click', addBanerOnPage, false);

}