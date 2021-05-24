import http from './httpService';

export async function addProduct(data){
    return http.post('/Listing/',data)
}

export default {
    addProduct
}