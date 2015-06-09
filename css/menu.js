var menuID = new Array("menu") 
var offset = -2 

function menuFunction()
{
	for (var i = 0; i < menuID.length; i++)
	{
		var ul = document.getElementById(menuID[i]).getElementsByTagName("ul")
		for (var j = 0; j < ul.length; j++)
		{
			var span = document.createElement("span")
			span.className = "menudiv"
			span.innerHTML = "&nbsp;&nbsp;"
			ul[j].parentNode.getElementsByTagName("a")[0].appendChild(span)
			ul[j].parentNode.onmouseover = function()
			{
				this.getElementsByTagName("ul")[0].style.left = this.parentNode.offsetWidth + offset + "px"
				this.getElementsByTagName("ul")[0].style.display = "block"
			}
			ul[j].parentNode.onmouseout = function()
			{
				this.getElementsByTagName("ul")[0].style.display = "none"
			}
    	}
	}
}
if (window.addEventListener)
    window.addEventListener("load", menuFunction, false)
else if (window.attachEvent)
    window.attachEvent("onload", menuFunction)