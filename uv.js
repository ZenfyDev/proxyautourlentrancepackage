const form = document.querySelector('form');
const input = document.querySelector('input');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url = urlParams.get('site');

if(url){
	window.navigator.serviceWorker.register('./uv-sw.js', {
	
        scope: __uv$config.prefix
    }).then(() => {
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}

// form.addEventListener('submit', async event => {
    // event.preventDefault();
    // window.navigator.serviceWorker.register('./sw.js', {
        // scope: __uv$config.prefix
    // }).then(() => {
		// url = input.value.trim();
        // if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        // else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    // });
// });

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
