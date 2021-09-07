import { BtnContainer } from './components/btn-container/BtnContainer';
import './App.css';
import { Result } from './components/Result/Result';

function App() {
  return (
    <div>
      <nav></nav>
      <div className="container">
        <div className="text">Prank your people with our calculator</div>
        <div className="calc-main-div">
          <Result />
          <BtnContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
