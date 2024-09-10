import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
	return (
		<div className='container-home'>
			<div className='container-home-bg'>
				<div className='container-register-for-discount'>
					<div className='container-text-get-discount'>
						<h3>inchpes stanal zexch</h3>
						<p>Խնդրում ենք կապ հաստատել մեր հետ ASAP, եթե խնդիրներ ունեք։</p>
						<button>click me</button>
					</div>
					<div className='container-sub-img'>
						<div className='container-sub-img-element first'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>

						</div>
						<div className='container-sub-img-element second'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
						<div className='container-sub-img-element third'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
						<div className='container-sub-img-element fourth'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
						<div className='container-sub-img-element fifth'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
						<div className='container-sub-img-element sixth'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
						<div className='container-sub-img-element seventh'>
							<img src='/images/baby-mineral-sunscreen-lotion-SPF-40.webp' alt='cdc'/>
						</div>
					</div>
				</div>
			</div>
			<div className='container-shop-by-category'>
				<h3>Shop by category</h3>
				<div className='container-category'>
					<div className='category'>
						<Link to='ChildrenAndNewborns' className='caption-category'>
							<img src='/images/honestDiaperCreamIMG/honest4.jpg' alt='cdc'/>
						</Link>
						<Link to='ChildrenAndNewborns'>
							<h4>երեխաներ եւ նործիններ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Mothers' className='caption-category'>
							<img src='/images/honestDiaperCreamIMG/honest4.jpg' alt='cdc'/>
						</Link>
						<Link to='Mothers'>
							<h4>մայրիկներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Pregnant' className='caption-category'>
							<img src='/images/honestDiaperCreamIMG/honest4.jpg' alt='cdc'/>
						</Link>
						<Link to='Pregnant'>
							<h4>հղիներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Detergents' className='caption-category'>
							<img src='/images/honestDiaperCreamIMG/honest4.jpg' alt='cdc'/>
						</Link>
						<Link to='Detergents'>
							<h4>լվացող միջոցներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='giftSets' className='caption-category'>
							<img src='/images/honestDiaperCreamIMG/honest4.jpg' alt='cdc'/>
						</Link>
						<Link to='giftSets'>
							<h4>նվերների սեթեր</h4>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
