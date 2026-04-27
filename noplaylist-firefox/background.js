

browser.contextMenus.create({
        id: "simplelink",
        title: "open without playlist",
        contexts: ["link"],
    },
    () => void browser.runtime.lastError,
);


browser.contextMenus.onClicked.addListener(
	(info,tab) => 
	{
		if(info.menuItemId === "simplelink")
		{
			let i = info.linkUrl.indexOf("&");
			let simpleurl = info.linkUrl.slice(0,i);
			let opensurl = `window.open('${simpleurl}');`;
			browser.tabs.executeScript({
				code: opensurl,
			});
		}
	}
);
