chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({isActivated: true}, function() {
    console.log("Facebook Scroll Blocker activated.");
  });
});

