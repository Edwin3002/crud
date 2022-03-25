import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import '../styles/listar.css';
import { urlFiguras } from '../helpers/Url';
import axios from 'axios';

export const Listar = () => {
    const [figuras, setfiguras] = useState([]);

    const getData = () => {
        axios.get(urlFiguras)
            .then(response => {
                console.log(response.data);
                setfiguras(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, []);

    //borrar
    const deleteData = (id) => {
        axios.delete(urlFiguras + id)
            .then(response => {
                getData()
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg'>
            <h1 className=' titulo'>Figuras</h1>
            <div className='container'>
                {
                    figuras.map(f => {
                        let { nombre, img, precio, resumen, id } = f
                        return (
                            <Card key={id} className="carta" style={{ width: '15rem' }} >
                                <h2 className='nombre'>{nombre}</h2>
                                <div className='contImg'>

                                    <Card.Img className="imgCarta" variant="top" width="100px" src={img} />
                                </div>
                                <Card.Body>
                                    <p className='precio'>
                                        Price: {precio}$
                                        <Button className='categoria' variant="danger" onClick={() => deleteData(id)}>Delete</Button>
                                    </p>
                                    <Card.Text className='resumen'>
                                        {resumen}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
