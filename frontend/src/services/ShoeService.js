import { sample_shoes, sample_sizes } from "../Data";

export const getAll = async () => sample_shoes;
export const getAllSizes = async () => sample_sizes;

export const search = async searchTerm => 
    sample_shoes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    