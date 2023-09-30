let speech = new SpeechSynthesisUtterance();

let textElem = document.getElementById("text-elem");
let listenBtn = document.getElementById("listen-btn");
let selectElem = document.getElementById("voice-selector");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => {
        selectElem.options[index] = new Option(voice.name, index);
    });

};

selectElem.onchange = () => {
    speech.voice = voices[selectElem.value];
};


listenBtn.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    speech.text = textElem.value;
    window.speechSynthesis.speak(speech);
});