// ==UserScript==
// @name     Jira board link bug workaround
// @version  1.0.0
// @updateURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @downloadURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @grant    none
// @include  *.atlassian.net/*
// @run-at       document-start
// ==/UserScript==

// Confluence has an old version of jQuery in AJS.$
// lets expose a newer version of jquery to global scope
var $, jQuery;
$ = jQuery = window.jQuery;

// alternative to DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
  	replaceLinks();
	}
}
              
function replaceLinks() {
  
  console.log('User Script is replacing links');
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
      anchors[i].href = anchors[i].href.replace( "useStoredSettings=true", "useStoredSettings=false" );
  }
  
}
