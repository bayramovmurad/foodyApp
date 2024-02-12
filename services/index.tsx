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
        const response = await instanceAxios.get(`/api/restuarants`);
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
        const response = await instanceAxios.put('/api/user', data);
        return response;
    } catch (error) {
        console.log("a");
        console.log({ error })
    }
}


// ! basket client

export const addBasket = async (data: any) => {
    try {
        const response = await instanceAxios.post('/api/basket/add', data);
        return response;
    } catch (error) {
        console.log({ error })
    }
}
