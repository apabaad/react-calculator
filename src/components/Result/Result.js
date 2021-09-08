import React from 'react';

export const Result = ({ result, setOff }) => {
  const clsNm = setOff ? 'screen screenOff' : 'screen';

  return (
    <div id="result" className={clsNm}>
      {result || '0.00'}
    </div>
  );
};
