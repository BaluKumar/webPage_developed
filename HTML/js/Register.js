function link_page() {
    var fname=document.getElementById("First_Name").value;
    var sname=document.getElementById("Last_Name").value;
    var phone=document.getElementById("Phone_Number").value;
    var mail=document.getElementById("Password").value;
    var confPass=document.getElementById("Confirm_Password").value;
    var pass=document.getElementById("Password").value;
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