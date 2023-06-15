import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact />
          {/* <h1>Anubhuti Rasaya</h1> */}
          {/* Add additional components or content here */}
        </Routes>

      </Router>
    </>
  );
}


export default App;
