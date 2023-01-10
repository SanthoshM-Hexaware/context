

import { createContext, Fragment, useState } from "react";

const Context = createContext({});

export function ContextProvider({children}) {
  const products = [
    {
        "id": "cotton jeans",
        "name": "Cotton Jeans",
        "price": 700.0,
        "imageUrl": "https://m.media-amazon.com/images/I/71KQOSp+5IL._UX679_.jpg",
        "description": "Cotton Jeans" 
    },
    {
        "id": "phone",
        "name": "Phone",
        "price": 20000.0,
        "imageUrl": "https://www.ourshopee.com/ourshopee-img/ourshopee_products/27431911771.jpg",
        "description": "Phone"
    },
    {
        "id": "shirt",
        "name": "Shirt",
        "price": 900.0,
        "imageUrl": "https://www.bing.com/th?id=OIP.Bta2tqf43I9P-ZCIRVuOHwHaJO&w=224&h=278&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "description": "Shirt"
    },
    
    
  ];

  const [show, setShow] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const [cart, setCart] = useState([]);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

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
    <Fragment>
      <ProductContext.Provider
        value={{
          products,
          show,
          setShow,
          selectedProduct,
          setSelectedProduct,
          cart,
          setCart,
          handleClose,
          handleShow,
          handleAddToCart,
          removeFromCart,
          incrementQuantity,
          decrementQuantity,
        }}
      >
        {children}
      </ProductContext.Provider>
    </Fragment>
  );
}

export default Context;