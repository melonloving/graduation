function showPic(parameter)
{
	var source=parameter.getAttribute("href");
	document.getElementById("pictureid").setAttribute("src",source);
	var titlecon=parameter.getAttribute("title");
	document.getElementById("byj-body-intro").firstChild.nodeValue=titlecon;
}
