import React, {useEffect, useState} from "react";
import './ChildrenAndNewbornsProducts.scss';
import {useParams} from "react-router-dom";

export default function ChildrenAndNewbornsProducts() {
    const [cremProduct, setCremProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        const cremPipetteProduct = async () => {
            const res = await fetch('http://localhost:8080/bodyLotionPipette');
            const data = await res.json();
            setCremProduct(data);
        };
        cremPipetteProduct();
    }, []);

    const updateProduct = async (id, number) => {
        let newQuantity;
        const updatedProducts = cremProduct.map((product) => {
            if (product.id === id) {
                const strToNum = parseInt(product.quantity);
                newQuantity = strToNum + number < 1 ? 1 : strToNum + number;
                return {
                    ...product,
                    quantity: newQuantity,
                };
            }
            return product;
        });
        setCremProduct(updatedProducts);
        const newQuantityStr = newQuantity.toString();
        await fetch(`http://localhost:8080/bodyLotionPipette/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({quantity: newQuantityStr}),
        });
    };

    const updateAromaAndSize = async (id, field, value) => {
        const updatedProducts = cremProduct.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    [field]: value,
                };
            }
            return product;
        });
        setCremProduct(updatedProducts);
        await fetch(`http://localhost:8080/bodyLotionPipette/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({[field]: value}),
        });
    };

    return (
        <div className="container-crem-pipette">
            {
                cremProduct.map((el) => (
                    <div className="container-product" key={el.id}>
                        <div className="container-img">
                            <img src={el.image} alt="product"/>
                        </div>
                        <div className="container-info-product">
                            <h2 className="product-caption">{el.name}</h2>
                            <span className="price">{el.price}</span>
                            <div className="product-options">
                                <div className="select-aroma">
                                    <h4>Select Aroma:</h4>
                                    <div className="container-label-select-aroma aroma">
                                        <label>
                                            <input
                                                type="radio"
                                                name={`aroma-${el.id}`}
                                                checked={el.aroma === "Fragrance Free"}
                                                onChange={() => updateAromaAndSize(el.id, 'aroma', 'Fragrance Free')}
                                            /> Fragrance Free
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`aroma-${el.id}`}
                                                checked={el.aroma === "Vanilla + Ylang Ylang"}
                                                onChange={() => updateAromaAndSize(el.id, 'aroma', 'Vanilla + Ylang Ylang')}
                                            /> Vanilla + Ylang Ylang
                                        </label>
                                    </div>
                                </div>
                                <div className="container-label-select-size">
                                    <label>
                                        <input
                                            type="radio"
                                            name={`size-${el.id}`}
                                            checked={el.size === "Regular 11.8 fl oz"}
                                            onChange={() => updateAromaAndSize(el.id, 'size', 'Regular 11.8 fl oz')}
                                        /> Regular 11.8 fl oz
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`size-${el.id}`}
                                            checked={el.size === "Travel 1.69 fl oz"}
                                            onChange={() => updateAromaAndSize(el.id, 'size', 'Travel 1.69 fl oz')}
                                        /> Travel 1.69 fl oz
                                    </label>
                                </div>
                            </div>
                            <div className="cart-options">
                                <div className="quantity">
                                    <button onClick={() => updateProduct(el.id, -1)}>-</button>
                                    <span>{el.quantity}</span>
                                    <button onClick={() => updateProduct(el.id, 1)}>+</button>
                                </div>
                                <button className="btn-add-to-cart">Ավելացնել զամբյուղ</button>
                            </div>
                            <p>{el.freeShipping}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
