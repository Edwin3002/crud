import React from 'react'
import '../styles/crud.css'

export const Crud = () => {
    return (
        <div>
            <form id="formulario" >
                <h2>Agregar figuras</h2>
                <div className='i'>
                    <label>Nombre</label>
                    <input id="inputNombre" name="nombre" />
                </div>
                <div className='i'>
                    <label>Precio</label>
                    <input id="inputPrecio" type="number" name="precio" />
                </div>
                <div className='i'>
                    <label>Tipo de figura</label>
                    <select className='tipo' id="selectTipo" name="tipo">
                        <option name="Original" value="Original">Original</option>
                        <option name="Replica" value="Replica">Replica</option>
                    </select>
                </div >
                <div className='i'>
                    <label>Descipción</label>
                    <textarea id="inputDescripcion" type="text" name="descripcion" />
                </div>
                <div className='i2'>
                    <label className='label2'>Imagen</label>
                    <input id="inputImagen" type="file" name="imagen" />

                </div>
                <div className='divBtn'>
                    <button className='btnSend' id="btnRegistro" type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
