chrome.runtime.onInstalled.addListener(function() {
  // Request permission for notifications (optional)
  chrome.notifications.requestPermission(function(result) {
    if (result !== "granted") {
      console.log("Notification permission denied");
    }
  });
});

function showNotification() {
  var options = {
    type: "basic",
    title: "Notification Title",
    message: "Notification Message",
    iconUrl: "icon.png"
  };

  chrome.notifications.create(options, function(notificationId) {
    console.log("Notification created:", notificationId);
  });
}

chrome.browserAction.onClicked.addListener(showNotification);
