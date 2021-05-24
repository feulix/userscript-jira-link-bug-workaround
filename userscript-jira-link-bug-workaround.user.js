// ==UserScript==
// @name     Jira board link bug workaround
// @version  2.0
// @updateURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @downloadURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @grant    none
// @include  *.atlassian.net/*
// ==/UserScript==



(function() {

  
  var replaceLinks = function() {

  	console.log('User Script is replacing links');
	  var anchors = document.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++) {
      anchors[i].href = anchors[i].href.replace("useStoredSettings=true", "useStoredSettings=false");
    }
  }
  
  window.addEventListener("load",function(event) {
    replaceLinks();
  },false);
  
  window.addEventListener("readystatechange",function(event) {
    replaceLinks();
  },false);  

  window.addEventListener("DOMContentLoaded",function(event) {
    replaceLinks();
  },false);

})();
