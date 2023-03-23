import React, {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import "./Detail.css"

const Product_details = () => {

    const {id} = useParams();
    const {category} = useParams();
    const[pdttitle,settitle] = useState([]);
    console.log(id)

    useEffect(()=>{
        pdt_details()
      },[id])

      async function pdt_details(){
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        settitle(data)
       }
  return (
    <div className='det '>
        <Link to="/Products"><div className="cross center">Cancel</div></Link>
        {pdttitle.map((e)=>{
            if(e.id == id){
                console.log(e);
                return (

                    <div className="right detr col">
            <div className='images'>
                 <img src={e.image} alt="" height={300} /> 
                 </div>
            <div className="name">
                <h4>Product Name</h4>
                <div>{e.title}</div>
            </div> 
            
             <div className="name">
                <h4>Product Price</h4>
                <div>{e.price}</div>
            </div>
            <div className="name">
                <h4>Description</h4>
                <div>{e.description}</div>
            </div>
            <div className="name">
                <h4>rating</h4>
                <div>{e.rating.rate}</div>
            </div> 
        </div> 
                )
            }
        })}
       
        
        
    </div>
  )
}

export default Product_details
