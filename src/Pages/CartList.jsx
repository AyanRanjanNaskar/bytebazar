import React, { useContext } from 'react'
import Header from '../Components/Header'
import { MainContext } from '../ContextProvider'

const CartList = () => {
    const {cart, removeItem, total} = useContext(MainContext);
    console.log({total})

    // for total cost of the products added into the cart
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     const subTotal = cart.reduce((sum, productItem) => sum + Math.floor(productItem.price), 0);
    //     setTotal (subTotal);
    // },[])
    
    

  return ( 
    <div className='bg-[#e7edeab5] rounded min-h-screen pb-3.5'>
      <Header/>
      <div className='m-6'>
        <h1 className='text-2xl font-semibold text-right '>SubTotal : <span className='text-orange-500'>${total.toFixed(2)}</span></h1>
      </div>
      {
        cart.map((productItem, productIndex) =>(
            <div key={productIndex}>
                <div className=' w-[80vw] h-60 mx-auto flex justify-evenly items-center border-b-2 border-gray-300 p-2.5 bg-white rounded-2xl mt-3.5 shadow-xl'>
                   <div className='h-4xl w-30'> <img src={productItem.image} alt="" className='h-28 object-contain ' />
                   </div>
                    <h2 className='w-48 text-center font-semibold'>{productItem.title}</h2>
                    <p>Quantity: 1</p>
                    <p className='text-[#11A75C]'>${productItem.price}</p>
                    <button className='text-white px-5 p-1.5 bg-red-500 rounded-sm hover:bg-red-600 transition duration-300' onClick={(e) => removeItem(e, productItem.id)}>Remove</button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default CartList
