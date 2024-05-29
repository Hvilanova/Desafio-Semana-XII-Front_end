
import React from 'react';
import GlobalStyle from './styles/Global.ts';
import Footer from './components/outlet/footer/index.tsx';
import Header from './components/outlet/header/index.tsx';
import FormInicial from './components/sessao1/FormInicial.tsx';
import Sessao2 from './components/sessao2/FormSessao2.tsx';
import FormDrive from './components/sessao3/FormDrive.tsx';



  <React.StrictMode>
    <GlobalStyle/>
    <div>
    <Header/>
    <FormInicial/>
    </div>
    <div>
    <Sessao2/>
    </div>
    <div>
    <FormDrive/>
    </div>
    <Footer/>
  </React.StrictMode>

