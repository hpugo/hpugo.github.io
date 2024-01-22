import { sample_shoes, sample_sizes } from "../Data";

export const getAll = async () => sample_shoes;
export const getAllSizes = async () => sample_sizes;

export const search = async searchTerm => 
    sample_shoes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

export const getAllBySize = async size => {
     if (size === 'ALL') return getAll();
    return sample_shoes.filter(item => {
            const itemSize = Number(item.size);
    
     if (!isNaN(itemSize)) {
         return itemSize === Number(size);
         }
    
          return false;
        });
    };
    
    