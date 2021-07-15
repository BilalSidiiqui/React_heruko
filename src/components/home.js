import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import FOOTER from './footer';
import BUYER from './buyer';
import { FaTruck } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { FaShoppingBag } from "react-icons/fa";
import {RiHandCoinFill} from 'react-icons/ri';


 function home() {
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
         src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
         alt="First slide"
         style={{
           borderBottomRightRadius:150,
           borderTopLeftRadius:150,
         }}
        height="250px"
        width="3000px"
       />
       <Carousel.Caption>
       <h3>ART SPEAKS WHERE WORDS ARE UNABLE TO EXPLAIN.</h3>
         <text style={{fontStyle:'italic'}}>Mathiole</text>
             </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFic3RyYWN0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
         alt="second slide"
         style={{
          borderBottomRightRadius:150,
          borderTopLeftRadius:150,
        }}
         height="250px"
         width="3000px"
       />
   
       <Carousel.Caption>
         <h3>ART IS NOT WHAT YOU SEE BUT WHAT YOU MAKE OTHERS SEE.</h3>
         <text style={{fontStyle:'italic'}}>Edgar Degas</text>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://i.pinimg.com/originals/d5/40/82/d540821f58d47c59f9aede40410fd30a.jpg"
         alt="Third slide"
         style={{
          borderBottomRightRadius:150,
          borderTopLeftRadius:150,
        }}
         height="250px"
         width="3000px"
       />
   
       <Carousel.Caption>
       <h3 >ART ENABLES US TO FIND OURSELVES AND LOSE OURSELVES AT THE SAME TIME.</h3>
          <text style={{fontStyle:'italic'}}>Thomas Merton</text> 
         </Carousel.Caption>
     </Carousel.Item>
   </Carousel>

         </div>
				</div>	

			</div>
		</div>

        
<br/>
   
  <BUYER/>

<div style={{backgroundColor:'#fff',paddingTop:50,paddingBottom:50,marginBottom:60}}>
<h1 style={{textAlign:'center',color:'#000'}}>OUR SERVICES</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'14%',
    marginRight:680
}}/>

<p style={{fontSize:20,fontWeight:50,marginBottom:80}}>ArtMandi is providing mutiple services to artists and art lovers. Where they can sell and buy artworks.</p>

<div className="row"style={{marginBottom:50}}>
<IconContext.Provider value={{color:'blue',size:'6em'}}>
<div style={{marginLeft:170}} className='col-3'>
<div style={{marginBottom:15}}>  <RiHandCoinFill/></div>
<text style={{fontWeight:'bold',fontSize:25}}>SELL ARTWORKS</text><br/>
<text>Artists can sell their artwork by uploading it and setting their desired price. </text>
<text>They can set Time interval in which they want to sell their product.</text>
</div>



<div className='col-3'>
  <div style={{marginBottom:15}}> <FaShoppingBag/></div>
<text style={{fontWeight:'bold',fontSize:25}}>BUY ARTWORKS</text><br/>
<text>Buyers can buy the artworks by their choice and taste. </text>
<text>They can place Bid on the artwork and will win the auction if their bid is highest.</text>
</div>


<div className='col-3'>
<div style={{marginBottom:15}}>   <FaTruck/></div>
<text style={{fontWeight:'bold',fontSize:25}}>DELIVER ARTWORKS</text><br/>
<text>Artmandi will responsible for delivering the artwork at door step of buyer.</text>
<text>There's no need for buyer to take away the artwork.</text>
</div>
</IconContext.Provider>
</div>

</div>

<div style={{backgroundColor:'#F8F8F8',paddingTop:100,paddingBottom:50,marginBottom:60}}>
<h1 style={{textAlign:'center',color:'#000',}}>MEET THE TEAM</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'15%',
    marginRight:680
}}/>

<p style={{fontSize:20,fontWeight:50,marginBottom:80}}>ArtMandi team includes Team Leader, Client side developer and Server side developer.</p>
<div className="row"style={{margin:10,marginBottom:50}}>

<div style={{marginLeft:170}} className='col-3'>
<div style={{marginBottom:15,marginTop:15}}>  <img
src="https://i.ibb.co/X54B7C4/Whats-App-Image-2021-07-15-at-10-11-16-AM.jpg"
/></div>
<text style={{fontWeight:'bold',fontSize:25}}>Haris Imran </text>
<div><text style={{fontSize:15,color:'grey'}}>Team Leader</text></div>
</div>


<div className='col-3'>
<div style={{marginBottom:15,marginTop:15}}>  <img
src="https://i.ibb.co/LzRHYtG/Whats-App-Image-2021-07-15-at-10-11-38-AM.jpg"
/></div>
<text style={{fontWeight:'bold',fontSize:25}}>Zaid Nadeem</text>
<div><text style={{fontSize:15,color:'grey'}}>Server Side Developer</text></div>
</div>

<div className='col-3'>
<div style={{marginBottom:15,marginTop:15}}>  <img
src="https://i.ibb.co/tmJ4jjL/Whats-App-Image-2021-06-22-at-11-12-31-PM.jpg"
/></div>
<text style={{fontWeight:'bold',fontSize:25}}>Bilal Siddiqui</text>
<div>
<text style={{fontSize:15,color:'grey'}}>Client Side Developer</text></div>
</div>
</div>
</div>
    
    <FOOTER/>
    </div>
    )
}
export default home;