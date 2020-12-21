var p1= localStorage.getItem("player1_name");
var p2= localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
question_turn="player1";
answer_turn="player2";
document.getElementById("player1_name").innerHTML=p1 + " : ";
document.getElementById("player2_name").innerHTML=p2 + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
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
function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer==ans){
        if(answer_turn=="player1"){
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;  
        }
        if(question_turn=="player1"){
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question TURN- " + p2;
            
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question TURN- " + p1;  
        }
        if(answer_turn=="player1"){
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer TURN- " + p2;
            
        }
        else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="Answer TURN- " + p1;  
        }
    }
}