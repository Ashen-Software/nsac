import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home/Home';
import Visualization from "./views/Visualization/Visualization";


function App() {

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/visualization" element={<Visualization />} /> 

      </Routes>
    </BrowserRouter>
  
  )
}

export default App;
