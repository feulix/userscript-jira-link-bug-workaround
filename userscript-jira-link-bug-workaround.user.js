// ==UserScript==
// @name     Jira board link bug workaround
// @version  1.1.1
// @updateURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @downloadURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @grant    none
// @include  *.atlassian.net/*
// @run-at       document-start
// ==/UserScript==



// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    console.log('document.readyState',document.readyState)
    if (document.readyState == "interactive") {
  	    replaceLinks();
	}
    else if (document.readyState == "complete") {
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
