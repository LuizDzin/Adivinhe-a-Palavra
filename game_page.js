Player1 = localStorage.getItem("p1")
Player2 = localStorage.getItem("p2")

document.getElementById("p1").innerHTML = Player1+" : "
document.getElementById("p2").innerHTML = Player2+" : "

score1 = 0;
score2 = 0;

questionTurn = "player1"
answerTurn = "player2"

document.getElementById("p1_score").innerHTML = score1;
document.getElementById("p2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + Player1;
document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + Player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2)
    console.log(charAt2);

        length_minus_1 = word.length - 1;
        charAt3 = word.charAt(length_minus_1);
        console.log(charAt3);
            
remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'>  "+remove_charAt3+"</h4>"
input_box = "<br>Resposta : <input type='type' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

function check() {

    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caixa baixa - " + answer);

    if(answer == word) {

    if(answerTurn == "player1") {

        score1 = score1 +1;
        document.getElementById("p1_score").innerHTML = score1;
    }
    else {

    score2 = score2 +1;
    document.getElementById("p2_score").innerHTML = score2;
    }

    }

    if(questionTurn == "player1") {

        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player2;
    }
    else {

        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Turno de Pegunta: " + player1
    }

    if(answerTurn == "player1") {

        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player1;
    }

    else {

        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player1;
    }

    document.getElementById("output").innerHTML = "";
}