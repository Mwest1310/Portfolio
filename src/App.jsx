import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './pages/Home';
import NoPage from  './pages/NoPage';
import './styles.scss';

// Sets the routes for the homepage as well as handling 404 cases
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;