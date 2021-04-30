import React, { useState } from 'react';

const Slider = ({ oneMinute }) => {
  const [beats, setBeats] = useState();
/*
Whings to add:
-make the slider display s, ms and log scale
-change 1 bar to one beat
-refactor to es 6
*/
  const handleChange = (e) => {
    let currentValue;
    let parameter;

    if (parameter === 'ms') {
      currentValue = e.target.value;
    } else {
      currentValue = e.target.value * 1000;
    }

    if (oneMinute >= currentValue) {
      setBeats(currentValue + ' ms = 1/' + (oneMinute / currentValue).toFixed(2) + ' of a bar');
    } else if (oneMinute < currentValue) {
      let bars = Math.floor(currentValue / oneMinute);
      let rest = currentValue - bars * oneMinute;

      if (bars === 1) {
        setBeats(currentValue + ' ms = ' + bars + ' bar and ' + '1/' + (oneMinute / rest).toFixed(2) + ' of a bar');
      } else {
        setBeats(currentValue + ' ms = ' + bars + ' bars and ' + '1/' + (oneMinute / rest).toFixed(2) + ' of a bar');
      }
    }
  };

  return (
    <div>
      <input type="range" min="0.1" max="1000" defaultValue={1} onChange={(e) => handleChange(e)}></input>
      <p>{`beats: ${beats}`}</p>
    </div>
  );
};

export default Slider;
