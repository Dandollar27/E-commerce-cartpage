import React from 'react'
import "./Details.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Details = () => {
  const {id} = useParams();
  const [product, setProduct] =useState({});
  const [isLoading, setIsLoading] = useState(true);


  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(res.data);
      setIsLoading(false)
      console.log(res.data); 
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);


  return (
    <>
    <div>
      {isLoading? (<div>Loading...</div>
      ):(
      <section className='Dcont'>
        <div className='FirstDcont'>
           <div className='DfirstSec'>
              <h2>Designed by Thomas Jonas</h2>
              <p>☆ 4.5 (89 reviews)</p>
           </div>
           <div className='DfirstSec2'>
            <div className='cu'>＜</div>
             <img  className='Dimg' src= {product.images?.[0]} alt={product.title} />
             <div className='cu'>＞</div>
           </div>
        </div>
        <div className='SecondDcont'>
          <div className='SecondDcont1'>
            <h1>FEEL FREE TO SHOP </h1>
            <p>item code:{product.id}</p>
            <p>DESCRIPTION</p>
            <span>{product.description}</span>
             <hr />
            <p></p>
          </div>

          <div className="SecondDcont2">
             <p>PRICE</p>
             <h1>{product.price}</h1>
             <p>COLOR</p>
            
             <img  className='Dimg' src= {product.images?.[0]} alt={product.title} />
             <input type="text" placeholder='Green' />
             <p>QUANTITY</p>
<input type="text" />
                <button>ADD TO CART</button>
             </div>
          </div>

          <div className='details'>
            <p>DETAIL</p>
            <p>DELIVERY</p>
            <p>RETURN</p>
          </div>
      </section>
      )}
    </div>
    </>
  )
}

export default Details
