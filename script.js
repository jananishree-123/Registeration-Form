function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const dept = document.getElementById('dept').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;

    if (name == "" || dob == "" || dept == "" || address == "" || email == "" || contact == "") {
        alert("Please fill all fields!");
        return; 
    }

    const regNo = "REG" + Math.floor(Math.random() * 10000);

    alert(
        "Registration Successful!\n\n" +
        "Reg No: " + regNo + "\n" +
        "Name: " + name + "\n" +
        "Email: " + email
    );
    
    document.getElementById('regForm').reset();
}
