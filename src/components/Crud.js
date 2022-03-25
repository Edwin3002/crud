import axios from 'axios';
import React, { useState } from 'react'
import { fileUpload } from '../helpers/fileUpload';
import { urlFiguras } from '../helpers/Url';
import '../styles/crud.css'

export const Crud = () => {

    ///estado principal de figura
    const [figura, setfigura] = useState({
        nombre: '',
        precio: '', 
        categoria: 'Original',
        resumen:'',
        img: ''
    })

    let { nombre, img, categoria, precio, resumen} = figura;

///cambia el estado de figura con onChange
    const estadoInput = ({target}) =>{
        setfigura({
            ...figura,
            [target.name]: target.value
        })
    }

//estado de la imagen
const estadoImg = e => {
    console.log(e.target);
    const file = e.target.files[0]
    fileUpload(file)
        .then(resp => {
            figura.img = resp
        }).catch(error => {
            console.log(error);
        })
}

    ///recoge los datos y posteriormente llama a la funcion de POST
    
    const subirDatos = e => {
        // e.preventDefault()
        console.log(figura)
        
        postData()
        setfigura({
            nombre: '',
            tipo: '',
            numero: '',
            telefono: '',
            celular: '',
            direccion: '',
            imagen: ''
        })
    }

    ///espera a cargar la imagen
    const time = e =>{
        e.preventDefault()
    setTimeout(subirDatos, 5000)
    }
///subir datos a la api con POST
    const postData = () => {
        axios.post(urlFiguras, figura)
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form id="formulario" onSubmit={time}>
                <h2>Agregar figuras</h2>
                <div className='i'>
                    <label>Nombre</label>
                    <input id="inputNombre" name="nombre" value={nombre} onChange={estadoInput}/>
                </div>
                <div className='i'>
                    <label>Precio</label>
                    <input id="inputPrecio" type="number" name="precio" value={precio} onChange={estadoInput}/>
                </div>
                <div className='i'>
                    <label>Tipo de figura</label>
                    <select className='tipo' id="selectCategoria" name="categoria" value={categoria} onChange={estadoInput}>
                        <option name="Original" value="Original">Original</option>
                        <option name="Replica" value="Replica">Replica</option>
                    </select>
                </div >
                <div className='i'>
                    <label>Descipción</label>
                    <textarea id="inputResumen" type="text" name="resumen" value={resumen} onChange={estadoInput}/>
                </div>
                <div className='i2'>
                    <label className='label2'>Imagen</label>
                    <input id="inputImag" type="file" name="img" value={img} onChange={estadoImg}/>

                </div>
                <div className='divBtn'>
                    <button className='btnSend' id="btnRegistro" type='submit'>Cargar datos</button>
                </div>
            </form>
        </div>
    )
}
