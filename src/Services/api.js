import axios from "axios";
export const API_URL ='http://127.0.0.1:8000'
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
export default class ApiService{
  static saveStripeInfo(data={}){
    return api.post(`${API_URL}/save-stripe-info/`, data)
  }
}