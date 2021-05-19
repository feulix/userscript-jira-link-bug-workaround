// ==UserScript==
// @name     Jira board link bug workaround
// @version  1.1.0
// @updateURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @downloadURL	https://github.com/feulix/userscript-jira-link-bug-workaround/raw/main/userscript-jira-link-bug-workaround.user.js
// @grant    none
// @include  *.atlassian.net/*
// @run-at       document-start
// ==/UserScript==


docReady(function() {
    replaceLinks();
});
              
function replaceLinks() {
  
  console.log('User Script is replacing links');
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
      anchors[i].href = anchors[i].href.replace( "useStoredSettings=true", "useStoredSettings=false" );
  }
  
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    
