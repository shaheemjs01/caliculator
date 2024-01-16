function buttonclick (val)
{
 document.getElementById("screen").value= document.getElementById("screen").value+val;

}
function ClearDisplay( )
{

    document.getElementById("screen").value=""

}
function answer( )
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function dbzero(zero)
{
 document.getElementById("screen").value=document.getElementById("screen").value+zero;
}