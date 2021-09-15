import React from 'react';

import './Pages.css';
import Header from '../Headers/Header1'
import Footer from '../Footer/Footer'
import Nomes from '../Pages/Titulo'


export default function Pages() {

return (
    <div>     
        <header>
          <Header />
        </header>
        <main className="pag1">
            <Nomes texto="MENU 3-MUSCULAR"/>
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
)
};
