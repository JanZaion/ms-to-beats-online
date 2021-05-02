import React, { useState, useEffect } from 'react';
import './App.css';
import BPMinput from './components/BPMinput';
import TimeDisplay from './components/TimeDisplay';
import BeatSlider from './components/BeatSlider';
import Metronome from './components/Metronome';
import * as Tone from 'tone';

const MembraneSynth = new Tone.MembraneSynth({
  pitchDecay: 0.01,
  octaves: 10,
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.001,
    decay: 0.4,
    sustain: 0.01,
    release: 1.4,
    attackCurve: 'linear',
  },
}).toDestination();

const MsToBeats = () => {
  const [BPM, setBPM] = useState(120);
  const [oneBeat, setOneBeat] = useState(60000 / BPM);

  const changeBPM = (e) => {
    setBPM(e.target.value);
  };

  useEffect(() => {
    setOneBeat(60000 / BPM);
  }, [BPM]);

  return (
    <div>
      <BPMinput BPM={BPM} onChange={changeBPM} />
      <Metronome BPM={BPM} MembraneSynth={MembraneSynth} />
      <TimeDisplay oneBeat={oneBeat} divider={1} multiplier={4} noteLength="1 bar" />
      <TimeDisplay oneBeat={oneBeat} divider={1} multiplier={2} noteLength="1/2" />
      <TimeDisplay oneBeat={oneBeat} divider={1} multiplier={1} noteLength="1/4" />
      <TimeDisplay oneBeat={oneBeat} divider={2} multiplier={1} noteLength="1/8" />
      <TimeDisplay oneBeat={oneBeat} divider={4} multiplier={1} noteLength="1/16" />
      <TimeDisplay oneBeat={oneBeat} divider={8} multiplier={1} noteLength="1/32" />
      <TimeDisplay oneBeat={oneBeat} divider={16} multiplier={1} noteLength="1/64" />
      <TimeDisplay oneBeat={oneBeat} divider={32} multiplier={1} noteLength="1/128" />
      <BeatSlider oneBeat={oneBeat} BPM={BPM} min={0.01} max={1} step={0.01} unit="ms" />
      <BeatSlider oneBeat={oneBeat} BPM={BPM} min={1} max={100} step={0.01} unit="ms" />
      <BeatSlider oneBeat={oneBeat} BPM={BPM} min={100} max={1000} step={0.1} unit="ms" />
      <BeatSlider oneBeat={oneBeat} BPM={BPM} min={1000} max={10000} step={1} unit="ms" />
    </div>
  );
};

export default MsToBeats;
