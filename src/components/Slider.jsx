import React, { useState, useEffect } from 'react';

const Slider = ({ beatsInOneMinute }) => {
  const [ ms, setMs ] = useState();
  const [ beats, setBeats ] = useState();

  useEffect(() => {
      setBeats(ms*beatsInOneMinute)
      return () => {
        //   cleanup
      }
  }, [ms])

  useEffect(() => {
    setMs(beats*beatsInOneMinute)
    return () => {
      //   cleanup
    }
}, [beats])


  return (
    <div>
      <input type="range" min="0.1" max="1000" defaultValue={1} onChange={(e) => setMs(e.target.value)}></input>
      <p>{`ms: ${ms}`}</p>
      <input type="range" min="0.1" max="1000" defaultValue={1} onChange={(e) => setBeats(e.target.value)}></input>
      <p>{`beats: ${beats}`}</p>
    </div>
  );
};

export default Slider;
