import React from 'react';

export const BtnContainer = () => {
  const btnItems = [
    'AC',
    'C',
    ' Off',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '-',
    0,
    '.',
    '=',
  ];

  const handleOnClick = (val) => {
    console.log(val);
  };
  return (
    <div>
      <div className="items">
        {btnItems.map((val, i) => {
          return (
            <button
              key={i}
              className={val === '=' ? 'equalTo' : val}
              onClick={() => handleOnClick(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
};
