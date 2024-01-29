import { baseUrl } from "../constants/base/baseUrl";

import axios from "axios";
const instanceAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getProductsAdmin = async () => {
    try{
        const response = await instanceAxios.get(`api/products`);
        return response;
    } catch(error){
        console.log({ error })
    }
};

// export const deleteProductAdmin = async (id: number | string) => {
//     try{
//         console.log(id);
//         const response = await instanceAxios.delete(`api/products/${id}`);
//         return response;
//     } catch(error){
//         console.log({ error })
//     }
// };