// ==UserScript==
// @name         better new mail
// @namespace    beckie
// @version      1.0
// @description  remove ads from yo/newmail
// @author       beckie
// @match        https://*.mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const styles = [
        '#Atom .P_6Fd5.W_3o4BO {padding:0; width:0;}',
        '@media (min-width: 1360px) { #Atom .P_6Fd5.W_3o4BO.cZ10Gnkk_3vpWV {overflow:hidden; padding:0; width:0;}}',
        '@media (min-width: 1440px) { #Atom .P_6Fd5.W_3o4BO.cZ10Gnkk_3vpWV {overflow:hidden; padding:0; width:0;}}',
        '#Atom .p_f {display: none;}'
    ].join('');
    const style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);
})();
