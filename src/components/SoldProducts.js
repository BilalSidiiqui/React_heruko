import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import FOOTER from './footer'
import { Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

function SoldProducts() {

    const[soldproduct,setsoldproduct]=useState([]);

    const url='https://artmandi.herokuapp.com/Listing/'

    useEffect(()=>{
        axios.get(url)
        .then(response => {
          setsoldproduct(response.data)
       
        })
      }, [])

     
      let array=soldproduct.filter(e => e.completed===true && e.paid===false && e.winner_username===localStorage.getItem('username'))
console.log(array);


    return (
      <div className="App" style={{backgroundColor:"#fff",maxWidth:'100%' , overflowX:'hidden'}}>
       
          <div style={{marginTop:50,marginBottom:70}}>
			<div className="row">

				<div style={{width:550}} >
					<div className="mu-hero-left">
          <text style={{fontStyle:'italic',color:'grey',fontWeight:2,fontSize:40,paddingLeft:30}}>"A Heaven for Artists where they can sell and buy desired Artworks."</text>
					
					</div>
				</div>
        <div style={{marginLeft:45,width:960}}>
					<div className="mu-hero-right">
         <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://images.saatchiart.com/saatchi/769139/art/3131302/2201193-CGUFNTXM-6.jpg"
         alt="First slide"
         style={{
           borderBottomLeftRadius:150,
           borderTopRightRadius:150,
         }}
        height="250px"
        width="3000px"
       />
       <Carousel.Caption>
         <h3 >ART IS A LINE AROUND YOUR THOUGHTS.</h3>
          <text style={{fontStyle:'italic'}}>Gustav Klimt</text> 
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://i.pinimg.com/originals/16/83/3d/16833da48532f7df370f3fe677e1dfc9.jpg"
         alt="second slide"
         style={{
          borderBottomLeftRadius:150,
          borderTopRightRadius:150,
        }}
         height="250px"
         width="3000px"
       />
   
       <Carousel.Caption>
         <h3>A TRUE MASTERPIECE DOES NOT TELL EVERYTHING.</h3>
         <text style={{fontStyle:'italic'}}>Albert Camus</text>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Alu4WK8CxBQw3bzshEQqyOSLgjmWIwyLxQ&usqp=CAU"
         alt="Third slide"
         style={{
          borderBottomLeftRadius:150,
          borderTopRightRadius:150,
        }}
         height="250px"
         width="3000px"
       />
   
       <Carousel.Caption>
         <h3>ART IS NOT A HANDICRAFT, IT IS THE TRANSMISSION OF FEELING THE ARTIST HAS EXPERIENCED.</h3>
         <text style={{fontStyle:'italic'}}>Leo Tolstoy</text>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>

         </div>
				</div>	

			</div>
		</div>
    <div className="App"  style={{backgroundColor:"#F8F8F8", paddingTop:50}}>
   <div className="container"  >
      
              <div className='row' >
             <h1 style={{textAlign:'center',marginLeft:390, color:'	#000'}}>ARTWORKS SOLD</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'22%',
    marginRight:465
}}/>

<p style={{marginLeft:180}}>Now you can buy your chosen artwork by using your credit or debit card and artwork will deliver at your doorstep.</p>
    
        {
            array?
            array.map((item)=>
            <div style={{marginBottom:30}} className="col-sm-4">
                          <Card style={{ width:320, margin:10}}>
            <Link to={`/AFTERSOLD/${item.id}`}> 
           <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
             <Card.Body>
             <Card.Title > Title : {item.title}</Card.Title>
             <Card.Text ><text style={{fontWeight:'bold'}}>ARTIST :</text> {item.artist}</Card.Text>
               <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>
             <Card.Text><text style={{fontWeight:'bolder',fontSize:30}}>PRODUCT SOLD </text></Card.Text>

               
                      </Card.Body>
   </Card>
   
    </div>
    
   )
   :
   <h1>api data no found</h1>
   
   }
   </div>
       </div>
            
       </div>
       
        
        <FOOTER/>
        </div>
        
    )
}
export default SoldProducts;