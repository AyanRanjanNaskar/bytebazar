import React, { useContext } from 'react'
import { MainContext } from '../ContextProvider'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  const{cart} = useContext(MainContext)
  return (
    <div className="flex justify-between items-center leading-10 p-5.5">
        <Link to="/"><div className="logo">
                    <h1 className='text-4xl font-extrabold text-orange-500'>ByteBazar</h1>
              </div>
        </Link>      
        <div className="cart flex items-center gap-5">
            <div className="flex gap-5 ">
                <button className='border-orange-500 border-2 font-bold px-5 rounded-4xl transition duration-300 hover:scale-105 '>Sign In</button>
                <button className='border-orange-500 border-2 bg-orange-500 text-white font-bold px-5 rounded-4xl transition duration-300 hover:scale-105'>Sign up</button>
            </div>
            
            

            {
              cart.length > 0 ?(
                <Link to = "/cart">
                    <p className='flex items-center gap-1.5 transition-all duration-300 hover:text-orange-500 text-xl font-medium'><FaShoppingCart/> <sup>{cart.length}</sup></p>
                </Link>
              ) :(
                <div>
                    <p className='flex items-center gap-1.5 transition-all duration-300 hover:text-orange-500 text-xl font-medium'><FaShoppingCart/> <sup>{cart.length}</sup></p>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Header