import React, { Component } from "react";
import "./bids.css";
import Table from "react-bootstrap/Table";

class bids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bid_price: [],
      FilterUsername: [],
      visible: 2,
    };

    this.loadmore = this.loadmore.bind(this);
  }
  loadmore() {
    this.setState((previous) => {
      return { visible: previous.visible + 2 };
    });
  }

  componentDidMount() {
    fetch(`https://artmandi.herokuapp.com/Bid/?listing=${this.props.id}`).then(
      (resp) => {
        resp.json().then((result) => {
          let bidPrizes = result.map(e => e.bid_price)
          let products = result.sort(function(a, b){
            return b.bid_price - a.bid_price
            });
            this.setState({bid_price:products})
              this.props.getHigherprice(Math.max(...bidPrizes))
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          <text style={{ fontWeight: "bold" }}>BIDS :</text>
        </div>

        {this.state.bid_price ? (
          this.state.bid_price.slice(0, this.state.visible).map((item) => (
            <div className="container" style={{ backgroundColor: "#fff" }}>
              <div className="row">
                <div>
                  <text
                    style={{
                      paddingLeft: 20,
                      marginRight: 200,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    BID BY : {item.username}
                  </text>
                </div>
                <div>
                  <text>BID: ${item.bid_price}</text>
                </div>
                <hr
                  style={{
                    color: "#7a7d85",
                    height: 0.1,
                    width: "100%",
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>api data no found</h1>
        )}
        <div className="col-md-12">
          {this.state.visible < this.state.bid_price.length && (
            <button
              style={{ marginBottom: 50 }}
              type="button"
              className="btn btn-sm btn-primary"
              style={{ marginLeft: 350, marginTop: 20 }}
              onClick={this.loadmore}
            >
              SHOW MORE
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default bids;
