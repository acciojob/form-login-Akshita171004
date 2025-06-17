function getFormvalue() {
    // Prevent the form from reloading the page
    event.preventDefault();function getFormvalue(event) {
  event.preventDefault(); // Prevent page reload

  const form = document.getElementById("form1");
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();

  alert(fname + " " + lname);
}


    // Get the form element
    const form = document.forms[0];

    // Get and trim the values of the input fields
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();

    // Show the full name in an alert
    alert(fname + " " + lname);
}
