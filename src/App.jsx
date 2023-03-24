import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            {/* Public Route */}
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
