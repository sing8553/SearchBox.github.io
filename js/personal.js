$(document).ready(
    function()
    {
        var name  = localStorage.getItem("name");
        var number  = localStorage.getItem("id");
        var id = localStorage.getItem("loginId");

        $("#name").html(`My Name is: ${name}`);
        $("#snumber").html(`My Student Number is: ${number}`);
        $("#slogin").html(`My Sheridan Login is: ${id}`);
        console.log("working");
    }
)
