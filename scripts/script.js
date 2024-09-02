// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }
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

