import React, { useEffect, useState } from "react";
import classes from '../components/css/shoepage.module.css';
import { useParams } from "react-router-dom";
import { getById } from "../services/ShoeService";
import Sizes from "../components/Sizes";

export default function ShoePage() {
    const [shoe, setShoe] = useState({});
    const {id} =  useParams();

    useEffect(() => { 
        getById(id).then(setShoe);
    }, [id]);
    return ( 
    <>
    { shoe && ( 
    <div className={classes.container}>
        <img className={classes.image} 
        src={`/shoes/${shoe.imageUrl}`}
        alt={shoe.name}/>
        <div className={classes.details}>
            <div className={classes.header}>
                <span className={classes.name}>{shoe.name}</span>
            </div>
            <div className={classes.price}>{shoe.price}</div>
            <div className={classes.condition}>{shoe.condition}</div>
            <div className={classes.size}>
                {shoe.sizes && (
                    <Sizes sizes={shoe.sizes.map(size => ({ name: size }))} forShoePage={true}/>
                )}
            </div>
            
        </div>
    </div> 
    )}
    </>
    )
    }
