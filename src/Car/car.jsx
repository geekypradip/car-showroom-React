import styles from './car.module.css';
import { useState } from 'react';
import fetchCars from './ApiRequest';
import { useEffect } from 'react';
import UserPopup from './PopUpUserDetais';
import Checkout from './CheckOut';
import OrderCompleted from './CompleteOrder';

function Car() {
    const [cars,setCars]= useState([]);
    useEffect(()=>{
         fetchCars().then((res)=>{
            //console.log(res.data)
            setCars(res.data)
        }).catch((err)=>
        console.log(err)
        )
       
    },[])
    //console.log(cars)
    const [popup, setPopup]= useState(false);
    const [checkout,setCheckOut]= useState(false);
    const[completeOrder,setCompleteOrder]= useState(false);
    const [orderId, setOrderId]= useState("")
    let handleOrder=(carId)=>{
      setPopup(true);
      setOrderId(carId)
    }
    const [userDetails,setUserDetails]= useState("");
    //setCompleteOrder(true)
    let disblePopup=(details)=>{
      // value?(
      //   setPopup(false)
      //   (setCheckOut(true)
      //   )
      //   ):(setPopup(false))
      //console.log(details)
      if(details.value){
        setPopup(false);
        setUserDetails(details)
        setCheckOut(true)
      }
      else
      setPopup(false)
    }
    let disableCheckOut=(value)=>{
      setCheckOut(false);
      setCompleteOrder(value)
    }
    return ( 
      <>
      <div className={styles.container}>
         {
            cars.map((car)=>
            
            <div key={car.id} className={styles.card}>
               <div className={styles.imageHolder}>
                   <img src={car.image} alt="" />
               </div>
               <div className={styles.detais}>
                 <div> {car.name}</div> 
                 <div>Type: {car.type}</div>
                 <div>Price : RS {car.price}</div>
                 <div className={styles.orderBtn} onClick={()=>handleOrder(car.id)}>ORDER NOW</div>
               </div>
            </div>
            )
         }
       
        </div>
        {
          popup?(<UserPopup closePopup={disblePopup} id={orderId}/>):popup
        }
        {
          checkout?(<Checkout details={userDetails} closeCheckOut={disableCheckOut}/>):checkout
        }
        {
          completeOrder?(<OrderCompleted/>):completeOrder
        }
        </>
        
     );
}

export default Car;




// question for albert can we use multiple statement on tarnery operator