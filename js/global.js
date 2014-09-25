/*!

*/
function detectBrowser(){var e=navigator.userAgent.toLowerCase();_browser.opera=/mozilla/.test(e)&&/applewebkit/.test(e)&&/chrome/.test(e)&&/safari/.test(e)&&/opr/.test(e),_browser.safari=/applewebkit/.test(e)&&/safari/.test(e)&&!/chrome/.test(e),_browser.firefox=/mozilla/.test(e)&&/firefox/.test(e),_browser.chrome=/webkit/.test(e)&&/chrome/.test(e),_browser.msie=/msie/.test(e),_browser.version="";for(x in _browser)if(_browser[x]){if("opera"!==x){if(_browser.version=e.match(new RegExp("("+x+")( |/)([0-9]+)"))[3],_browser.version>=10)var r=x}else{_browser.version=e.match(new RegExp("(opr)( |/)([0-9]+)"))[3];var r=x+_browser.version}break}var s=document.querySelector("html");s.classList.add(r)}window.onload=function(){detectBrowser()},_browser={};
