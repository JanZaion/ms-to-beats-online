import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

const Metronome = ({ BPM, MembraneSynth }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    switch (play) {
      case true:
        Tone.Transport.start();

        const loopKick = new Tone.Loop((time) => {
          MembraneSynth.triggerAttackRelease('C2', '8n', time);
        }, '4n').start(0);
        break;

      case false:
        Tone.Transport.cancel();
        break;
    }
  }, [play]);

  useEffect(() => {
    Tone.Transport.bpm.value = parseFloat(BPM);
  }, [BPM]);

  return (
    <div>
      <button onClick={() => setPlay(!play)}>{play ? 'stop' : 'play'}</button>
    </div>
  );
};

export default Metronome;
