import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState,useEffect } from "react";
import ApiService from "../Services/api";
import UserServices from '../Services/UserServices'

const CheckoutForm = (props) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    // add these lines
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    // ApiService.saveStripeInfo({
    //   email,
    //   payment_method_id: paymentMethod.id,
    // })
    UserServices.paymentgateway({
      email,
      payment_method_id: paymentMethod.id,
      Highestbid:props.winprice,
      id:props.id
        })
      .then((response) => {
        alert(response.message)
        window.location.href='./buyer'
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message)
        console.log(error);
      });
  };

  useEffect(() => {
  console.log(props)
   
  }, [])


  return (
    <form
      style={{
        marginTop: 100,
        backgroundColor: "#FCFCFC",
        paddingTop: 59,
        paddingBottom: 59,
        paddingRight: 40,
        paddingLeft: 40,
      }}
      onSubmit={handleSubmit}
      className="stripe-form"
    >
      <div>
        <label htmlFor="email" style={{ fontSize: 20, fontWeight: "bold" }}>
          Email Address
        </label>
        <text style={{backgroundColor:'blue'}}>{props.Aftersold}</text>
        <div>
          <input
            className="form-input"
            style={{ width: 300, backgroundColor: "#f8f8f8", borderRadius: 7 }}
            id="email"
            name="name"
            type="email"
            placeholder="jenny.rosen@example.com"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <label for="card-element" style={{ fontSize: 20, fontWeight: "bold" }}>
          Credit or debit card
        </label>
        <CardElement id="card-element" onChange={handleChange} />
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button
        style={{ marginTop: 30, width: 200, marginLeft: 110 }}
        type="submit"
        className="btn btn-primary btn-block"
      >
        Submit Payment
      </button>
    </form>
  );
};
export default CheckoutForm;
