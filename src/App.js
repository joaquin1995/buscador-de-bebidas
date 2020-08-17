import React, {Fragment} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import CategoriasProvider from './context/CategoriaContex';

function App() {
  return (
    <CategoriasProvider >
    
       <Header />  
        <div className="container mt-5">
          <div className="row">
             <Formulario />
          </div>
        </div>

    </CategoriasProvider>
  );
}

export default App;
