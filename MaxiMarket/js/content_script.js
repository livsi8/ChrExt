
// var s = document.createElement("script");
// s.src = chrome.extension.getURL("insert.js");
// document.getElementsByTagName("html")[0].appendChild(s);

// document.body.innerHTML += '<div style="background-color: #FFFFFF; border-color: black; border-style: solid; color: black; font-family: \'Segoe UI\'; font-size: 24px; position: fixed; left: 0; top: 0; width: 300px; height: 110px; padding: 8px; z-index: 1000000000">Ура!Ура!Ура!</div>';
// document.body.style.background = "red";

// $('body').css('background','green');
debugger;

var ddiv = ''+
    '<div id="main-div" style="background: white; display: inline-flex; justify-content: space-around; border: 1px solid #4c4c4c; height: 50px; width: 100%; text-align: center;">'+
    '<div class="brend" style="margin-top: 4px;">'+
    '<a target="_blank" href="https://trading.maximarkets.org/">'+
    '<img title="Brend" style="cursor: pointer; width: 100px; height: 40px; background-color: slategrey; vertical-align: middle" src="http://promo.maximarkets.ru/images/logo.png" />'+
    '</a>'+
    '</div>'+
    '<div id="kotirovki" style="border: 1px solid red; display: inline-flex; vertical-align: middle; justify-content: space-around; width: 550px;">'+
    '<div id="instrument1" style="display: inline-flex; justify-content: space-around; flex-direction: column">'+
    '<div class="instrumentName">'+
    'EUR / USD'+
    '</div>'+
    '<div class="instrumentAmount" style="color: red;">'+
    '1.08766 | 1.08765'+
    '</div>'+
    '</div>'+
    '<div id="instrument2" style="display: inline-flex; justify-content: space-around; flex-direction: column">'+
    '<div class="instrumentName">'+
    'GBP / USD'+
    '</div>'+
    '<div class="instrumentAmount" style="color: green;">'+
    '1.08766 | 1.08765'+
    '</div>'+
    '</div>'+
    '<div id="instrument3" style="display: inline-flex; justify-content: space-around; flex-direction: column">'+
    '<div class="instrumentName">'+
    'USD / JPY'+
    '</div>'+
    '<div class="instrumentAmount" style="color: green;">'+
    '113.856 | 113.855'+
    '</div>'+
    '</div>'+
    '<div id="instrument4" style="display: inline-flex; justify-content: space-around; flex-direction: column">'+
    '<div class="instrumentName">'+
    'USD / RUB'+
    '</div>'+
    '<div class="instrumentAmount" style="color: red;">'+
    '57.893 | 57.8836'+
    '</div>'+
    '</div>'+
    '</div>'+

    '<div id="btnVideo" style="border: 1px solid red;">'+
    '<img title="Brend" style="cursor: pointer; width: 158px; height: 40px; margin-top: 4px; vertical-align: middle" src="img/Btn_video.png" />'+
    '</div>'+

    '<div id="Buls" style="border: 1px solid red; width: 300px">data'+

    '</div>'+
    '</div>'+
    '';

var htmlDoc = document.getElementsByTagName('html')[0];
var banerContainer = document.createElement('div');
var content = document.createElement('img');
// banerContainer.innerHTML += '<div style="background-color: #FFFFFF; border-color: black; border-style: solid; color: black; font-family: \'Segoe UI\'; font-size: 24px; position: fixed; left: 0; top: 0; width: 300px; height: 110px; padding: 8px; z-index: 1000000000">Ура!Ура!Ура!</div>';
banerContainer.innerHTML =  ddiv;

// content.setAttribute('src', 'http://promo.maximarkets.ru/images/logo.png');

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
banerContainer.style.padding = '5px';
banerContainer.classList.add('maximarkets');

banerContainer.appendChild(content);
htmlDoc.prepend(banerContainer);
// console.log('Динамически встроил div');