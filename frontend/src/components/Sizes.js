import React from "react";
import classes from './css/sizes.module.css'
import { Link } from "react-router-dom";

export default function Sizes({sizes, forShoePage}) {
    return( 
    <div className={classes.container}
    style={{
        justifyContent: forShoePage ? 'start' : 'center',
    }}
    >
        {
            sizes.map(size =>
                <Link key={size.name} to={`/tag/${size.name}`}>
                    {size.name}
                    {!forShoePage && `(${size.count})`}
                </Link>)
        }

    </div>
    );
}