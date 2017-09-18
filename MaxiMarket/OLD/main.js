document.addEventListener('DOMContentLoaded', main, false);

main();
run();

function changeBg () {
	chrome.tabs.executeScript(null, {
		// code: "document.body.style.backgroundColor='red'"
		// file: "js/insert.js"
    },
		// function(){
		// console.log('@@');
		// }
	)
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
	run();
	var doc = document,
			elem = doc.querySelector('.btn'),
			btnABaner = doc.querySelector('.butBaner');

	elem.addEventListener('click', changeBg, false);
	btnABaner.addEventListener('click', addBanerOnPage, false);


}
var divContetnt = '<div>Hello wold</div>';

function run() {

    chrome.tabs.executeScript(null, {
        code: "" +
		// "document.body.style.backgroundColor='red'"
		"var htmlDoc = document.getElementsByTagName('html')[0];"+
		"var banerContainer = document.createElement('div');"+
		"var content = document.createElement('img');"+

		"content.setAttribute('src', 'http://promo.maximarkets.ru/images/logo.png');"+

		"content.style.margin = '0 auto';"+
		"banerContainer.style.background = '#ccc';"+
		"banerContainer.style.textAlign = 'center';"+
		"banerContainer.style.width = '100%';"+
		"banerContainer.style.height = '100px';"+
		"htmlDoc.style.marginTop = '100px';"+
		"banerContainer.style.zIndex = '999999999';"+
		"banerContainer.style.boxSizing = 'border-box';"+
		"banerContainer.style.position = 'fixed';"+
		"banerContainer.style.top = '0';"+
		"banerContainer.style.padding = '5px';"+
		"banerContainer.classList.add('maximarkets');"+

		"banerContainer.appendChild(content);"+
		"htmlDoc.prepend(banerContainer);"+
		"console.log('Динамически встроил div');"
    });
}

