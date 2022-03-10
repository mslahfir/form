function validate(e) {
  const form = document.querySelector("#form");
  const formData = new FormData(form);

  e.preventDefault();

  const Nameregex = /^[a-zA-Z]+$/;
  const Phoneregex = /^\d+$/;
  if (!Nameregex.test(formData.get("empName"))) {
    alert("Employee name should contain only alphabetic characters");
  } else if (!Phoneregex.test(formData.get("Ph No"))) {
    alert("Employee Phone number should contain only numbers");
  } else {
    alert("Successfully Registered");
  }

  console.log(empName);
}
