import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/Forms/SignUp';
import Plans from './Components/Forms/Plans';
import Social from './Components/Forms/Social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Plans' element={<Plans />} />
          <Route path='/Social' element={<Social />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
