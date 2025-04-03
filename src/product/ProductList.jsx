import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)

    function handleClick(){
        setLoad(true)
        
    }

    useEffect(() => {
        console.info("Call Use Product")
        if(load){
            fetch("/product.json")
                .then((response)=> response.json())
                .then((data)=> setProducts(data))
                
        }
        return()=>{
            console.info("Product List unmounted")
        }
    },[load])

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>
            {products.map((product) =>(
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}