

function hideElementById(elementId) {
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}

function showElementById(elementId) {
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400')
}

function removeBackgroundColorById(elementId){
    const removeBg = document.getElementById(elementId);
    removeBg.classList.remove('bg-amber-400');
}


function getRandomAlphabet() {
    // Arrary theke later alada korar jonno
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // Random Number Genarate
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    // alphabet er index ber kora
    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;
}