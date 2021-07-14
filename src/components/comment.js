import React, { Component } from 'react'
import './comments.css'
 class comment extends Component {
   
  constructor(props){
    super(props);
  
    this.state = {       
      comment:[],
       visible:2, }
      
      this.loadmore= this.loadmore.bind(this);
     
   
  }
  loadmore(){
    this.setState((previous)=>{
      return {visible: previous.visible + 2}
    })
  }

componentDidMount(){
fetch(`https://artmandi.herokuapp.com/Comment/?listing=${this.props.id}`).then((resp)=> {
  resp.json().then((result) => {
    // console.warn (result.data)
    this.setState({comment:result}
        )
  })
})

     }  
    render() {
        return (
            <div className='App'>
            <div style={{fontWeight:'bold'}}>
                COMMENTS: </div>
            
{
this.state.comment ?
this.state.comment.slice(0,this.state.visible).map((item)=>
<div className='container' style={{backgroundColor:'#fff'}}>
  <div className='row'>
<div>
<text style={{paddingLeft:20, marginRight:40,fontWeight:'bold'}}>{item.username}...</text>
</div>
<div>
<text>{item.comment}</text>
</div>
<hr style={{
    color: '#7a7d85', 
    height: 0.1,
    width:'100%'
}}/>
</div>

</div>
 
  )
   :
   <h1>api data no found</h1>
   
   }
   <div className='col-md-12'>
  {this.state.visible < this.state.comment.length &&
  <button  style={{marginBottom:50}} type="button"  className="btn btn-sm btn-primary" style={{marginLeft:350,marginTop:20}} onClick={this.loadmore}>SHOW MORE</button>
  }
</div>
   </div>
        )
    }
}
export default comment;