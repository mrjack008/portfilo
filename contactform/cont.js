function validate()
{
    var username=document.getElementById("name");
    var email=document.getElementById("email");
    var subject=document.getElementById("subject");
    if(username.value==""||subject.value==""){
        
        document.getElementById("invalid").style="color: red;display:block"
        return false;
    }
    else{
        document.getElementById("invalid").style="color: red;display:none"
        true;
    }
    // if(email.value.trim( )==""){
    //     document.getElementById("invalid-e").style="color: red;visibility:visible"
    //     return false;
    // }
    if(username.value.length<4){
       
        document.getElementById("invalid-1").style="color: red;display:block"
        return false;
    }
    else{
        document.getElementById("invalid-1").style="color: red;display:none"
        true;
    }
}