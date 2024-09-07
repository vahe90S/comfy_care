import React, { useEffect, useState } from 'react';
import './ChildrenAndNewborns.scss';

export default function ChildrenAndNewborns() {
	const [honestDiaperCream,setHonestDiaperCream] = useState([]);
	useEffect(() => {
		const getHonestDiaperCreamProd = async() => {
			const res = await fetch('http://localhost:8080/honestDiaperCream');
			const data = await res.json();
			setHonestDiaperCream(data);
		};
		getHonestDiaperCreamProd();
	},[])

	
	return (
		<div className='container-child-and-mam'>
		<h2 className="caption-container-child-and-mam">lvacox mijocner</h2>
<p className="text-container-child-and-mam"></p>
		<p>lorem 30</p>
			{honestDiaperCream.map(el => (
				<div className='container-product'>
					<div className='container-product-img'>
						<img src={el.image} alt='product' />
					</div>
					<div>
						<span>{el.captionCream}</span>
						<span>{el.price}</span>
						<span>{el.weight}</span>
					</div>
				</div>
			))}
		</div>
	)
}
