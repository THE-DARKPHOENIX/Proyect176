var gameOver = false

$(".clickable").click(function (){
    var correcGuess = false;

    let id = $(this).attr("id");

    var life = parseInt($("#life").text())

    for(var i = 0; i<randomword.word.length; i++){

        if(randomword.word.charAt(i).toLowerCase() == id){

            if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){

                $(".fill_blanks").eq(i).html(id);
                correcGuess=true;

                if($("#blanks").text()=== randomword.word.toLowerCase()){

                    $("#result").text("¡Ganaste!")

                    correcGuess = true;
                    gameOver = true
                }
            }
        }
    }

})