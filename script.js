import { MusicTools } from "./MusicTools";

function convertMidiToFrequency() {
  const midiPitch = document.getElementById("midiInput").value;
  const frequency = MusicTools.midiPitchToFrequency(midiPitch);
  document.getElementById("freqResult");
}

function convertFrequencyToMidi() {
  const frequency = document.getElementById("freqInput").value;
  const midiPitch = MusicTools.frequencyToMidiPitch(frequency);
  document.getElementById("midiResult");
}

function convertDbfsToLinear() {
  const dbfs = document.getElementById("dbfsInput").value;
  const linear = MusicTools.dbfsToLinearAmplitude(dbfs);
  document.getElementById("linearResult");
}

function convertLinearToDbfs() {
  const linear = document.getElementById("linearInput").value;
  const dbfs = MusicTools.linearAmplitudeTodBFS(linear);
  document.getElementById("dbfsResult");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("midiToFreq");
  document.addEventListener("click", convertMidiToFrequency);
  document.getElementById("freqToMidi");
  document.addEventListener("click", convertFrequencyToMidi);
  document.getElementById("dbfsToLinear");
  document.addEventListener("click", convertDbfsToLinear);
  document.getElementById("linearToDbfs");
  document.addEventListener("click", convertLinearToDbfs);
});
