import { useEffect, useState } from 'react';
import { GetOrderedCar } from './ApiRequest';
import styles from './car.module.css';
import {GetId} from './ApiRequest';
function Checkout({details,closeCheckOut}) {
    console.log(closeCheckOut)
    function handleCheckOut(){
        GetId(details)
        .then((res)=>{
            console.log(res)
            closeCheckOut(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
     //console.log(details)
      const [fetchcar,setFetchCar]= useState("");
     useEffect(()=>{
        
         GetOrderedCar(details.id)
         .then((res)=>{
            
             setFetchCar(res.data)
             //console.log(fetchcar)

         })
         .catch((err)=>console.log(err))
     },[])
    return (  
       
        <div className={styles.CheckoutHolder}>
    <div className={styles.CheckoutBox}>
            <div className={styles.header}>
                <span>CHECKOUT</span>
                <div onClick={()=>closeCheckOut(false)}>X</div>   
            </div>
            <div>
                <h3 className={styles.headings}>User Details</h3>
                <p><span>NAME:</span>{details.name}</p>
                <p><span>PHONE:</span>{details.phone}</p>

                <h3 className={styles.headings}>CHOOSED CAR</h3>
                
                <div className={styles.carsHolder}>
                    <div className={styles.carImageHolder}>
                        <img src={fetchcar.image} alt="" />
                    </div>
                    
                    <div className={styles.carDetailsHolder}>
                        <div>
                             <span>CAR NAME:</span>{fetchcar.name}
                        </div>
                        <div>
                            <span>CAR TYPE:</span>
                            {fetchcar.type}
                        </div>
                        <div>
                            <span>PRICE:</span>{fetchcar.price}
                        </div>
                        <div>REALESE YEAR: {fetchcar.year}</div>
                  </div>
                       
                </div>
                <div>
                    <h3>  PAYMENT METHOD : CASH</h3>
                  <button className={styles.CheckoutBtn} onClick={()=>handleCheckOut()}>CHECKOUT</button>
                </div>
            </div>

    </div>
</div>
    );
}

export default Checkout;