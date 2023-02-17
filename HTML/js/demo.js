function link_page() {
    var name=document.getElementById("UserName").value;
    var pass=document.getElementById("Password").value;
    //helps us to link two pages
    
    if (name=="Balu"&&pass=="balu@123") {
        alert("Hello "+name+" Login Successfully");
        window.location.assign("Home.html");
    } else {
        window.location.assign("Register.html");
        alert(name+" plse enter valid password");
    }
    
}
function ImageChange() {
    // have to check how to change backgroundimge using same method 
    //it's used to change only attribute value 
    document.getElementById("img2").src="img/alternative.PNG";
    document.getElementById("body").style.color="white";
}
function load_reg(callback) {
    callback();
    // window.location.assign("Register.html");
}
function reg(){
    load_reg(ImageChange);
}