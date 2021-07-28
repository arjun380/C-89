function getscor()
{
    var point = localStorage.getItem("points");
    document.getElementById("sco").innerHTML = " <h1> Score := </h1>" + point;
}

function back()
{
    window.location.replace("activity_1.html");
}