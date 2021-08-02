var pr1 = localStorage.getItem("Player1_name");
var pr2 = localStorage.getItem("Player2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = pr1 + " :";
document.getElementById("player2_name").innerHTML = pr2 + " :";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_queestions").innerHTML = "Qustion Turn -" + pr1;
document.getElementById("player_answer").innerHTML = "Answr Turn - "  + pr2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2)
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    r1 = word.replace(charAt1, "_");console.log(r1);
    r2 = r1.replace(charAt2 ,  "_");console.log(r2);
    r3 = r2.replace(charAt3 ,  "_");
    console.log(r3);

    qw = "<h4 id='wd'> Q. "+ r3 + "</h4>";
    ib = "<br>Answer : <input type='text' id='icb'>";
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qw +ib +cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}