// ==UserScript==
// @name     Jira board link bug workaround
// @version  1.1.2
// @updateURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @downloadURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @grant    none
// @include  *.atlassian.net/*
// @run-at       document-end
// ==/UserScript==



// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    console.log('document.readyState',document.readyState)
    if (document.readyState == "interactive" || document.readyState == "complete") {
//	      AJS.$(window).load(function($) {
	        replaceLinks();
//        })
    }
}

function replaceLinks() {

  console.log('User Script is replacing links');
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
      anchors[i].href = anchors[i].href.replace( "useStoredSettings=true", "useStoredSettings=false" );
  }

}         
