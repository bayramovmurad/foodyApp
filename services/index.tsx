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

export const createProduct = async (data:any) => {
    try{
        const response = await instanceAxios.post(`/api/products`,data);
        return response;
    } catch(error){
        console.log({ error })
    }
}

export const updateProduct = async (id:string|number,data:any) => {
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


//! Category

export const getCategory = async () => {
    try{
        const response = await instanceAxios.get(`/api/category`);
        return response;
    } catch(error){
        console.log(error)
    }
};

export const deleteCategory = async (id:string | number) => {
    try {
        const res = await instanceAxios.delete(`/api/category/${id}`);
        return res
    } catch (error) {
        console.log(error);
        
    }
}

export const createCategory = async (data:any) => {
    try{
        const response = await instanceAxios.post(`/api/category`,data);
        return response;
    } catch(error){
        console.log({ error })
    }
}

export const updateCategory = async (id:string | number,data:any) => {
    try{
        const response = await instanceAxios.put(`/api/category/${id}`,data);
        return response;
    } catch(error){
        console.log({ error })
    }
}