$(document).ready(function () {
 
});
$("#form").submit(function (e) {
    e.preventDefault();
    var regex = /^[a-zA-Z ]*$/;
    const form = $("#form");
    const formData = new FormData(form);
    console.log(formData.get("email"));
  });