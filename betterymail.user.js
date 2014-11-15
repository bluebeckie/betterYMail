// ==UserScript==
// @name         better YMail
// @namespace    http://github.com/bluebeckie/betterYMail
// @version      0.1
// @description  more space
// @author       beckie
// @match        https://*.mail.yahoo.com/*
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
    '.listnav-container {visibility: visible;}',
    '.has-tabs #main, #main {max-width:100%; top: 60px;}',
    '#shellnavigation {width: 210px;}',
    '#shellcontent {left: 210px;}',
    '.yui3-feedback-content {display: none;}'
].join('');

style = document.createElement('style');
style.innerHTML = styles;
document.head.appendChild(style);

subfolders = document.querySelectorAll('.listnav-subfolder.hidden');
for (var i=0,j=subfolders.length; i<j; i++) {
     subfolders[i].className = subfolders[i].className.replace('hidden','');
};
