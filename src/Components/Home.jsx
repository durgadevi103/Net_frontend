import React, { useEffect, useState } from 'react'
import '/src/Css/Home.css'
import image from "/src/assets/main_image.jpg"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [error,setError] = useState(null)

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/durgadevi103/ecommerence_project/main/BackEnd/beauty_project/data.text')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          try {
            const parsedData = JSON.parse(data); 
            console.log('Parsed data:', parsedData);
            setProducts(parsedData); 
          } catch (error) {
            console.error('JSON Parsing error:', error);
            setError("There was an error loading the product data.");
          }
        })
        .catch((error) => {
          console.error('Error fetching or parsing file:', error);
          setError("There was an issue fetching the product data.");
        });
    }, []);

  const allProducts = products.filter(product =>
    (product.product_price >= 300)
  );



  return (

    <div className="whole maincontent">
      <div className="container-fluid pb-5">
        <div className="container profile-cart">
          <div className="row align-items-center pt-5">
            <div className="col-md-6 p-2">
              <h1 className="welcome-text1">
                Welcome to <b className="name_cart">DA'S CARES</b>
              </h1>
              <h1 className='welcome-text p-2'> Glow Naturally, Shine Confidently! ✨</h1>
              <h3 className='welcome-text p-2'> where beauty meets nature. Explore our premium range of skincare, makeup, and haircare products</h3>
            </div>
            <div className="col-md-6 p-2 ">
              <img id='common-image'
                src={image}
                className="img-fluid"
                alt="DA'S CARES"
              />
            </div>
          </div>
        </div>  
        
        
        <h1 id='topic'>BEST OF ALL'S</h1>
      <div className='container mb-5'>

        <div className='row card-container justify-content-center'>

          {
            allProducts.map((user, index) => (
              <div key={index} className='col p-4 mt-4 main-card-1'>
                <Card className='align-items-center text-center main-card  '>
                  <Card.Img  variant="top" src={user.product_image} style={{ width: "50%", height: "180px", padding: "8px" }} />
                  <Card.Body id='ver-card' >
                    <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                    <p id='pro-price' style={{ marginTop: "20px" }}>{user.product_price}</p>
                    <Button className='addbtn' variant="primary" style={{ marginTop: "10px", marginBottom: "10px" }} onClick={() => addToCart(user)}>Add Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>


      </div>


</div>


    </div>
  )
}

export default Home
