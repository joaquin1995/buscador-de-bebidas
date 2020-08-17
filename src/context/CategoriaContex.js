import React,{createContext, useState} from 'react';

// crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran lass funciones y state

const CategoriasProvider = (props) =>{

    // crear el state del Context
    const [hola, guardarHola] = useState('hola desde state');

    return(

        <CategoriasContext.Provider
            value={{
                hola,
                guardarHola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>

    )
}

export default CategoriasProvider;
