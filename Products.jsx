import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './ProductList';
import Cart from './Cart';
import Navigationbar from './Navigationbar';

export const ProductContext = React.createContext();
const Product = () => {
    const [lists, setLists] = useState([]);

    const handleClick = (product) => {
        
        
        let isduplicatePresent = lists.some(list=>list.name===product.name);
        if(isduplicatePresent){
            alert("Already present in cart");
        }else{
            alert(`Name:${product.name}` + "\n" + `price:₹${product.price}` + "\n" + `Type:${product.type}`);
            setLists(() => {
                let p1 = { name: product.name, price: product.price, type: product.type, quantity: 1 }
                let newProduct = [...lists, p1];
                console.log(newProduct);
                return newProduct;
            });
        }
        
    }
    const icrementQuant = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        lists.map((val) => {
            if (val.name === list.name) {
                val.quantity = val.quantity + 1;
            }
        })
        console.log(lists);
        setLists([...lists]);
    }
    const decrementQuant = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        lists.map((val) => {
            if (val.name === list.name) {
                if (val.quantity > 1) {
                    val.quantity = val.quantity - 1;
                }
            }
        })
        console.log(lists);
        setLists([...lists]);
    }
    const removeList = (list) => {
        console.log(list.name + " " + list.type + " " + list.price);
        console.log(lists);
        setLists(lists.filter((val) => val.name !== list.name));
    }
    return (
        <>
            <Navigationbar />
            <h1>Product Page</h1>
            <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'width': '90%', 'margin': 'auto' }}>
                {

                    ProductList.map(product => {
                        return (
                            <div key={product.name} className="card" style={{ 'margin': '10px', 'width': '211px' }}>
                             
                            
                               <img src = {'https://img.freepik.com/premium-photo/men-s-clothing-set-with-oxford-shoes-watch-sunglasses-office-shirt-tie-jacket-isolated-white-background-top-view_107612-80.jpg?w=2000'}
                                className="card-img-top" alt="..."/> 
                                <div className="card-body NavColor">

                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.type}</p>
                                    <h5 className="card-title">₹{product.price}</h5>
                                    <button onClick={() => handleClick(product)} className="btn btn-warning ">Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ProductContext.Provider value={{ lists, icrementQuant, decrementQuant, removeList }}>
                <Cart />
            </ProductContext.Provider>

        </>
    )
}
export default Product;