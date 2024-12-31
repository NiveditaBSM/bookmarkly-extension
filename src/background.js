chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed!");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked!");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackgroundColor
    });
  });
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  