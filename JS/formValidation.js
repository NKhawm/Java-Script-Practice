function sign_in()
{
var fname = document.getElementById('name').value;

/*if 
    (fname=='')
    {
        alert('the name can not be blank')
    }

else{
    alert('Valid Name')
}
}*/
var p_Word = document.getElementById('password').value;
//var n= [1,2,3,4,5,6]
//let l= (n.length);
 /*if (p_Word.length < 6)
{
    alert('the password must be aleast 6')
}
else{ 
    alert('Valid Password')
}*/
//-------------another way-----------
if((fname==null) ||(fname=='') )
{
    alert('name can not be blank')
    return false;
}

else if(p_Word.lenght<6)
{
    alert('password shoud be at least 6')
    return false;
}
var email1 = 'khawmhuai@gmail.com';
var email2 = 'khawmhuaigamail.com';

email1.indexOf("@");
email2.indexOf("@");

}
