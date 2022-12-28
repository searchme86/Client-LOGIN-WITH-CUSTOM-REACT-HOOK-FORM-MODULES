import React from 'react';
import TestCheckbox from './TestCheckbox';

const fruitsData = [
  { id: 0, text: '바나나' },
  { id: 1, text: '사과' },
  { id: 2, text: '키위' },
  { id: 3, text: '블루베리' },
  { id: 4, text: '단감' },
  { id: 5, text: '귤' },
];

function TestApp() {
  return (
    <>
      <ul>
        {fruitsData.map((item) => {
          return <li key={item.id}>{<TestCheckbox text={item.text} />}</li>;
        })}
      </ul>
    </>
  );
}

export default TestApp;
