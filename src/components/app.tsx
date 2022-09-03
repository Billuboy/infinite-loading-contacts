import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '@pages/login';
import Home from '@pages/home';
import { LoginRoute, PrivateRoute } from '@guards';
import Header from './header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRoute element={<Login />} />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
