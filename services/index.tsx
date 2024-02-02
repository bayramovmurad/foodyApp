import axios from "axios";

const instanceAxios = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

//! Products 
export const getProducts = async () => {
    try{
        const response = await instanceAxios.get(`/api/products`);
        return response;
    } catch(error){
        console.log({ error })
    }
};

export const deleteProduct = async (id: number | string) => {
    try{
        const response = await instanceAxios.delete(`/api/products/${id}`);
        return response;
    } catch(error){
        console.log({ error })
    }
};

export const createProduct = async (data) => {
    try{
        const response = await instanceAxios.post(`/api/products`,data);
        return response;
    } catch(error){
        console.log({ error })
    }
}

export const updateProduct = async (id,data) => {
    try{
        const response = await instanceAxios.put(`/api/products/${id}`,data);
        return response;
    } catch(error){
        console.log({ error })
    }
}

//! Restaurants

export const getRestuarants = async () => {
    try{
        const response = await instanceAxios.get(`/api/restuarants`);
        return response;
    } catch(error){
        console.log(error)
    }
};


export const deleteRestuarant = async (id:string | number) => {
    try {
        const res = await instanceAxios.delete(`/api/restuarants/${id}`);
        return res
    } catch (error) {
        console.log(error);
        
    }
}