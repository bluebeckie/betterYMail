// ==UserScript==
// @name         better YMail
// @namespace    http://github.com/bluebeckie/betterYMail
// @version      0.1
// @description  more space
// @author       beckie
// @match            https://*.mail.yahoo.com/*
// @grant        none
// ==/UserScript==

var subfolders,
    style,
    styles = [
    '#UH {padding-top:10px; height:4em;}',
    '#masterNav {display: none;}',
    '.wide-right-rail #shellcontent, #shellcontent {right:0;}',
    '.wide-right-rail #theAd, #theAd {width: 0;}',
    '#slot_MB {display:none;}',
    '#masSearchAd {display: none;}',
    '.listnav .selected { background: deepskyblue;}',
    '.has-tabs #main {top: 60px;}',
    '#shellnavigation {width: 200px;}',
    '.#shellcontent {left: 200px;}',
    '.yui3-feedback .expand .feedback-content {display:none;}'
].join('');

style = document.createElement('style');
style.innerHTML = styles;
document.head.appendChild(style);

subfolders = document.querySelectorAll('.listnav-subfolder.hidden');
for (var i=0,j=subfolders.length; i<j; i++) {
     subfolders[i].className = subfolders[i].className.replace('hidden','');
};
