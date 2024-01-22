import React, { useEffect, useState } from "react";
import classes from '../components/css/shoepage.module.css';
import { useParams } from "react-router-dom";
import { getById } from "../services/ShoeService";
import Sizes from "../components/Sizes";
import Price from "../components/Price";

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
            <div className={classes.condition}>Condition:{shoe.condition}</div>
            <div className={classes.price}><Price price={shoe.price}/></div>
            <div className={classes.size}> Size: {shoe.size} </div>
            <div>
                <button>
                    Add to Cart
                </button>
            </div>
        </div>
        
    </div> 
    )}
    </>
    )
    }
