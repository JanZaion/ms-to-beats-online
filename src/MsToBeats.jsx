import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import BPMinput from './components/BPMinput';
import TimeDisplay from './components/TimeDisplay';
import Slider from './components/Slider';

const MsToBeats = () => {
  const [ BPM, setBPM ] = useState(120);
  const oneMinute = 60000 / BPM;

  const changeBPM = (e) => {
    setBPM(e.target.value);
  };

  return (
    <div>
      <BPMinput BPM={BPM} onChange={changeBPM} />
      <TimeDisplay oneMinute={oneMinute} divider={1} multiplier={4} noteLength='1 bar'/>
      <TimeDisplay oneMinute={oneMinute} divider={1} multiplier={2} noteLength='1/2'/>
      <TimeDisplay oneMinute={oneMinute} divider={1} multiplier={1} noteLength='1/4'/>
      <TimeDisplay oneMinute={oneMinute} divider={2} multiplier={1} noteLength='1/8'/>
      <TimeDisplay oneMinute={oneMinute} divider={4} multiplier={1} noteLength='1/16'/>
      <TimeDisplay oneMinute={oneMinute} divider={8} multiplier={1} noteLength='1/32'/>
      <TimeDisplay oneMinute={oneMinute} divider={16} multiplier={1} noteLength='1/64'/>
      <TimeDisplay oneMinute={oneMinute} divider={32} multiplier={1} noteLength='1/128'/>
      <Slider oneMinute={oneMinute}/>
    </div>
  );
};

export default MsToBeats;
