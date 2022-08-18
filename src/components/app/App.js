import Header from '../header/header';
import Chessboard from '../chessboard/Chessboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="App-main">
        <Chessboard/>
      </main>
    </div>
  );
}

export default App;
