function logon()
{
    var playere1= document.getElementById("PL1").value;
    localStorage.setItem("Player1_name",playere1);

    var playere2= document.getElementById("PL2").value;
    localStorage.setItem("Player2_name",playere2);

    window.location.replace("game_page.html");
}

playere1 = localStorage