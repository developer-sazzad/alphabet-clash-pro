// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }


// Score Incrase Function Start 
function handleKeyboardEvent(event){
    // get Keyboard pressed button
    const playerPressed = event.key;

    // Get Expected alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // console.log(playerPressed, expectedAlphabet);

    // Check Right or Wrong Keyboard Key
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementById('current-score');
        // console.log(currentScore);

        const updatedValue = currentScore + 1;
        setTextElementById('current-score', updatedValue);

        // console.log('You Win.');
        // update Score
        // 1. get the current Score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreString = currentScoreElement.innerText;
        //  const currentScore = parseInt(currentScoreString);
        //  console.log(currentScore);

        //  2. incrace the score by 1
        //  const inscraseScore = currentScore + 1;
        //  3. show the update score
        //  currentScoreElement.innerText = inscraseScore;
        // Start New Round
        removeBackgroundColorById(expectedAlphabet);
        playGame();
    }else{
        console.log('Dhur Miya..!');
        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);
        
        if(updatedLife === 0){
            gameOver();
        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeString = currentLifeElement.innerText;
        // if(currentLifeString >= 1){
        //     const diScraseLife = currentLifeString - 1;
        //     currentLifeElement.innerText = diScraseLife;
        // }
   
        // console.log('You Lost your life.')
    }

}
document.addEventListener('keyup', handleKeyboardEvent);
// Score Function End



function playGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}
function play(){
    hideElementById('home-screen');
    hideElementById('final-score-board')
    showElementById('playground');
    
    // Reset Life and Score board
    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)
    playGame();

}

function gameOver(){
    hideElementById('playground');
    showElementById('final-score-board');

    const lastScore = getTextElementById('current-score');
    setTextElementById('game-score', lastScore);

    // clear the last seleted alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
// function gameOver(){
//     hideElementById('play-ground');
//     showElementById('final-score');
//     // update final score
//     // 1.get the final score
//     const lastScore = getTextElementValueById('current-score');
//     console.log(lastScore);
//     setTextElementValueById('last-score', lastScore);

//     // clear the last selected alphabet highlight
//     const currentAlphabet = getElementTextById('current-alphabet');
//     // console.log(currentAlphabet);
//     removeBackgroundColorById(currentAlphabet);
// }

