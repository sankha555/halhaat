import logo from './logo.svg';
import './App.css';
import Holder from './components/layout/Holder.js';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Holder></Holder>
      </div>
    </Router>
  );
}

export default App;
