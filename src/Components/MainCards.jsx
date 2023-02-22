import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'

export const MainCards = ({ products }) => {

    const [hiProducts, setHiProducts] = useState([])

    const getProduct = () => {
        let shuffle = products.sort(() => Math.random() > .5 ? 1 : -2)
        let ave = shuffle.filter((item) =>  item.category == "ave");
        let hogar = shuffle.filter((item) =>  item.category == "hogar");
        let animal = shuffle.filter((item) =>  item.category == "animal");
        let plantas = shuffle.filter((item) =>  item.category == "plantas");        
        let filterList = [ave[0], hogar[0], animal[0], plantas[0]]
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


