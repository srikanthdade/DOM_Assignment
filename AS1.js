let name1=document.getElementById("name");
let email1=document.getElementById("E-mail");
function show(){
    if(name1.value==="" || email1.value===""){
        alert("Please fill every field!");
    }
    else{
        console.log("hello");
        var ele1 = document.getElementById("frame");
        ele1.src = "https://i.pinimg.com/originals/a2/4d/a2/a24da253e2daf552a6fdecb78f08043e.gif ";
        ele1.style.borderRadius = "25px";
        setTimeout(next, 4000);
    }
}
function next(){
    console.log("hello");
    var ele2 = document.getElementById("frame");
    ele2.src = "https://cdn1.smartprix.com/rx-iF36i4RVU-w1200-h1200/F36i4RVU.jpg"
    ele2.style.borderRadius = "25px";
    setTimeout(sri, 3000);
}
function sri(){
    console.log("hello");
    var ele3 = document.getElementById("frame");
    ele3.src = "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1542256769547/41ca6e7d4ec2152499d0312206ded5b4.gif"
    ele3.style.borderRadius = "25px";
    setTimeout(hii, 8000);
}
function hii(){
    console.log("hello");
    var ele4 = document.getElementById("frame");
    ele4.src = "https://static.toiimg.com/thumb/msid-87192414,width-218,resizemode-4,imgv-/Vivo-T1-5G-128-GB-8-GB.jpg"
    ele4.style.borderRadius = "25px";
}