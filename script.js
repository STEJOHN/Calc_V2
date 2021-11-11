var value;
var total;
var answer;
var output = document.getElementById("output");


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
output.innerHTML += value;
}

function numtwo()
{
    zero()
    value = "2";
output.innerHTML += value;
}
function numthree()
{
    zero()
    value = "3";
output.innerHTML += value;
}

function numfour()
{   zero()
    value = "4";
output.innerHTML += value;
}

function numfive()
{
    zero()
    value = "5";
output.innerHTML += value;
}

function numsix()
{
    zero()
    value = "6";
output.innerHTML += value;
}

function numseven()
{
    zero()
    value = "7";
output.innerHTML += value;
}

function numeight()
{
    zero()
    value = "8";
output.innerHTML += value;
}

function numnine()
{
    zero()
    value = "9";
output.innerHTML += value;
}

function addition()
{
    value = "+";
output.innerHTML += value;
}

function multiplication()
{
    value = "*";
output.innerHTML += value;
}

function substraction()
{
    value = "-";
output.innerHTML += value;
}

function division()
{
    value = "/";
output.innerHTML += value;
}

function per()
{
    value = ".";
output.innerHTML += value;
}

function cleared()
{
output.innerHTML = "0";
}

function zero()
{
    value = output.innerHTML;
    if (value == "0")
    {
        value = ""
        output.innerHTML = value;
    }
}

function display(value)
{
    zero()
    output.innerHTML += value;
}

function solution()
{
    zero()
     total = output.innerHTML;
     answer = eval(total);
    document.getElementById('output').innerHTML = answer;
}

function numzero()
{
    value = "0";
output.innerHTML += value;
}

