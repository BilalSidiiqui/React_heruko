import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import FOOTER from "./footer";
import userServices from "../Services/UserServices";
import Comment from "./comment";
import Bids from "./bids";
import Timer from "./Timer";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [bid_price, setbid] = React.useState();
  const [comment, setcomment] = React.useState();
  const [highbid, sethighbid] = React.useState();

  const BidError = () => {
    toast.error("Bid price cannot be greater than 10000", {
      position: "top-center",
    });
  };
  const CommentError = () => {
    toast.error("You cannot add Special characters in comments!", {
      position: "top-center",
    });
  };

  var { id } = useParams();
  const url = `https://artmandi.herokuapp.com/Listing/${id}/`;

  const [product, setproduct] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setproduct(response.data);
    });
  }, []);

  if (product) {
    content = (
      <div
        style={{
          backgroundColor: "#F8F8F8",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <h5 style={{ fontSize: 40, paddingTop: 50 }}>{product.title}</h5>
        <div className="row" style={{ backgroundColor: "#F8F8F8" }}>
          <img
            src={product.image}
            style={{ height: 400, width: 600, marginLeft: 200, marginTop: 150 }}
          />

          <div style={{ marginLeft: 100, marginTop: 50 }} className="col-4">
            <text style={{ marginRight: 400 }}>Product Info</text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Price</th>
                  <th>X-Dimension</th>
                  <th>Y-Dimension</th>
                </tr>

              </thead>
              <tbody>
                <tr>
                  <td style={{ width: 120 }}>{product.artist}</td>
                  <td style={{ width: 80 }}>${product.start_price}</td>

                  <td>{product.length} inches</td>
                  <td>{product.width} inches</td>
                </tr>
              </tbody>
            

            </Table>
            <Table striped bordered hover>
            <thead>
                
                <tr>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.description}</td></tr>

                </tbody>
            </Table>
          
          <div style={{backgroundColor:'#DCDCDC',borderWidth:10,borderColor:'brown' ,paddingTop:15,paddingBottom:15}}>  <Timer id={id} /></div>

            <div className="form-group">
              
<button type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                
                    var listing = id
                    userServices.closeBid(listing).then((data)=>{
                      alert("Product has been sold!")
                        window.location.href="/SoldProducts"
                    
                    }).catch(err=>{
                        console.log(err)
                    
                    })
                   
                }}>Close Bid</button>

              {localStorage.getItem("user_id") != product.created_by && (
                <form>
                  <input
                    type="number"
                    className="form-control"
                    style={{ width: 505, marginBottom: 15, marginTop: 30 }}
                    placeholder="PLACE BID"
                    value={bid_price}
                    onChange={(e) => {
                      setbid(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => {
                      if (bid_price > 10000) {
                       alert("Bid price should not be greater than 10000");
                      } else if (bid_price < product.start_price) {
                        alert(
                          "Bid must be greater than the Starting price of Product "
                        );
                      } else if (bid_price <= highbid) {
                        alert("Bid price must be greater than the Highest bid");
                      } 
                     
                      else if(bid_price> highbid) {
                        var user = localStorage.getItem("user_id");
                        var listing = id;
                        if(user>0){
                        userServices
                          .addBid(user, bid_price, listing)
                          .then((data) => {
                            alert("Bid has been place successfully");
                            console.log(data);
                          })
                          .catch((err) => {
                            console.log(err);
                            alert("adding failed");
                          });
                        toast.success("Bid has been placed successfully!")
                        }
                      else{
                        alert("You can't place bid without being logged In, Login First")
                      }
                        }
                      else {
                        alert("Bid Error! The field is empty");
                      }
                    }}
                  >
                    Bid Now!
                  </button>
                  <ToastContainer />
                </form>
              )}
            </div>
            <Bids
              id={id}
              getHigherprice={(price) => {
                sethighbid(price);
              }}
            />
            <br />

            <form>
              <div className="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="COMMENT"
                  value={comment}
                  onChange={(e) => {
                    setcomment(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(e) => {
                  if(comment.includes("@") || comment.includes("!")|| comment.includes("#")|| comment.includes("$")|| comment.includes("%")|| comment.includes("^")|| comment.includes("&")|| comment.includes("*")|| comment.includes("(")|| comment.includes("/"))
                 {  
                   alert("Special charaters cannot be included in the comments")
                 }
                 else {
                    var user = localStorage.getItem("user_id");
                    var listing = id;
                    userServices
                      .addComment(user, comment, listing)
                      .then((data) => {
                        console.log(comment);
                        alert("comment has been placed successfully");
                      })
                      .catch((err) => {
                        console.log(err);
                        alert("adding failed");
                      });
                      alert("Comment has been placed successfully")
                  } 
                }}
              >
                SEND
              </button>

              <br />
            </form>
            <Comment id={id} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App" style={{ backgroundColor: "#F8F8F8" }}>
      {content}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <FOOTER />
    </div>
  );
}
export default Product;
