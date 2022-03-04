$( document ).ready(function() {
    $("#form").submit(function(){
        const formData = new FormData($(this));
        console.log(formData.get("email"))
    })
});