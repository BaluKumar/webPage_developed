function frameChange(linkTag) {
	switch (linkTag) {
		case 'Home':
			document.getElementById("dis_cont").src="Home.html";
			break;
		case 'Login':
			document.getElementById("dis_cont").src="demo.html";
			break;
		case 'Register':
			document.getElementById("dis_cont").src="Register.html";
			break;
		case 'Resume':
			document.getElementById("dis_cont").src="Document/Sudharson_Resume";
			break;
		case 'Profile':
			document.getElementById("dis_cont").src="Profile.html";
			break;
		default:
			break;
	}
	
}
/*
function welcome(){
 var name="balu";
 alert(name);
}
function disPara(){
	var CreateTag=document.createElement("p");
	var text=document.createTextNode(document.getElementById("value").value);
	CreateTag.appendChild(text);
	document.body.appendChild(CreateTag);
}

function create_table(){
	var Tag=document.createElement("table");
	var Th_Tag=document.createElement("th");
	var Tr_Tag=document.createElement("tr");
	var Td_Tag=document.createElement("td");
	var name=document.createTextNode("Name");
	Th_Tag.appendChild(name);
	Tr_Tag.appendChild(Th_Tag);
	Tag.appendChild(Tr_Tag);
	document.body.appendChild(Tag);

}*/