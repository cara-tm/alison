/*!

*/
function get_browser(){var e,r=navigator.userAgent,a=r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?(e=/\brv[ :]+(\d+)/g.exec(r)||[],"IE "+(e[1]||"")):"Chrome"===a[1]&&(e=r.match(/\bOPR\/(\d+)/),null!=e)?"Opera "+e[1]:(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=r.match(/version\/(\d+)/i))&&a.splice(1,1,e[1]),a[0])}function get_browser_version(){var e,r=navigator.userAgent,a=r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?(e=/\brv[ :]+(\d+)/g.exec(r)||[],"IE "+(e[1]||"")):"Chrome"===a[1]&&(e=r.match(/\bOPR\/(\d+)/),null!=e)?"Opera "+e[1]:(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=r.match(/version\/(\d+)/i))&&a.splice(1,1,e[1]),a[1])};
var browser=get_browser();
var browser_version=get_browser_version();
