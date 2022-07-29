let nameNode=document.getElementById("Name");
let unameNode=document.getElementById("userName");
let emailNode=document.getElementById("Email");
let passNode=document.getElementById("password");

let errorNode1=document.getElementById("error1");
let errorNode2=document.getElementById("error2"); 
let errorNode3=document.getElementById("error3");
let errorNode4=document.getElementById("error4");
let array=[errorNode1,errorNode2,errorNode3,errorNode4];
for(let node of array){
  node.style.color="red";
}

function validate1(){
    let name=nameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(name===''){
        errorNode1.innerHTML="<small>Name is required</small>";
        nameNode.style.border="2px solid red";

    }
    else if(regex.test(name)==false){
        errorNode1.innerHTML="<small> Name must have only letters</small>";
        nameNode.style.border="2px solid red";

    }
    else{
        nameNode.style.border="2px solid green";

    }
}

function validate2(){
    let uname=unameNode.value;
    errorNode2.innerHTML="";
    if(uname===''){
        errorNode2.innerHTML="<small>username is required</small>";
        unameNode.style.border="2px solid red";

    }
    else if(uname.length<3 || uname.length>10){
        errorNode2.innerHTML="<small>username must be 3 to 10 characters long</small>";
        unameNode.style.border="2px solid red";

    }
    else{
        unameNode.style.border="2px solid green";

    }
}

function validate3(){
    let email=emailNode.value;
    errorNode3.innerHTML="";
    if(email===''){
        errorNode3.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode3.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
    }
    else{
        emailNode.style.border="2px solid green";
    }
}

function validate4(){
    let pass=passNode.value;
    errorNode4.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode4.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode4.innerHTML="<small>Password should be 6 to 12 characters long Password should have atleast</small>";
        let ulNode=document.createElement('ul');
        errorNode4.append(ulNode);
        ulNode.style.fontSize="10px";
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let val of ar){
            let liNode=document.createElement('li');
            liNode.textContent=val;
            ulNode.append(liNode);
        }
        passNode.style.border="2px solid red";
        return false;
    }
    else{
        passNode.style.border="2px solid green";
        return true;
    }
}