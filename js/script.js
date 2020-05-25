var text = ["Big Data", "Machine Learning", "Artificial Intelligence"];
var counter = 0;
var elem = document.getElementById("welcome-change");
var inst = setInterval(change, 1000);

function change() {

    $('#welcome-change').animate({'opacity': 0}, 1000, function () {
        $(this).text(text[counter]);
    }).animate({'opacity': 1}, 1000);


    // $("#welcome-change").fadeOut(3000, changeText());
    // function changeText() {
    //     $("#welcome-change").text text[counter]
    // }
    // $("#welcome-change").fadeIn("slow")
    counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

// elem.innerText= "hello this is a test"