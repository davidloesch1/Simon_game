Simon Game!

The Classic Memory Game of memorizing patterns with added difficulty levels

MOTIVATION:
This was a school project that was meant to utilize the development tools that we have studied thus far in the course.  Languages used in this project consist of HTML, CSS, and JavaScript.  

BUILD STATUS:
For the most part, this build is complete.  There are always extra design features that could be implemented, and if they're cool and contribute to the overall user experience in the game, then of course they can be merged.  At this point, there are two areas that would likely be considered.  Overall layout and UI/UX and a known logical flaw exposure.  See KNOWN ISSUES.

TECH USED:
This program is meant to run on most browsers.  As it is, it should run on all the known popular browsers with modern updates.  Programming languages used are:
    - HTML
    - CSS 
    - JavaScript

INSTALLATION: 
No installation is required at this point, the program should be able to be forked, copied, and run on your local machine on a browser.

KNOWN ISSUES:
1 - Timing:  There is a timing bug that hasn't been worked out.  It happens when the user clicks too fast and the system can't keep up.  This causes the script to be thrown off its checks and throws an incorrect "wrong box" modal to pop up at the wrong time, even if the user clicked the correct button

2 - Sizing:  This project wasn't designed to scale for phone play.  Could be a possible upgrade feature to work on.

CODE SAMPLE: The below is a sample of code that operates as the logic for tracking user clicks.  Code comments are included for.



//this tracks the user clicks and compares it to the 
//position of the gameMemory array
function userClick(event){
    let target = event.target
    myGame.user.push(target)
    let i = myGame.user.length - 1
    if(myGame.user[i] === myGame.game[i]){
        if(myGame.user.length === myGame.game.length){
            myGame.user = []
            myGame.level ++
            level.innerHTML = "Level - " + myGame.level
            myGame.createGameMemory()
        }
    } else {
        document.querySelector("#tryAgain").style.display = "flex"
    }
}

UNFORESEEN COMPLICATIONS: I had more trouble than I thought I would in two areas.
1 - Timing issue.  Javascript is synchronous and making it pause to show the user the pattern turned out to be a little more difficult than I thought it would be.  I approached the problem with several types of solutions, such as a recursive setTimeout Method, which may actually be a better solution than the current one, another solution was to literally have a for loop that counted out to 1000 (or any number) in order to slow the system down for a second for the user to see the pattern.  Otherwise it would go to fast for the naked eye and be indistinguishable.  The current solution is setInterval that calls an "on" "off" type function every second and has a counter to ensure its called for both the on and the off.  This lends itself to exposure for the user to click along as the game is progressing.

2 - User Clicks.  I had conceptually how the program should run, which was correct, it just took a little longer to formulate the logic in code than I initially thought.  In the end, I finally got the patterns arrays to match and work correctly.
