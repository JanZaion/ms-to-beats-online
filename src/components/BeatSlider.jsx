import React, { useState, useEffect } from 'react';
//improve -> make into a single log scale, https://codesandbox.io/s/zq6nz19kp?file=/input-range/range.js
const BeatSlider = (props) => {
  const { oneBeat, min, max, step, unit } = props;
  const [value, setValue] = useState(min);
  const [beats, setBeats] = useState(min);

  useEffect(() => {
    setBeats(value / oneBeat);
  }, [value, oneBeat]);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={min}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <p>
        {parseFloat(value).toFixed(2)} {unit} = {beats.toFixed(5)} beats
      </p>
    </div>
  );
};

export default BeatSlider;
