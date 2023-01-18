
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './common/footer';
import Header from './common/header';

import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
