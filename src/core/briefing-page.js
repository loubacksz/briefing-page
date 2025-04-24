const briefing = document.getElementById('briefing');
const nome = document.getElementById('name');
const cpf = document.getElementById('cpf');
const enviar = document.getElementById('submit');
let supposedCurrentTime = 0;

/*
    // timeupdate - fires when the current playback position has changed
briefing.addEventListener('timeupdate', function() {
    // seeking property returns whether the user is currently seeking in the audio/video. default: false
    // ! - logical operator 'NOT'. NOT false = true
    if (!briefing.seeking) {
        supposedCurrentTime = briefing.currentTime;
    }
});

  // nao deixa avançar o video
  // seeking - fires when the user starts moving/skipping to a new position in the audio/video
briefing.addEventListener('seeking', function() {
    var delta = briefing.currentTime - supposedCurrentTime;
    if (Math.abs(delta) > 0.01) {
        console.log("Proibido avançar");
        briefing.currentTime = supposedCurrentTime;
    }
});
*/

briefing.addEventListener('ended', () => {
    alert("Informe seus dados e responda ao questionário!")
    nome.disabled = false;
    cpf.disabled = false;
    enviar.disabled = false;
});
