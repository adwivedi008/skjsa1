function membergrp(id, membercall)
{
    membercall();  
}

function memberadded() {
    document.write('Member sucessfully added!!!');
}

addStudent(1, memberadded);