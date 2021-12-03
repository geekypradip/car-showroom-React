import { useState } from 'react';
import styles from './car.module.css';


function UserPopup({closePopup,id}) {
   const [name,setName]=useState("");
   const [phone,setPhone]= useState("");
  
   let HandleDeatais=(id,name,phone)=>{
    if(!id||!name||!phone)
    alert("All field are required!")
    else{
        const detais={
            id:id,
            name:name,
            phone:phone,
            value:1
        }
        closePopup(detais);
    }
       
   }
    return ( 
        <>
        <div className={styles.popup_holder}>
            <div className={styles.popup}>
                <div>
                <span>Fill your Datais</span>
                <div onClick={()=>closePopup(0)}>X</div>   
            </div>
            <div className={styles.formHolder}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="number" placeholder="Enter your Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <button onClick={()=>HandleDeatais(id,name,phone)}>continue</button>
            </div>
            </div>
            
        </div>
        
        </>
     );
}

export default UserPopup;