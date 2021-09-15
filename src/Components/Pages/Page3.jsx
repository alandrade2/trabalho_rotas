import React from 'react';

import './Pages.css';
import Header from '../Headers/Header3'
import Footer from '../Footer/Footer'
import Nomes from '../Pages/Titulo'


export default function Pages() {

return (
    <div>     
        <header>
          <Header />
        </header>
        <main className="pag3">
            <Nomes texto = "MENU 3.4.3-CUTÂNEOS" />
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
)
};
