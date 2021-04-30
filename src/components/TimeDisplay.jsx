import React from 'react';

const TimeDisplay = (props) => {
  const { beatsInOneMinute, divider, multiplier, noteLength } = props;
  
  return (
    <div>
      <p>{`${noteLength} is ${Math.round((beatsInOneMinute / divider) * multiplier)} ms`}</p>
    </div>
  );
};

export default TimeDisplay;
