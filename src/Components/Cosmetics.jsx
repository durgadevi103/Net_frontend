import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import '/src/Css/Cosmetics.css'


const Cosmetics = ({addToCart}) => {

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
      
      let newcart1= products.filter(n=> n.product_caterogy == "Lipstick" )
      let newcart2= products.filter(n=> n.product_caterogy == "Kajal")
      let newcart3= products.filter(n=> n.product_caterogy == "Eyeliner" )
      let newcart4= products.filter(n=> n.product_caterogy == "Maskara" )
      let newcart5= products.filter(n=> n.product_caterogy == "Powder" )
      let newcart6= products.filter(n=> n.product_caterogy == "Spray" )




    

    
   

    // let newcart3= cart.filter(filtertheproduct3)

    // function filtertheproduct3(each) {
    //     return each.product_caterogy =="Lotion"
    // }

  return (
    <div id='cosmeticsback'> 
<h1 id='topic'>COSMETICS PRODUCTS</h1>
<div className='container mt-5'>
        <span className='product'>Lipstick's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart1.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"90%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(user)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Kajal's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart2.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"50%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price'style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(product)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Eyeliner's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart3.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"50%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name' >{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(product)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>
             
            </div>

            <div className='container mt-5'>
        <span className='product'>Maskara's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart4.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"50%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(product)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Powder's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart5.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"100%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(product)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Spray's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart6.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"50%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}} onClick={() => addToCart(product)}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>
      
    </div>
  )
}

export default Cosmetics
