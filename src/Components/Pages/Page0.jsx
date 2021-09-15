import React from 'react';

import './Pages.css';
import Header from '../Headers/Header0'
import Footer from '../Footer/Footer'
import Nomes from '../Pages/Titulo'


export default function Pages() {

return (
    <div>     
        <header>
          <Header />
        </header>
        <main className="pag0">
            <Nomes texto="MENU PRINCIPAL"/>
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
)
};
