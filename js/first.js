var JSONObject={
"name" : "Rajiv Kumar",
"address": "Address",
"age"    : 27,
"phone" : 080111111,
"mobile":9999999999
};

var skillSet={
"languages":[
				{"language":"Java", "level": "Expert", "noOfYears": 6},			
			
				{ "language":"C++", "level": "Novice", "noOfYears": 0},	
				 
				{"language":"C", "level": "Novice", "noOfYears": 0}
			
			]
}

function getName(){
	return JSONObject.name;
	//alert("Name::"+JSONObject.name)
};

function getAddress(){
	return JSONObject.address;
	//alert("Address::"+JSONObject.address);
};

function getAge(){
	return JSONObject.age;
	//alert("Age::"+JSONObject.age);
};

function getPhone(){
	return  JSONObject.phone;
	//alert("Phone::"+JSONObject.phone) 
};

function getMobile(){
	return JSONObject.mobile;
	//alert("Mobile::"+JSONObject.mobile);
};

function populateDetails(){
	document.getElementById("fname").value=getName();
	document.getElementById("faddress").value=getAddress();
	document.getElementById("fage").value=getAge();
	document.getElementById("fphone").value=getPhone();
	document.getElementById("fmobile").value=getMobile();
	


};

function resetDetails(){
	document.getElementById("fname").value="";
	document.getElementById("faddress").value="";
	document.getElementById("fage").value="";
	document.getElementById("fphone").value="";
	document.getElementById("fmobile").value="";
	document.getElementById("skillsDiv").style.visibility="hidden";
};

function populateUsingJsonParser(){
	var json = JSON.stringify(JSONObject);
	var parsedObj = JSON.parse(json);
	document.getElementById("fname").value=parsedObj.name;
	document.getElementById("faddress").value=parsedObj.address;
	document.getElementById("fage").value=parsedObj.age;
	document.getElementById("fphone").value=parsedObj.phone;
	document.getElementById("fmobile").value=parsedObj.mobile;
};

function populateSkills(){
	var skills=JSON.stringify(skillSet);
	var parsedSkills=JSON.parse(skills);
	var languagesKnown="";
	for(i=0; i<parsedSkills.languages.length; i++){
			languagesKnown+="language::"+parsedSkills.languages[i].language+"::level::"+parsedSkills.languages[i].level+"::noOfYears::"+parsedSkills.languages[i].noOfYears+"--";
	}
	//alert(languagesKnown);
	document.getElementById("skills").value=languagesKnown;
	document.getElementById("skillsDiv").style.visibility="visible";
}