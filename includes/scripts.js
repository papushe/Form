$("document").ready(function () {

	xhr = new XMLHttpRequest();
	var url = "http://134.86.158.192/CodingTest/home/SignUp";
	xhr.open("POST", url, true);
	//xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(json.Name + ", " + json.Email);
			$('form').append('<p>' + xhr.responseText + '</p>');
		}
		else{
			console.log(xhr.responseText);
			$('form').append('<p>' + xhr.responseText + '</p>');
		}
	}
	var data = JSON.stringify({ "Name": "userName", "Email" : "email"});
	xhr.send(data);
});