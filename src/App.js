import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/screens/mainPage/Mainpage';
import ClassManagement from './components/screens/classes/ClassManagement';
import AddChild from './components/screens/forms/AddChild';
import AddClass from './components/screens/forms/AddClass';
import Navbar from './components/Navbar';
import TeachersInfo from './components/screens/teachers/TeachersInfo';

function App() {
  return (
    <div>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/add-child" element={<AddChild />} />
            <Route path="/add-class" element={<AddClass />} />
            <Route path="/classes/:id" element={<ClassManagement />} />
            <Route path="/teachers/:id" element={<TeachersInfo />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
