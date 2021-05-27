function tempconvt(a){
if(a==1){
var c=prompt("Please enter The temp in celsius")
var f=(c* 1.8) + 32
document.writeln("The value of temp in celsius is " +f +"`C.")
}
else if(a==2){
var f=prompt("Please enter The temp in Farenheit")
var c=((f-32)*5)/9
document.writeln("The value of temp in celsius is " +c +"`C.")
}
else{
document.writeln("Please enter a valid choice ")
tempconvt(prompt("Please enter 1 to convert from `C to `F or 2 for `f to `C"))
}
}
tempconvt(prompt("Please enter 1 to convert from `C to `F or 2 for `f to `C"))