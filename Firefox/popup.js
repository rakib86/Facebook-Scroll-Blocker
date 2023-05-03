document.addEventListener("DOMContentLoaded", function() {
  var activateBtn = document.getElementById("activate-btn");
  var deactivateBtn = document.getElementById("deactivate-btn");
  
  chrome.storage.sync.get("isActivated", function(data) {
    var isActivated = data.isActivated;
    if (isActivated) {
      activateBtn.style.display = "none";
    } else {
      deactivateBtn.style.display = "none";
    }
  });
  
  activateBtn.addEventListener("click", function() {
    chrome.storage.sync.set({isActivated: true}, function() {
      activateBtn.style.display = "none";
      deactivateBtn.style.display = "block";
      console.log("Facebook Scroll Blocker activated.");
    });
  });
  
  deactivateBtn.addEventListener("click", function() {
    chrome.storage.sync.set({isActivated: false}, function() {
      deactivateBtn.style.display = "none";
      activateBtn.style.display = "block";
      console.log("Facebook Scroll Blocker deactivated.");
    });
  });
});
