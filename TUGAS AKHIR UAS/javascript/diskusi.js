$(document).ready(function() {
    $(".container-form").hide();
    $("#ask").click(function() {
        $(".topquestion").css('width', '50%');
        $(".container-form").fadeIn("slow");

    })
})