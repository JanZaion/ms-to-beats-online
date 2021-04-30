import React from 'react';

const TimeDisplay = (props) => {
  const { oneMinute, divider, multiplier, noteLength } = props;

  return (
    <div>
      <p>{`${noteLength} is ${Math.round((oneMinute / divider) * multiplier)} ms`}</p>
    </div>
  );
};

export default TimeDisplay;
