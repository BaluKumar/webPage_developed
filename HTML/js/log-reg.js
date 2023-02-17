//register page 
    var fname=document.getElementById("First_Name").value;
    var sname=document.getElementById("Last_Name").value;
    var phone=document.getElementById("Phone_Number").value;
    var mail=document.getElementById("Email").value;
    var confPass=document.getElementById("Confirm_Password").value;
    var pass=document.getElementById("Pass").value;
function link_page() {
    
    //helps us to link two pages
    
    
    if (fname!=""&&sname!=""&&phone!=""&&mail!=""&&confPass!=""&&pass!="") {
        if (confPass==pass&&fname!=sname) {
            alert("Hello "+fname+" Login Successfully");
            window.location.assign("Home.html");
        } else {
            alert(fname+" plse enter valid input");
        }
    } else {
        alert("Enter valid  input");
    }
}

// login page code
function link_page() {
    var name=document.getElementById("UserName").value;
    var password=document.getElementById("Password").value;
    //helps us to link two pages
    
    if (name==fname&&password==pass) {
        alert("Hello "+name+" Login Successfully");
        window.location.assign("Home.html");
    } else {
        window.location.assign("Register.html");
        alert(name+" dosen't existed");
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