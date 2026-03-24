import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProducts = () => {
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[products,setProducts]=useState([])

const navigate=useNavigate()

// variable to store image
const image_url="http://fidel.alwaysdata.net/static/images/"

// create a function to get our products from the api

const fetchProducts=async()=>{

  setLoading("Please wait as we retrieve your products")

  try {

    const response=await axios.get("http://fidel.alwaysdata.net/api/getproductdetails")
    setProducts(response.data)
    console.log("The response is",response)
    setLoading("")
    
    
  } catch (error) {
    setLoading("")
    setError(error.message)
    
  }
}
// end of funtion
// calling the useEffect

useEffect(()=>{
  fetchProducts()
},[])
  
  return (
    <div className='row'>

      <section className="row">

        <div className="col-md-12">
            {/* <!-- main container for the carousel --> */}
            <div className="carousel slide" data-bs-ride="carousel" id="carousel">
                {/* <!-- div to wrap or hold all the caroudels --> */}
                 <div className="carousel-inner">

                    {/* <!-- div to hold each image --> */}

                    <div className="carousel-item active">
                        <img src="images/ramtad.png" alt="" className='w-100' height="330px"/>
                    </div>

                    <div className="carousel-item">
                        <img src="images/ad2.jpg" alt="" className='w-100' height="330px"/>
                    </div>

                    <div className="carousel-item">
                        <img src="images/ad4.jpg" alt="" className='w-100' height="330px"/>
                    </div>

                    <div className="carousel-item">
                        <img src="images/ad1.jpg" alt="" className='w-100' height="330px"/>
                    </div>

                    <div className="carousel-item">

                      <img src="images/vonad.png" alt="" className='w-100' height="330px"/>
                        
                    </div>

                    <div className="carousel-item">
                        <img src="images/ad6.jpg" alt="" className='w-100' height="330px"/>
                    </div>

                    <div className="carousel-item">
                        <img src="images/lenovoad.jpg" alt="" className='w-100' height="330px"/>
                    </div>




                 </div>





            </div>

            {/* <!-- controllers for previous and next --> */}

            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"><span className="carousel-control-prev-icon bg-danger"></span></button>

            
                

            

            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"><span className="carousel-control-next-icon bg-danger"></span></button>

            

                

            




        </div>






    </section> 
    <input type="search" placeholder='Search for products...' className='form-control sticky-top'/>
      <h1 className='text-secondary display-2'>Suggested for you</h1>
      
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our products and get each products individualy */}

      {products.map((product)=>(

      

      <div className='col-md-3 justify-content-center'>
      <div className='card shadow margin-3 h-100 '>

       {/* concartinating */}
        <img src={image_url +product.product_photo} alt="product" className='product_img mt-4' />

        <div className='card-body'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-danger'>ksh:{product.product_cost}</p>
          {/* button that leads us to M-pesa ,it moves with the product(parse data) */}
          <input type="button" className='btn btn-secondary w-100' value="Purchase Now"onClick={()=>navigate("/mpesa",{state:{product}})}/>

        </div>
        


       </div>
      </div>
      ))}
        
    </div>
  )
}

export default GetProducts