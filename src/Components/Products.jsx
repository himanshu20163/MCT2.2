import React, { useState } from 'react'
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import './products.css'

 const Products = (productdetail) => {

  const {id} = useParams();
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
    console.log(data[0].id);
    if(data == ""){

    }
    setdata(data)
  }

  async function pdt_details(ele){
      const res = await fetch(`https://fakestoreapi.com/products/category/${ele}`)
      console.log(res);
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
           {pdttitle.map((e)=>{
             return (<li style={{color:"black"}} ><Link to={`/Product_details/${e.id}/${category}`}>{e.title}</Link></li>)
           })}
         </div>
      </div>
      {console.log(pdttitle)}
    </div>
   
  )
 }
export default Products;

