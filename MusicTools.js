const MusicTools = {
  midiPitchToFrequency(midiPitch) {
    return 440 * Math.pow(2, (midiPitch - 69) / 12);
  },
  frequencyToMidiPitch(frequency) {
    return 69 + 12 * Math.log2(frequency / 440);
  },
  dbfsToLinearAmplitude(dbfs) {
    linear = Math.pow(10, dbfs / 20);
  },
  linearAmpTodBFS(linear) {
    return 20 * Math.log(linear);
  },
};

export { MusicTools };
