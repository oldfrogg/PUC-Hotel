import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import PageReservas from './PageReservas'
import PagePagamento from './PagePagamento';
import ScrollToTop from './componentes/ScrollToTop/ScrollToTop';
import Header from './componentes/Header/Header';


function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/reservas' element={<PageReservas />} />
          <Route path='/pagamento/:quarto/:diarias/:entrada/:saida' element={<PagePagamento />} />
      </Routes >
    </>
  );
}

export default App;
