import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/screens/mainPage/Mainpage';
import ClassManagement from './components/screens/classes/ClassManagement';
import AddChild from './components/screens/forms/AddChild';
import AddClass from './components/screens/forms/AddClass';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/add-child" element={<AddChild />} />
            <Route path="/add-class" element={<AddClass />} />
            <Route path="/classes/1" element={<ClassManagement />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;