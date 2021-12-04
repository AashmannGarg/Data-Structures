name_of_student_array=[];
function Submit(){
    var display_student_name=[];
    for(var j=1; j<=4; j++){
        var name_student=document.getElementById("name_of_student_"+j).value;
        name_of_student_array.push(name_student); 
    }
console.log(name_of_student_array);
length_array=name_of_student_array.length;
console.log(length_array);
for(var k=0; k< length_array; k++){
    display_student_name.push("<h4> name-"+name_of_student_array[k]+"</h4>");
}
console.log(display_student_name);
    document.getElementById("display_student_with_commas").innerHTML=display_student_name;
var remove_commas=display_student_name.join(" ");
document.getElementById("display_student_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function Sorting(){
    var display_student_name_sort=[];
    name_of_student_array.sort();
    console.log(name_of_student_array);
    length_array=name_of_student_array.length;
console.log(length_array);
for(var k=0; k< length_array; k++){
    display_student_name_sort.push("<h4> name-"+name_of_student_array[k]+"</h4>");
}
console.log(display_student_name_sort);
var remove_commas=display_student_name_sort.join(" ");
document.getElementById("display_student_without_commas").innerHTML=remove_commas;
}