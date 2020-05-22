
function submitted()
{
    var x=document.getElementById("text").value;
    if(x.length>0)
    {
        document.getElementById("text").value="";
    alert("Thank you for your time!");
    }
    else{
        alert("May be next time!");
    }
}