
import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import { render } from '@testing-library/react';
import AddComment from './comment';

 function Product() {

const [bid,setbid]=React.useState();
const [comment,setcomment]=React.useState([]);



var {id} = useParams()  

const url=`https://artmandibackend.herokuapp.com/Listing/${id}/`;


const [product,setproduct] =useState(null);
let content=null;

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setproduct(response.data)
  })
}, [url])


useEffect(()=>{
  const listurl=`https://artmandi.herokuapp.com/Comment/?listing=${id}`;
  fetch(listurl).then(resp=>resp.json()).
  then(resp=>setcomment(resp))
})


if(product){
  content=
  <div className="relative pb-10 min-h-screen">
  <div class="card" style={{height:300,width:500,margin:30, marginBottom:600,marginLeft:300}}>
<img src={product.image} class="card-img-top" style={{height:300}} />
  <div class="card-body">
  <h5 class="card-title">TITLE: {product.title}</h5>
  <p class="card-text">DESCRIPTION: {product.description}</p>
  <h6>PRICE: ${product.start_price}</h6>

  <div className="form-group">
  <div className="row">
               <input type="number" className="form-control" style={{width:250,marginLeft:15,marginRight:100}} placeholder="PLACE BID" 
               value={bid} onChange={e=>{
                        setbid(e.target.value)
                    }}
                    />
                    <button  type="button" class="btn btn-primary">BID NOW!</button>

                    </div> 
                      </div>

<div>
  <h7>COMMENTS: </h7>
  {
    comment.map(item=><div><li>{item.comment}</li></div>)
  }
</div>

                   <form>
                    <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="COMMENT"  value={comment} onChange={e=>{
                        setcomment(e.target.value)
                    }}></textarea>
            </div>
                     <button  type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                    var user = localStorage.getItem("user_id")
                    var listing = id
                    userServices.addComment(user,comment,listing).then((data)=>{
                        console.log(comment)
                        window.location.href="/BUYER"
                    }).catch(err=>{
                        console.log(err)
                    alert("adding failed")
                    })
                   
                }}>SEND</button>
                 </form>
            </div>
           
            
  </div>
  </div>
  
  
}
  return (
    <div className="App"  style={{backgroundColor:"#D3D3D3",paddingTop:50}}>
       <div className="container"  >
     {content}
     </div>
     <FOOTER />
  </div>
  )
}
export default Product;
