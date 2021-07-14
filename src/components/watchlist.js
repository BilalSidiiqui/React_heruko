import { Form,FormControl,Button,Card,} from 'react-bootstrap';
import React  from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer'
import {Carousel} from 'react-bootstrap';

class watchlist extends React.Component {


    constructor(props){
      super(props);
    
      this.state = {
        products:[],
        Filterproducts:[],
         }
            }

Loginid=localStorage.getItem("user_id");

  componentDidMount(){
  fetch(`https://artmandi.herokuapp.com/Watchlist/?user=${this.Loginid}`).then((resp)=> {
    resp.json().then((result) => {
      this.setState({products:result})
   let array=  result.map( e => e.listing)
   console.log(array)
fetch("https://artmandi.herokuapp.com/Listing/").then((response)=>{
  response.json().then((listing)=>{
    let array2= listing.filter( e => array.includes(e.id))
    let array3=array2.filter(e => e.completed===false)
    this.setState({Filterproducts:array3})
    console.log(array3)
  })
})    
}

    )
  })

}
  

  render() {
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
     src="https://www.wallpaperup.com/uploads/wallpapers/2016/05/07/944962/480eda89e37c6900c95883bd34036fb4-700.jpg"
     alt="First slide"
     style={{
      borderBottomLeftRadius:150,
      borderTopRightRadius:150,
     
     }}
    height="250px"
    width="3000px"
   />
   <Carousel.Caption>
     <h3 >CREATIVTY IS A WILD MIND AND A DISCIPLINED EYE.</h3>
      <text style={{fontStyle:'italic'}}>Dorothy Parker</text> 
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src="http://residencestyle.com/wp-content/uploads/2020/11/abstract-painting.jpg"
     alt="second slide"
     style={{
      borderBottomLeftRadius:150,
          borderTopRightRadius:150,
     
    }}
     height="250px"
     width="3000px"
   />

   <Carousel.Caption>
     <h3>A PICTURE IS A POEM WITHOUT WORDS.</h3>
     <text style={{fontStyle:'italic'}}>Horace</text>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src="https://wallpapercave.com/wp/wp6992273.jpg"
     alt="Third slide"
     style={{
      borderBottomLeftRadius:150,
      borderTopRightRadius:150,
    }}
     height="250px"
     width="3000px"
   />

   <Carousel.Caption>
     <h3>ART IS NEVER FINISHED, ONLY ABANDONED</h3>
     <text style={{fontStyle:'italic'}}>Leonardo da Vinci</text>
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
             <h1 style={{textAlign:'center',marginLeft:360, color:'	#000'}}>WATCHLIST ARTWORKS</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'28%',
    marginRight:410
}}/>

<p style={{marginLeft:180}}>You can check the product on which you have placed bid. Also you can place new bid if someone place greater bid than yours.</p>
    
        {
        this.state.Filterproducts ?
        this.state.Filterproducts.map((item)=>
        
        <div style={{marginBottom:30}} className="col-sm-4">
        <Card style={{ width:320, margin:10}}> 
        <Link to={`/PRODUCT/${item.id}`}> 
        <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
          <Card.Body>
          <Card.Title > Title : {item.title}</Card.Title>
          <Card.Text ><text style={{fontWeight:'bold'}}>Artist :</text> {item.artist}</Card.Text>
            <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>
            <Link to={`/PRODUCT/${item.id}`}>  <Button variant="primary" type="submit" className="btn btn-primary btn-block">BUY NOW</Button>
</Link>            </Card.Body>
</Card>

 </div>
 
)
:
<h1>api data no found</h1>

}
</div>

</div>

<Footer/>
</div>
</div>
    )};
}
export default watchlist;