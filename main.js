list_of_names=[]


function submit(){

    var GuestName = document.getElementById("input_submit").value;

	list_of_names.push(GuestName);
	console.log(GuestName);    
    console.log(list_of_names);
    var lenght_of_name = list_of_names.length;
    console.log(lenght_of_name);
	document.getElementById("submit_list").innerHTML=list_of_names.toString();

    var remove_commas=list_of_names.join(" | ");
    document.getElementById("submit_list").innerHTML=remove_commas;
}

function show(){
    var i= list_of_names.join("<br>");
	console.log(list_of_names);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
}


function sort(){
    list_of_names.sort()          
    var i= list_of_names.join("<br>");
    console.log(list_of_names);		
    document.getElementById("sort").innerHTML=i.toString();
}





