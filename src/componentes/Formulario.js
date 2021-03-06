import React,{useContext} from 'react';
import {CategoriasContext } from '../context/CategoriaContex';

const Formulario = () => {

    const {hola} = useContext(CategoriasContext);
    alert(hola)
    return ( 

        <form
            className="col-12"
        >
            <fieldset className="text-center p-4">
                <legend>Busca Bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingredientes"
                    />
                </div>

                <div className="col-md-4">

                    <select 
                        className="form-control"
                        name="categoria"
                    >
                            <option value="">-- Seleciona Categoria --</option>
                    </select>

                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />

                </div>
            </div>

        </form>

     );
}
 
export default Formulario;