function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    var a = Math.abs(age_dt.getUTCFullYear() - 1970);
    if(a>18 && a<44){
    location.href = '“https://selfregistration.cowin.gov.in';

    }
    else{
    document.write("You are not eligible")
}
}
calculate_age(new Date(prompt("Enter your datew in YYYY,MM,DD Format")));