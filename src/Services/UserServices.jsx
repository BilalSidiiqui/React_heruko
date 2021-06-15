import GenericServices from "./genericService";
import jwtDecode from "jwt-decode";
import { createContext } from "react";

class UserServices extends GenericServices {
  constructor() {
    super();
  }

  login = (username, password) =>
    // new Promise((resolve, reject) =>
    this.post("/login/", { username, password }).then((person) => {
      localStorage.setItem("user_id", person.user_id);
      localStorage.setItem("username", person.username);
      return person;
    });
  // );

  register = (username, email, password, confirmPassword) =>
    new Promise((resolve, reject) => {
      this.post("/register/", {
        username,
        email,
        password,
        confirmPassword,
      }).then((token) => {
        resolve(token);
      });
    });

  logout = () => {
    localStorage.removeItem("user_id", "");
  };

  addProduct = (data) => this.post("/Listing/", data);

  addComment = (user, comment, listing) =>
    this.post("/Comment/?format=api", {
      user,
      comment,
      listing,
    });

  paymentgateway = (data={}) =>
    this.post("/save-stripe-info/", data);

  closeBid = (listing) =>
    this.post("/closebid/", {
      listing,
    });

  addBid = (user, bid_price, listing) =>
    this.post("/Bid/?format=api", {
      user,
      bid_price,
      listing,
    }).then((res) => {
      return res.data;
    });

  verifyaccount = (uid, token) =>
    this.post("/activate/", {
      uid,
      token,
    });

  isLoggedIn = () => {
    console.log(localStorage.getItem("user_id"));

    return localStorage.getItem("user_id") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
}

let userServices = new UserServices();
export default userServices;
