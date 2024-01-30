import axios from 'axios';


export const getAll = async () => {
    const {data} = await axios.get('/api/shoes');
    return data;
};
export const getAllSizes = async () => {
    const {data} = await axios.get ('/api/shoes/sizes');
    return data;
};

export const search = async searchTerm => 
    {
     const {data} = await axios.get('/api/shoes/search' + searchTerm);
    return data;
    }

export const getAllBySize = async size => {
     if (size === 'ALL') return getAll();
    const {data} = await axios.get ('/api/shoes/size/' + size);
    return data;
};
export const getById = async shoeId => {
    const {data} = await axios.get('/api/shoes/' + shoeId);
    return data; 
};
    
    