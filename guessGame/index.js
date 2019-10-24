let generatedNum
var count = 0;
var blue = document.createElement("img");
blue.src = "https://www.vmea.com/images/2018/10/14/128hqr.jpg"

let btnClck = document.getElementById("button")
btnClck.addEventListener('click', () => {
    getRandonNum()
})

let btnClck2 = document.getElementById("button2")
btnClck2.addEventListener('click', () =>{
    check_guess();
})

function getRandonNum() {
    //step one: get random number
    generatedNum = Math.floor(Math.random() * 15) + 1;
}

function check_guess() {
    console.log("the number is " + generatedNum)
    var guess_input = document.getElementById("myGuess").value;

    //step two: compare that number with the number the user guesse
    if ((guess_input < 1) || (guess_input > 15)) {
        alert("Please enter a number between 1 and 15");
        return false;
    }
    //step three: decide if its high low or spot on
    else if (guess_input < generatedNum) {
        count++;
        document.getElementById("count").innerHTML = count;

        document.getElementById("response").innerHTML = "You guessed too low"
    }
    else if (guess_input > generatedNum) {
        count++
        document.getElementById("count").innerHTML = count;

        document.getElementById("response").innerHTML = "You guessed too high"
    }
    else{
        count++;
        document.getElementById("response").innerHTML = "You guessed it! It took you " + count + " guesses";
        if(count < 4){
            document.getElementById("ribbon").innerHTML = "you get a blue ribbon"
            document.appendChild(blue);
            document.getElementById("count").innerHTML = count;
        }
        else if(count > 3 && count < 7){
            document.getElementById("ribbon").innerHTML = "You get a red ribbon"
            document.appendChild(blue);
            document.getElementById("count").innerHTML = count;
        }
        else if(count > 7){
            document.getElementById("ribbon").innerHTML = "You get a yellow ribbon"
            document.appendChild(blue);
            document.getElementById("count").innerHTML = count;
        }

        }
        return true;
    }//end if else statements

