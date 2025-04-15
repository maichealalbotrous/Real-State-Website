import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Properties from './pages/properties/Properties';
import Property from './pages/property/Property';
;
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/Properties' element={<Properties/>}/>
          <Route path='/Properties/:id' element={<Property/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
