chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "simplelink",
    title: "open without playlist",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "simplelink") {
    let i = info.linkUrl.indexOf("&");
    let simpleurl = info.linkUrl.slice(0, i);

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (url) => window.open(url),
      args: [simpleurl]
    });
  }
});