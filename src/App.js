import { useState } from 'react';
import { BtnContainer } from './components/btn-container/BtnContainer';
import './App.css';
import { Result } from './components/Result/Result';

function App() {
  const [textToDisplay, setTextToDisplay] = useState('');
  const [setOff, changeOffStatus] = useState(false);
  const [offButton, changeToOn] = useState('Off');

  const handleOnClick = (val) => {
    if (val == 'AC') {
      return setTextToDisplay('');
    }
    if (val == 'C') {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }
    if (val == '=') {
      return onTotal();
    }

    if (val === 'Off') {
      setTextToDisplay('');
      changeOffStatus(!setOff);
      changeToOn('On');
      return;
    }
    if (val === 'On') {
      setTextToDisplay('');
      changeOffStatus(!setOff);
      changeToOn('Off');
      console.log(offButton);
      return;
    }

    setTextToDisplay(textToDisplay + val);
  };

  const onTotal = () => {
    const total = eval(textToDisplay);
    const total1 = total.toString();
    setTextToDisplay(total1);
  };

  return (
    <div>
      <nav></nav>
      <div className="container">
        <div className="text">Prank your people with our calculator</div>
        <div className="calc-main-div">
          <Result result={textToDisplay} setOff={setOff} />
          <BtnContainer
            handleOnClick={handleOnClick}
            offButton={offButton}
            setOff={setOff}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
