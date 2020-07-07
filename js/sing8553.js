
//class store data for ini
class MyData {
    constructor(initial, element, image) {
        this.initial = initial;
        this.element = element;
        this.image = image;
    };
}




//array of ele
var elements = new Array();
elements.push(new MyData("S", "Sword", "sword.jpg"));
elements.push(new MyData("I", "Icecream", "icecream.jpg"));
elements.push(new MyData("N", "nine", "nine.jpg"));
elements.push(new MyData("G", "GTA5", "gta5.jpg"));
elements.push(new MyData("S", "Server", "server.jpg"));
elements.push(new MyData("A", "Apple", "apple.jpg"));
elements.push(new MyData("R", "Ram", "ram.jpg"));
elements.push(new MyData("B", "ball", "ball.jpg"));

function upperCase(a)
{
    setTimeout(function(){
    a.value = a.value.toUpperCase();
    },1)
}

//on webpage load
$(document).ready(
    function () {
        var name = `Sarbjot Singh`;
        var id = `991539413`;
        var loginId = `sing8553`;
        localStorage.setItem("name", name);
        localStorage.setItem("id", id);
        localStorage.setItem("loginId", loginId);

        //adding text to header
        $("#heading").html(`<h1> ${name} </h1>  `);

        //adding text to footer
        $("#foot").html(`<h3>id: ${id} LoginID: ${loginId}`);

        for(let x of elements)
        {
            $(".LeftArea").append(`
            <section title='${x.initial}'>
            ${x.initial} is for ${x.element} 
            <img src="images/${x.image}">
            </section>
            `);
        }

        

        $("#toggleClass").click(
            function()
            {
                var value = $("#userInput").val();
               $(`section[title = ${value}]`).toggle();
            }

        );

        $("#changeFormat").click(
            function()
            {
                $(".LeftArea").toggleClass("format");
            }
        )
    }

);