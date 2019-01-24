var contextMenu = {
	"id": "findClickWord",
	"title": "The Dictionary",
	"contexts": ["selection"]
};

chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener(function(clickedData){
	if(clickedData.menuItemId == "findClickWord" && clickedData.selectionText){
		chrome.storage.sync.get("dictionary", function(){
			console.log(dictionary);
		})
	}
});