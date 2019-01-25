// =================== Background script for recieving  searchword and display it on google =======================

chrome.runtime.onMessage.addListener(function(request){
	chrome.tabs.create({'url': "https://www.google.com/search?ei=_BpLXLLqMMH6rQHStISwBA&q=" +  request.search_word + "&oq=" + request.search_word + "&gs_l=psy-ab.3..0l5.3767.5475..6179...1.0..0.395.1344.0j4j1j1......0....1..gws-wiz.....6..0i71j35i39j0i131j0i10.FSbIpQfntUQ"})
})