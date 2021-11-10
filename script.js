var value;
var total;
var answer;


document.getElementById("numberzero").addEventListener("click" , numzero);
document.getElementById("one").addEventListener("click" , numone);
document.getElementById("two").addEventListener("click", numtwo);
document.getElementById("three").addEventListener("click", numthree);
document.getElementById("four").addEventListener("click", numfour);
document.getElementById("five").addEventListener("click", numfive);
document.getElementById("six").addEventListener("click", numsix);
document.getElementById("seven").addEventListener("click", numseven);
document.getElementById("eight").addEventListener("click", numeight);
document.getElementById("nine").addEventListener("click", numnine);


document.getElementById("clear").addEventListener("click", cleared);
document.getElementById("add").addEventListener("click", addition);
document.getElementById("minus").addEventListener("click", substraction);
document.getElementById("divide").addEventListener("click", division);
document.getElementById("multiply").addEventListener("click", multiplication);
document.getElementById("equal").addEventListener("click", solution);
document.getElementById("period").addEventListener("click", per);



function numone()
{
    zero()
    value = "1";
document.getElementById("output").innerHTML += value;
}

function numtwo()
{
    zero()
    value = "2";
document.getElementById("output").innerHTML += value;
}
function numthree()
{
    zero()
    value = "3";
document.getElementById("output").innerHTML += value;
}

function numfour()
{   zero()
    value = "4";
document.getElementById("output").innerHTML += value;
}

function numfive()
{
    zero()
    value = "5";
document.getElementById("output").innerHTML += value;
}

function numsix()
{
    zero()
    value = "6";
document.getElementById("output").innerHTML += value;
}

function numseven()
{
    zero()
    value = "7";
document.getElementById("output").innerHTML += value;
}

function numeight()
{
    zero()
    value = "8";
document.getElementById("output").innerHTML += value;
}

function numnine()
{
    zero()
    value = "9";
document.getElementById("output").innerHTML += value;
}

function addition()
{
    value = "+";
document.getElementById("output").innerHTML += value;
}

function multiplication()
{
    value = "*";
document.getElementById("output").innerHTML += value;
}

function substraction()
{
    value = "-";
document.getElementById("output").innerHTML += value;
}

function division()
{
    value = "/";
document.getElementById("output").innerHTML += value;
}

function per()
{
    value = ".";
document.getElementById("output").innerHTML += value;
}

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

function numzero()
{
    value = "0";
document.getElementById("output").innerHTML += value;
}

