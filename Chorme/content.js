chrome.storage.sync.get("isActivated", function(data) {
  var isActivated = data.isActivated;
  if (isActivated) {
    window.addEventListener("load", function() {
      var body = document.body;
      body.style.overflow = "hidden";
      body.style.height = "100%";
      body.style.width = "100%";
      
      var stories = document.getElementsByClassName("_4-u2 _4-u8");
      for (var i = 0; i < stories.length; i++) {
        stories[i].style.display = "none";
      }
      
      var reels = document.getElementsByClassName("_7c_q _18it _18ix _5pw0");
      for (var i = 0; i < reels.length; i++) {
        reels[i].style.display = "none";
      }
    });
  }
});


