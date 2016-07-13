
function currentlv() {
	var str = window.location.href;
	if(pNum = str.match(/(\d+)\.html/i)){
		pNum = pNum[1] * 1;
		var lvl = 0;
		if (pNum > 0 && pNum <= 5)
		{
			lvl = 1;
			document.getElementById("levelindicator").text = "Current Level: "+lvl;
		}
		else if (pNum > 5 && pNum <= 10)
		{
			lvl = 2;
			document.getElementById("levelindicator").text = "Current Level: "+lvl;
		}
		else if (pNum > 10 && pNum <= 15)
		{
			lvl = 3;
			document.getElementById("levelindicator").text = "Current Level: "+lvl;
		}
		else if (pNum > 15 && pNum <= 20)
		{
			lvl = 4;
			document.getElementById("levelindicator").text = "Current Level: "+lvl;
		}
		else if (pNum > 20 && pNum <= 25)
		{
			lvl = 5;
			document.getElementById("levelindicator").text = "Current Level: "+lvl;
		}
	}
}


function nextPg(step) {
	var str = window.location.href;
	if(pNum = str.match(/(\d+)\.html/i)){
		pNum = pNum[1] * 1 + step+'';
		if(pNum > 0){
			pNum = "".substr(0, 4-pNum.length)+pNum;
			if (pNum < 10) {
				window.location = str.replace(/\d+\.html/i, '0'+pNum+'.html'); 
			}
			else
			{
				window.location = str.replace(/\d+\.html/i, pNum+'.html'); 
			}
		}
	}
}

function randPg() {
	var str = window.location.href;
	if(pNum = str.match(/(\d+)\.html/i)){
		pNum = pNum[1] * 1;
		if(pNum > 0){
			pNum = Math.floor(Math.random()*25+1);
			if (pNum < 10) {
				window.location = str.replace(/\d+\.html/i, '0'+pNum+'.html'); 
			}
			else
			{
				window.location = str.replace(/\d+\.html/i, pNum+'.html'); 
			}
		}
	}
}

function openNav() {
	document.getElementById("mynav").style.height = "45px";
    document.getElementById("mynav").style.visibility = "visible";
	document.getElementById("myshowbtn").style.opacity = "0";
}

function closeNav() {
	document.getElementById("mynav").style.height = "0";
    document.getElementById("mynav").style.visibility = "hidden";
	document.getElementById("myshowbtn").style.opacity = "1";
}

