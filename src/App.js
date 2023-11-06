import React from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFund from './pages/NotFund';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/competence" exact element={<Knowledges/>}/>
        <Route path="/portfolio" exact element={<Portfolio/>}/>
        <Route  component={NotFund}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;