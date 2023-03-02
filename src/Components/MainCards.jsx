import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'

export const MainCards = ({ products }) => {

    const [hiProducts, setHiProducts] = useState([])

    const getProduct = () => {
        let shuffle = products.sort(() => Math.random() > .5 ? 1 : -2)
        let CategoriaUno = shuffle.filter((item) =>  item.category == "Categoria 1");
        let CategoriaDos = shuffle.filter((item) =>  item.category == "Categoria 2");
        let CategoriaTres = shuffle.filter((item) =>  item.category == "Categoria 3");
        let CategoriaCuatro = shuffle.filter((item) =>  item.category == "Categoria 4");        
        let filterList = [CategoriaUno[0], CategoriaDos[0], CategoriaTres[0], CategoriaCuatro[0]]
        console.log(filterList)
        return setHiProducts(filterList.sort(() => Math.random() - .5))
    }

    useEffect(() => {
        getProduct()        
    },[]);

    return (
        <>
            <div className='d-flex-colums align-items-center'>
                <h2 className='maincards-tittle d-block text-center text-uppercase'>productos destacados</h2>
                <div className='maincards-container d-flex justify-content-center align-items-center flex-wrap '>
                    {hiProducts.map((product) => (
                        <Cards product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}


