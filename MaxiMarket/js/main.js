// document.addEventListener('DOMContentLoaded', addBaner, false);
chrome.runtime.getBackgroundPage(addBaner);

function addBaner () {
    console.log('hello console')
    var htmlDoc = document.getElementsByTagName('html')[0],
        banerContainer = document.createElement('div'),
        content = document.createElement('img');

    // banerContainer.classList.add('container');

    content.setAttribute('src', 'http://promo.maximarkets.ru/images/logo.png');

    content.style.margin = '0 auto';
    banerContainer.style.background = '#ccc';
    banerContainer.style.textAlign = 'center';
    banerContainer.style.width = '100%';
    banerContainer.style.height = '100px';
    htmlDoc.style.marginTop = '100px';
    banerContainer.style.zIndex = '999999999';
    banerContainer.style.boxSizing = 'border-box';
    banerContainer.style.position = 'fixed';
    banerContainer.style.top = '0';
    banerContainer.style.padding = '15px';
    banerContainer.classList.add('maximarkets');

    banerContainer.appendChild(content);
    htmlDoc.prepend(banerContainer);
    console.log('function ended');
}
console.log('hello console')