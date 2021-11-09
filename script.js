var value;
var total;
var answer;

document.getElementById("clear").addEventListener("click", cleared);


function cleared()
{
document.getElementById("output").innerHTML = "0";
}

function zero()
{
    value = document.getElementById("output").innerHTML;
    if (value == "0")
    {
        value = ""
        document.getElementById("output").innerHTML = value;
    }
}

function display(value)
{
    zero()
    document.getElementById("output").innerHTML += value;
}

function solution()
{
    zero()
     total = document.getElementById("output").innerHTML;
     answer = eval(total);
    document.getElementById('output').innerHTML = answer;
}