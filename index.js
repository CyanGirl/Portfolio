import * from "animate.css";

$(document).ready(function(){
    $("body").show(2000);
});
function submitted()
{
    var x=document.getElementById("text").value;
    if(x.length>0)
    {
    alert("Thank you for your time!");
    }
    else{
        alert("May be next time!");
    }
}