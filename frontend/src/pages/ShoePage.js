import React, { useEffect, useState } from "react";
import classes from '../components/css/shoepage.module.css';
import { useParams } from "react-router-dom";
import { getById } from "../services/ShoeService";

// export default function ShoePage() {
//     const [shoe, setShoe] = useState({});
//     const {id} =  useParams();

//     useEffect(() => { 
//         getById(id).then(setShoe);
//     }, [id]);
//     return <div>ShoePage</div>;
// }

export default function ShoePage() {
    const [shoe, setShoe] = useState({});
    const { id } = useParams();

    useEffect(() => { 
        console.log('Fetching shoe data for id:', id);

        getById(id)
            .then((shoeData) => {
                console.log('Fetched shoe data:', shoeData);
                setShoe(shoeData);
            })
            .catch(error => {
                console.error('Error fetching shoe data:', error);
            });
    }, [id]);

    console.log('Rendering ShoePage with shoe:', shoe);

    return (
        <div className={classes.container}>
            <h2>{shoe.name}</h2>
            {/* Add the rest of your shoe details here */}
        </div>
    );
}

