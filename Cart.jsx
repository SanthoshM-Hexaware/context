import React, { useEffect, useState,useContext} from 'react';
import Navigationbar from './Navigationbar';
import { ProductContext } from './Products';



const Cart = () => {
    const value = React.useContext(ProductContext);
    return (

        <>
            {/* <Navigationbar/> */}
            <h1>Cart</h1>
            <table className='section1' style={{ marginBottom: '30px' }} cellPadding="10px" cellSpacing="10px">
                <thead>
                    <tr>
                        <th className="grid-container">Name</th>
                        <th className="grid-container">Quantity</th>
                        <th className="grid-container">Price</th>
                        <th className="grid-container">Type</th>
                        <th className="grid-container">Remove</th>

                    </tr>
                </thead>
                <tbody>
                    {value.lists.map(list => {
                        return (
                            <tr key={list.name}>
                                <td>{list.name}</td>
                                <td><button onClick={()=>value.icrementQuant (list)}>+</button>{list.quantity}<button onClick={() =>value.decrementQuant(list)}>-</button></td>
                                <td>{list.quantity * list.price}</td>
                                <td>{list.type}</td>
                                <td><button onClick={()=>value.removeList(list)}>remove</button></td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>

        </>
    )

}
export default Cart;