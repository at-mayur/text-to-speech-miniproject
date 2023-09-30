
// creating SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();


// fetching all elements
let textElem = document.getElementById("text-elem");
let listenBtn = document.getElementById("listen-btn");
let selectElem = document.getElementById("voice-selector");

let voices = [];

// On voice list load
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // set default voice i.e. firts voice from list
    speech.voice = voices[0];

    // update voice list
    voices.forEach((voice, index) => {
        selectElem.options[index] = new Option(voice.name, index);
    });

};


// when user selects another voice
selectElem.onchange = () => {
    speech.voice = voices[selectElem.value];
};


// playing voice on btn click
listenBtn.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    speech.text = textElem.value;
    window.speechSynthesis.speak(speech);
});