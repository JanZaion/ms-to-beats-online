import React from 'react';

const TimeDisplay = (props) => {
  const { oneBeat, divider, multiplier, noteLength } = props;

  return (
    <div>
      <p>{`${noteLength} is ${Math.round((oneBeat / divider) * multiplier)} ms`}</p>
    </div>
  );
};

export default TimeDisplay;
