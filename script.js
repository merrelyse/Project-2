import { MusicTools } from "./MusicTools.js";

function convertMidiPitchToFrequency() {
  const midiPitch = document.getElementById("midiInput").value;
  const frequency = MusicTools.midiPitchToFrequency(midiPitch);
  document.getElementById("freqResult").innerText = frequency;
}

document
  .getElementById("midiToFreq")
  .addEventListener("click", convertMidiPitchToFrequency);

function convertFrequencyToMidiPitch() {
  const frequency = document.getElementById("freqInput").value;
  const midiPitch = MusicTools.frequencyToMidiPitch(frequency);
  document.getElementById("midiResult").innerText = midiPitch;
}

document
  .getElementById("freqToMidi")
  .addEventListener("click", convertFrequencyToMidiPitch);

function convertDbfsToLinearAmplitude() {
  const dbfs = document.getElementById("dbfsInput").value;
  const linearAmp = MusicTools.dbfsToLinearAmplitude(dbfs);
  document.getElementById("linearResult").innerText = linearAmp;
}

document
  .getElementById("dbfsToLinear")
  .addEventListener("click", convertDbfsToLinearAmplitude);

function convertLinearAmplitudeToDBFS() {
  const linearAmp = document.getElementById("linearInput").value;
  const dbfs = MusicTools.linearAmpTodBFS(linearAmp);
  document.getElementById("dbfsResult").innerText = dbfs;
}

document
  .getElementById("linearToDbfs")
  .addEventListener("click", convertLinearAmplitudeToDBFS);

//used chatGPT to check for mistakes
