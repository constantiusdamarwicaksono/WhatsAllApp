/*
 Whats All App
 Enumerate of phonenumbers, profile pics, about texts and online statuses
 16-05-2017
 (c) 2017 - Loran Kloeze - loran@ralon.nl 
 
 https://github.com/LoranKloeze/WhatsAllApp
 
*/

function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}

injectJs(chrome.extension.getURL("/ui.js"));