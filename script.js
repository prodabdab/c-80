var name_array=[];
var name_arrray_dispaly=[];

function Register() {

    for (var i=1; i<=4; i++){
        var array_name1=document.getElementById("name_"+i).value;
        console.log(array_name1);
        name_array.push(array_name1);
    }
var aray=name_array.length;
for (var j=0; j<aray; j++){
    name_arrray_dispaly.push("<h4> Name - "+name_array[k]+"</h4>");
    console.log(arrray_name_dispaly);
}
    document.getElementById("output_with_name_and_comma").innerHTML=name_arrray_dispaly;
    var NO_COMMMAAAA=name_arrray_dispaly.join(" ");
    document.getElementById("output_without_name_and_comma").innerHTML=NO_COMMMAAAA;
    document.getElementById("Register").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}

var name_arrray_dispaly_Sortoo=[];

function Sort() {
    name_array.sort();

    var aray1=name_array.length;
for (var j=0; j<aray1; j++){
    name_arrray_dispaly.push("<h4> Name - "+name_array[k]+"</h4>");
    console.log(name_arrray_dispaly_Sortoo);
}
    document.getElementById("output_with_name_and_comma").innerHTML=name_arrray_dispaly_Sortoo;
    var NO_COMMMAAAAa=name_arrray_dispaly_Sortoo.join(" ");
    document.getElementById("output_without_name_and_comma").innerHTML=NO_COMMMAAAAa;
}