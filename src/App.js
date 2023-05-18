import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
