import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Outlet from './components/outlet';
import Home from './pages/home';
import PaginaError from './pages/paginaError';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PaginaError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;