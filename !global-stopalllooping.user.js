// ==UserScript==
// @name        !global | stop all looping
// @namespace		https://github.com/klazoklazo/monkey-scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      -
// @description removes loop attributes from all videos when it can
// ==/UserScript==
document.getElementsByTagName("video")[0].removeAttribute("loop");
