var s=document.getElementsByTagName("span");
for(var i=0; i<s.length; ++i) {
	var b = s[i].hasAttribute("title");
	if(b) {
		var text = s[i].innerText;
		var isphone = text.startsWith("+") && text.length>=4;
		if(isphone) {
			console.log("\""+s[i].innerText+"\"");
		}
	}
}
