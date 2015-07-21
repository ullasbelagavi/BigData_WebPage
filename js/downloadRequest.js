var userDetails;
var httpRequest;
function downloadFile(){
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'WhitePaper_BigData.pdf';
	console.log("in store data func");
	 userDetails = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
		email : document.getElementById("email").value,
    };
    console.log("in store data func end ");
    handleButtonRequest();
    console.log("in store data func checkng vl"+JSON.stringify(userDetails));
}

function handleButtonRequest(e){
	//e.preventDefault();
	console.log("in handl req func");

	try
	{
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadstatechange = handleResponse;
		httpRequest.open("POST", "http://localhost:8888/servernew.js",true);
		//httpRequest.setRequestHeader("Content-Type", "application/json");
		httpRequest.send(JSON.stringify(userDetails));
		console.log("in habdl req try func");
	}
	catch(err)
	{
		console.log("Error is"+err);
	}
}
function handleResponse(e){
		console.log("in handle response func");

	if(httpRequest.readyState == 4 && httpRequest.status == 200)
	{
		console.log(httpRequest.responseText);
	}
}