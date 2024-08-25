import { Link } from 'react-router-dom';
import React from "react";

const TransactionButton = () => {
    return(
        <div className='fixed bg-[#6AB064] bottom-10 right-10 rounded-full aspect-square w-14 flex text-center justify-center'>
            <Link to='/transaction' className='font-bold text-white text-5xl justify-center '>+</Link>
        </div>
    )
}

export default TransactionButton