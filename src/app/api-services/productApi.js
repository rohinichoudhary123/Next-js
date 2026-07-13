import axios from 'axios'


let getProducts= ()=>{
    return axios.get("https://dummyjson.com/products")
    .then((res)=>res.data.products)
}

let getProductDetails= (id) =>{
        return axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.data.products)
}


export {getProducts , getProductDetails}