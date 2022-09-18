function addData(){
	var firstname=document.getElementById('fname').value;
	var lastname=document.getElementById('lname').value;
	var address=document.getElementById('aname').value;
 
	if(firstname =="" || lastname =="" || address==""){
		alert("همه موارد را پر کنید!");
	}else{
		var html="";
 
		html="<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+address+"</td></tr>";
 
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('fname').value="";
		document.getElementById('lname').value="";
		document.getElementById('aname').value="";
	}
}