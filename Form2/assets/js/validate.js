$( document ).ready(function() {
    $("#form").submit(function(e){
        e.preventDefault();
        const formData = new FormData($("#form"));
        console.log(formData.get("email"))
    })
});