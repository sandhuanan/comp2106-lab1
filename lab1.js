
var userselection = prompt("choose ROCK PAPER SCISSORS");
var compselection = Math.random();
if(compselection <= 0.34)
{
    compselection ="PAPER";
}
else if(compselection > 0.34 && compselection < 0.68)
{
    compselection ="SCISSORS";
}
else if(compselection >= 0.68)
{
    compselection ="ROCK";
}
console.log("User selection is " + userselection);
console.log("Computer selection is " + compselection);
var selection = function(x, y) {
    if (x === y) {
        return "It's a tie";
    }
    if(x === "ROCK") {
        if(y === "SCISSORS") {
            return "User wins";
        } else {
            return "Computer wins";
        }
    }
    if (x === "PAPER") {
        if (y === "ROCK") {
            return "User wins";
        } else {
            return "Computer wins";
        }
        if (x === "SCISSORS") {
            if (y === "ROCK") {
                return "Computer wins";
            } else {
                return "User wins";
            }
        }
    }
};
var total = selection(userselection, compselection);
console.log(total);