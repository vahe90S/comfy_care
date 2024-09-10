import React, {useEffect, useState} from 'react';
import './ChildrenAndNewborns.scss';
import {Link} from "react-router-dom";

export default function ChildrenAndNewborns() {
    const [honestDiaperCream, setHonestDiaperCream] = useState([]);
    useEffect(() => {
        const getHonestDiaperCreamProd = async () => {
            const res = await fetch('http://localhost:8080/honestDiaperCream');
            const data = await res.json();
            setHonestDiaperCream(data);
        };
        getHonestDiaperCreamProd();
    }, [])


    return (
        <div className='container-child-and-mam'>
            <h2 className="caption-container-child-and-mam">Խնամքի Միջոցներ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, laborum!</p>
            <div className="sub-container-child-and-mam">
                {honestDiaperCream.map(el => (
                    <div className='container-product' key={el.id}>
                        <Link to="ChildrenAndNewbornsProducts" className='container-product-img'>
                            <img src={el.image} alt='product'/>
                        </Link>
                        <div className="container-caption-text">
                            <span className="container-text">{el.captionCream}</span>
                            <span>{el.price}</span>
                            <span>{el.weight}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
