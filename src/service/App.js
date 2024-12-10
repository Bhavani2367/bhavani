import axios from "axios";

export const getProducts = async () => {
        try{
           const response = await axios.get('http://localhost:9090/api/v1/getall')
           console.log('API Response:', response.data);   
           return response.data;
           }
           catch(error)
            {   console.log(error)
                return [];
            }
};