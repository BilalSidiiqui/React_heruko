import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL="http://127.0.0.1:8000/"

class GenericService{

    get=(url)=> new Promise((resolve,reject)=>{
        axios.get(url).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })


    post=(url,data)=> new Promise((resolve,reject)=>{
        data=qs.stringify(data)
        axios.post(url,data).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })

   delete=(url)=> new Promise((resolve,reject)=>{
        axios.delete(url).then(
            res=>{
                resolve(res.data)
            }
        ).catch(err=>{
            reject(err)
        })
    })
    

}
export default GenericService;