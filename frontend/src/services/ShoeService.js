import { sample_shoes } from "../Data";

export const getAll = async () => sample_shoes;

export const search = async searchTerm => 
    sample_shoes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    