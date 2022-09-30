import { Route, Routes } from 'react-router-dom';
import './App.css';
import Event from './Component/Event/Event';
import LandingPage from './Component/LandingPage/LandingPage';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
