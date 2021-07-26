var score = 0;



function nxtpg()
{
    window.location = "activity_2.html"; 
    console.log("Redircted to other page");
}

function updatescore()
{
    score += 1;  
    document.getElementById("s1").innerHTML = "Score is " + score; 
    console.log("Score is " + score);
}

function savescore()
{
    localStorage.setItem("points", score);
}