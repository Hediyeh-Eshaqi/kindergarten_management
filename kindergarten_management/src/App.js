import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/screens/mainPage/Mainpage';
import Teachers from './components/screens/teachers/Teachers';
import Childrens from './components/screens/childrens/Childrens';
import Classes from './components/screens/classes/Classes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage/>} />
            <Route path="/teachers" element = {<Teachers/>} />
            <Route path="/childrens" element = {<Childrens/>} />
            <Route path="/classes" element = {<Classes/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
