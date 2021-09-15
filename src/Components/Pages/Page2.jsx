import React from 'react';

import './Pages.css';
import Header from '../Headers/Header2'
import Footer from '../Footer/Footer'
import Nomes from '../Pages/Titulo'


export default function Pages() {

return (
    <div>     
        <header>
          <Header />
        </header>
        <main className="pag2">
           <Nomes texto = "MENU 3.4-SUPERIORES" />
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
)
};
