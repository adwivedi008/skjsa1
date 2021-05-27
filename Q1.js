var x=prompt("Enter 1st no ")
var y=prompt("Enter 2nd no ")
var z=prompt("Enter 3rd no ")
if(x>y && x>z){
 document.write(x+" is largest among all");
}
else if(z>y && z>x){
 document.write(z+" is largest among all");
}
else if(y>z && y>x){
 document.write(y+" is largest among all");
}
else{
document.write("Three are equal")

}