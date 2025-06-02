import React, { useContext } from 'react'
import useProducts from "../Hooks/useProducts"
import { MainContext } from '../ContextProvider';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Items = () => {
    const{addToCart, cart} = useContext(MainContext);
    console.log({cart})
    const {data, isFetching} = useProducts();
    if(isFetching){
        return <div>
                    <h1>Loading...</h1>
               </div>
    }

  return (
    <div className='flex gap-10 flex-wrap mx-7 justify-center items-center'>
        {
            data?.map((productItem, productIndex) => (
                <div key={productIndex}>
                    <div className=' flex flex-col items-center w-64 h-90 text-center bg-white-200 shadow-lg shadow-black-500/50 rounded-lg p-3.5 transition-all duration-300 hover:scale-105 m-8'>
                        <Link to={`/product/${productItem.id}`}>
                            <div className='flex flex-col items-center'>
                                <img src= {productItem.image} alt="" className='w-38 h-38 object-contain rounded-lg '/>
                                <h2 className='text-sm font-semibold line-clamp-1 mt-7'>{productItem.title}</h2>
                                <div >
                                    <Rating style={{ maxWidth: 250 }} value={productItem.rating.rate} readOnly />
                                </div>
                                {/* <h2>{productItem.rating.rate}/5</h2> */}
                                <p className='text-[#11A75C]'><sup>$</sup>{productItem.price}</p>
                            </div>
                        </Link>
                        <button className='m-2.5 bg bg-orange-500 shadow-lg shadow-black-700 text-white rounded-xl w-full h-10 font-semibold hover:bg-orange-400 duration-300' onClick={(e) => addToCart(e, productItem)}>Add to Cart</button>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Items