// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }
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
        console.log('You Win.');
        // update Score
        // 1. get the current Score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreString = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreString);
        console.log(currentScore);

        // 2. incrace the score by 1
        const inscraseScore = currentScore + 1;
        // 3. show the update score
        currentScoreElement.innerText = inscraseScore;
        // Start New Round
        removeBackgroundColorById(expectedAlphabet);
        play();
    }else{
        console.log('You Lost your life.')
    }

}
document.addEventListener('keyup', handleKeyboardEvent);





function playGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('playground');
    playGame();
    
}

