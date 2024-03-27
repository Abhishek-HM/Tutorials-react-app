import axios from "axios";
import { useEffect, useState } from "react";
import http from "../http-common";

const Cart=()=>{
    const [cartItems,setcartItems]=useState([])
    // const getdata=async()=>{
    //     const res=await axios.get("")
    // }
    useEffect(()=>{
       
       http.get("tutorials/addToCart/true")
        .then(res=>{
            console.log(res.data);
            setcartItems(res.data);
            console.log(cartItems);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return(
        <div>
            <div className="center">
                {cartItems.length > 0 ? (
                    <div  >
                        <h4 className="text-center">Items Added To Cart</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {cartItems[0].title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {cartItems[0].description}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {cartItems[0].published ? "Published" :"Pending"}
                        </div>
                        <div>
                            <img src={cartItems[0].imagePath} alt={cartItems[0].title+ " Image"}/>
                        </div>
                       
                        </div>
                        
                ):(
                       
                            <p className="text-center">Please Add a Item to Cart</p>
                    
                
                )}
            </div>
        </div>

    )
}
export default Cart;