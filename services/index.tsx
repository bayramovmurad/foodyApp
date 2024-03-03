import axios from "axios";

const instanceAxios = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

//! Products 
export const getProducts = async () => {
    try {
        const response = await instanceAxios.get(`/api/products`);
        return response;
    } catch (error) {
        console.log({ error })
    }
};

export const deleteProduct = async (id: number | string) => {
    try {
        const response = await instanceAxios.delete(`/api/products/${id}`);
        return response;
    } catch (error) {
        console.log({ error })
    }
};



export const createProduct = async (data: any) => {
    try {
        const response = await instanceAxios.post(`/api/products`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}



export const updateProduct = async (id: string | number, data: any) => {
    try {
        const response = await instanceAxios.put(`/api/products/${id}`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}


//! Restaurants

export const getRestuarants = async () => {
    try {
        const response = await instanceAxios.get(`/api/restuarants/`);
        return response;
    } catch (error) {
        console.log(error)
    }
};


export const deleteRestuarant = async (id: string | number) => {
    try {
        const res = await instanceAxios.delete(`/api/restuarants/${id}`);
        return res
    } catch (error) {
        console.log(error);

    }
}

export const createRestaurant = async (data: any) => {
    try {
        const response = await instanceAxios.post(`/api/restuarants`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const updateRestaurant = async (id: string | number, data: any) => {
    try {
        const response = await instanceAxios.put(`/api/restuarants/${id}`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

//! Category

export const getCategory = async () => {
    try {
        const response = await instanceAxios.get(`/api/category`);
        return response;
    } catch (error) {
        console.log(error)
    }
};

export const deleteCategory = async (id: string | number) => {
    try {
        const res = await instanceAxios.delete(`/api/category/${id}`);
        return res
    } catch (error) {
        console.log(error);

    }
}

export const createCategory = async (data: any) => {
    try {
        const response = await instanceAxios.post(`/api/category`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const updateCategory = async (id: string | number, data: any) => {
    try {
        const response = await instanceAxios.put(`/api/category/${id}`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}


//! Offers

export const getOffers = async () => {
    try {
        const response = await instanceAxios.get(`/api/offer`);
        return response;
    } catch (error) {
        console.log(error)
    }
};

export const deleteOffer = async (id: string | number) => {
    try {
        const res = await instanceAxios.delete(`/api/offer/${id}`);
        return res
    } catch (error) {
        console.log(error);

    }
}

export const createOffer = async (data: any) => {
    try {
        const response = await instanceAxios.post(`/api/offer`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const updateOffer = async (id: string | number, data: any) => {
    try {
        const response = await instanceAxios.put(`/api/offer/${id}`, data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}


//! Client Register 

export const register = async (form: any) => {
    try {
        const response = await instanceAxios.post(`/api/auth/signup`, form);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const login = async (form: any) => {
    try {
        const response = await instanceAxios.post(`/api/auth/signin`, form);
        return response;
    } catch (error) {
        console.log({ error })
    }
}

// ! Client Profile

export const profileClient = async (data: any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        const response = await instanceAxios.put('/api/auth/user', data, {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log("a");
        console.log({ error })
    }
}

export const getProfileInfo = async () => {
    let item: any = localStorage.getItem("token")
    let acsess_token = JSON.parse(item)
    const response = await instanceAxios.put('/api/auth/user', {
        headers: {
            Authorization: `Bearer ${acsess_token.access_token}`,
        }
    });
    return response;
}


// ! basket client

export const getBasket = async () => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        const response = await instanceAxios.get(`/api/basket` , {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
};

export const addBasket = async (data: any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        const response = await instanceAxios.post('/api/basket/add', data, {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const deleteBasket = async (data: any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        const response = await instanceAxios.delete('/api/basket/delete', {
            data: data,
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log({ error })
    }
}

export const clearBasket = async (id: any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        const response = await instanceAxios.delete('/api/basket/clear', {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            },
            data: {
                "basket_id": id,
            },
        });
        return response;
    } catch (error) {
        console.log({ error })
    }
}

// Orders

export const addOrder = async (data: any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        
        const response = await instanceAxios.post('/api/order', data , {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getOrders = async () => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        
        const response = await instanceAxios.get('/api/order', {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = async (data:any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        
        const response = await instanceAxios.delete('/api/order', {
            data:data,
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

//!  History

export const getOrderHistory = async () => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        
        const response = await instanceAxios.get('/api/order/history', {
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const deleteOrderHistory = async (data:any) => {
    try {
        let item: any = localStorage.getItem("token")
        let acsess_token = JSON.parse(item)
        
        const response = await instanceAxios.delete('/api/order', {
            data:data,
            headers: {
                Authorization: `Bearer ${acsess_token.access_token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

// ! Refresh Token

export const refreshToken = async (data:any) => {
    try {
        const response = await instanceAxios.delete('/api/auth/refresh',data);
        return response;
    } catch (error) {
        console.log(error)
    }
}