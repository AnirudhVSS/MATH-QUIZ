function send(){
x = document.getElementById("x").value;
x2  = document.getElementById("x2").value;
ans= parseInt(x) * parseInt(x2);
question_number= "<h4>" + x + "X" + x2 +"</h4>";
input_box= "<br>Answer: <input type='text' id='input_check_box'>";
check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button> ";
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("x").value=" ";
document.getElementById("x2").value=" ";
}