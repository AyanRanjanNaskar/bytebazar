import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../ContextProvider'
import { useParams } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Header from '../Components/Header';

const ProductPage = () => {
    const {addToCart, cart} = useContext(MainContext);
    let {productId} = useParams();
    const {data:products, isPending} = useProducts();
    console.log({data:products})

    if(isPending){
      return(
        <div>
          <h1>Fetching data... </h1>
        </div>
      )
    }
    const productItem = products.find((product) => product.id === Number(productId));
    console.log({products, productItem});

  return (
    <div>
        <Header/>
        <div className='flex m-20 justify-between gap-20 max-w-screen max-h-screen'>
            <div className='w-[80vw]'>
              <img src={productItem.image} alt="" className='w-200 h-200 object-contain p-6 '/>
            </div>
            <div className='w-[60vw]'>
                <h2 className='text-3xl font-normal tracking-wide'>{productItem.title} | {productItem.description} </h2>
               <div className='flex gap-2 m-4'>
                 <h4 >Reviews: {productItem.rating.rate} </h4>
                <label className='text-gray-400'>{productItem.rating.count} ratings</label>
               </div>
               <p className='text-4xl m-4 font-semibold'>${productItem.price}</p>

               <button className='m-4 bg bg-orange-500 shadow-lg shadow-black-700 text-white rounded-xl w-[30vh] h-10 font-semibold hover:bg-orange-400 duration-300' onClick={(e) => addToCart(e, productItem)}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductPage
