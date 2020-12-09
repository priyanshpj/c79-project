var student_array=[];
var display_student_array=[];
function submit(){
    for(var j=1; j<=4; j++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        student_array.push(name_of_the_student);
    }
    var length_of_student_array=student_array.length;
    console.log(length_of_student_array);
    for(var k=0; k<length_of_student_array; k++){
        display_student_array.push("<h4>NAME-"+student_array[k]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    document.getElementById("display_name_without_commas").innerHTML=display_student_array.join(" ");
    document.getElementById("sort_button").style.display="inline";
    document.getElementById("submit_button").style.display="none";
}
function sorting(){
    display_student_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=display_student_array.join(" ");  
}