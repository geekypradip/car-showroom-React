import axios from 'axios';

function fetchCars() {
    return ( 
        axios.get(`http://localhost:8000/cars`)
     );
}

export default fetchCars;

// post data into order endpoint of carDb.json
export function GetId(props){
  let date= new Date();
   
  
    return (
    axios.post('http://localhost:8000/orders', {
        orderedCarId: props.id,
        customerName:props.name,
        cutomerPhone:props.phone,
        time: date
       
      })
      );
    
      
    }
  export function GetOrderedCar(id){
    return (
      axios.get(`http://localhost:8000/cars/${id}`)
    )
  }
  
        
    
  