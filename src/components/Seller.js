import React,{useState} from 'react'
import FOOTER from './footer';
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar'
import userServices from "../Services/UserServices";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import moment from 'moment';
import * as auth from '../Services/authService'
import { toast } from 'react-toastify';

function Seller() {
    console.log(localStorage.getItem("user_id"))

    const [title,settitle]=React.useState();
    const [description,setdescription]=React.useState();
   const[image,setimage]=React.useState(null);
      const [length,setlength]=React.useState();
   const [width,setwidth]=React.useState();
   const [category,setcategory]=useState("T");
  const[startPrice,setstartPrice]=React.useState();
  const [end_date, setend_date] = useState(new Date());
  

const handleSubmit=(e)=>{

    e.preventDefault();
     
    const end = new Date(end_date).toISOString()
 var created_by = localStorage.getItem("user_id")
    var start_price= parseInt(startPrice)
  var data =  new FormData();
  data.append("title",title)
  data.append('description',description);
                    data.append('image',image);
                    data.append('category',category);
                    data.append('length',length);
                    data.append('width',width);
                    data.append('start_price',start_price);
                    data.append('created_by',created_by);
                    data.append('end_date',end);

                   try {
                       if(title.length<2){
                           toast.error("Title should not that short")
                       }
                        else if(startPrice<5){
                           toast.error("Price should not be too low, It should be 5 minimum!")
                       }
                       else{
                    const res = auth.addProduct(data)
                    toast.success("Product will be added within a minute!Thank you")
                    // window.location.href='./'
                    console.log(res)}
                   } catch (error) {
                       console.log("err is", error)
                   }
                   
}
// const fileselectorhandler=event=>{
//     setimage(event.target.files[0])

// }

    return (
        <div className="App" style={{backgroundColor:"#fff"}}>
        <div className="Main" style={{height:'700'}}>
   <div className='Outer' style={{backgroundImage: `url("https://images.unsplash.com/photo-1562619425-c307bb83bc42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")` }}>
   <div className='inner-container'
   style={{display:"flex",
   justifyContent: "center",
   alignItems: "center",
    maxWidth:'45%'
   }}>
   <div className="col">
  <div>
   <h1 style={{textAlign:'center', color:'	#000'}}>ADD NEW ARTWORK</h1>
        <hr  style={{
color: '#7a7d85',
height: 0.5,
borderColor : '#000',
width:'78%',

}}/>
<p style={{marginBottom:60}}>As an artist seller, you can post your artwork on sale by adding your artwork details and also set the bid closing time.</p>
</div>
        <form>
            <h3>ADD PRODUCTS</h3>

            <div className="form-group">
               <input type="text" className="form-control" placeholder="PRODUCT TITLE" value={title} onChange={e=> settitle(e.target.value)}/>
            </div>

            <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="PRODUCT DESCRIPTION" id="ProductDescription" value={description} onChange={e=>{
                        setdescription(e.target.value)
                    }}></textarea>
            </div>

        
            <div className="form-group">
            <input type="number" name="Productbid" className="form-control" placeholder="STARTING PRICE" value={startPrice} onChange={e=>{
                        setstartPrice(e.target.value)
                    }} />
            </div>
            <div className='row'>
            <div style={{marginLeft:15,marginRight:80}} className="form-group">
            <input style={{width:150}} type="number" name="Length" className="form-control" placeholder="LENGTH" value={length} onChange={e=>{
                        setlength(e.target.value)
                    }} />
            </div>
            <div className="form-group">
            <input  style={{width:150}} type="number" name="Width" className="form-control" placeholder="WIDTH" value={width} onChange={e=>{
                        setwidth(e.target.value)
                    }} />
            </div>
            </div>
 
            <div className="form-group">
               <select className="custom-select" 
               value={category} onChange={(e) =>{
                  const selectedCategory=e.target.value;
                  setcategory(selectedCategory)
               }}>
                   
                  <option value="E">Landscapes</option>
                  <option value="H">Surrealism</option>
                  <option value="T">Abstract Art</option>  
            
               </select>
               </div>



         <input style={{marginLeft:90,color:'blue'}} type="file" placeholder="Upload Image" onChange={e=>{
             setimage(e.target.files[0])
         }}
         />
             <br/> <br/>

            <Calendar
                    selected={end_date}               
                    onChange={date=> setend_date(date)}
                    minDate={new Date(Date.now()+86400000)}
                   
                    
                />    

            <button style={{marginTop:30}} type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>ADD PRODUCT</button>
           
             
        </form>
       
        </div>
        <br/>
        
</div>
</div>
</div>
<FOOTER/>

        </div>
    )
}
export default Seller;