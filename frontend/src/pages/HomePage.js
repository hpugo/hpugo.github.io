import React, { useReducer, useEffect } from "react";
import { getAll, search } from "../services/ShoeService";
import Thumbnails from "../components/Thumbnails";
import { useParams } from "react-router-dom";
import Search from "../components/Search";

const initialState = { shoes: [] };

const reducer = (state, action) => {
    switch (action.type){
        case'SHOES_LOADED':
            return{...state, shoes: action.payload };
        default:
            return state;
    }
}
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { shoes } = state;
    const { searchTerm } = useParams();

    useEffect(() => {
        const loadShoes = searchTerm ? search(searchTerm) : getAll();
        loadShoes.then(shoes => dispatch ({ type: 'SHOES_LOADED', payload: shoes }))
    }, [searchTerm])
    return <>
    <Search />
    <Thumbnails shoes={shoes}/>
    </>;
}