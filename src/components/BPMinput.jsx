import React, { useEffect, useRef } from 'react';

const BPMinput = (props) => {
  const { BPM, onChange } = props;
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputEl} defaultValue={BPM} onChange={onChange} type="number" />
    </div>
  );
};

export default BPMinput;
