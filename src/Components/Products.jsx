import React, { useState } from 'react'
import {useEffect} from "react";
import {Link} from "react-router-dom"
import './products.css'

 const Products = (productdetail) => {

  const[data,setdata] = useState('');
  const[pdttitle,settitle] = useState([]);
  const[category,setcategory] = useState('electronics');

  useEffect(()=>{
    him()
    pdt_details(category)
  },[category])
  async function him() {
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await res.json();
    console.log(data);
    if(data == ""){

    }
    setdata(data)
  }

  async function pdt_details(ele){
      const res = await fetch(`https://fakestoreapi.com/products/category/${ele}`)
      const data = await res.json();
      console.log(data);
      settitle(data)
     }
  return (
    <div className='box_container'>
      <div className='box'>
         <div className='left_box'>
         <div>
               <h3 onClick={() => setcategory(data[0])}>Electronics</h3>
            <h3 onClick={() => setcategory(data[1])}>Jewelery</h3>
            <h3 onClick={() => setcategory(data[2])}>Women's Clothing</h3>
            <h3 onClick={() => setcategory(data[3])}>Men's Clothing</h3>
              </div>
         </div>
         <div className='right_box'>
           {data == '' ? <h5>data is loading ...</h5> : null}
           {pdttitle.map((e,i)=>{
             return (<li key={i} onClick={()=>productdetail(e)} style={{color:"black"}} ><Link to={"/Product_details"}>{e.title}</Link></li>)
           })}
         </div>
      </div>
    </div>
  )
 }
export default Products;


