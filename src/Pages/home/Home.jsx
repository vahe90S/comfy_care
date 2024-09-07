import React from 'react'
import './Home.scss'
import subPic1 from '../../images/honist-bubble-bath.webp'
import subPic2 from '../../images/calendula-body-oil.webp'
import subPic3 from '../../images/honist-face-body.webp'
import subPic4 from '../../images/organic-body-face.webp'
import subPic5 from '../../images/organic-body-face.webp'
import subPic6 from '../../images/10-044_CalendulaBabyOil_lifestyle3_1080x1080_web.webp'
import subPic7 from '../../images/honest.webp'
import { Link } from 'react-router-dom'

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
							<img src={subPic6} alt='cdc' />
						</div>
						<div className='container-sub-img-element second'>
							<img src={subPic2} alt='cdc' />
						</div>
						<div className='container-sub-img-element third'>
							<img src={subPic3} alt='cdc' />
						</div>
						<div className='container-sub-img-element fourth'>
							<img src={subPic4} alt='cdc' />
						</div>
						<div className='container-sub-img-element fifth'>
							<img src={subPic5} alt='cdc' />
						</div>
						<div className='container-sub-img-element sixth'>
							<img src={subPic1} alt='cdc' />
						</div>
						<div className='container-sub-img-element seventh'>
							<img src={subPic7} alt='cdc' />
						</div>
					</div>
				</div>
			</div>
			<div className='container-shop-by-category'>
				<h3>Shop by category</h3>
				<div className='container-category'>
					<div className='category'>
						<Link to='ChildrenAndNewborns' className='caption-category'>
							<img src={subPic1} alt='ccd' />
						</Link>
						<Link to='ChildrenAndNewborns'>
							<h4>երեխաներ եւ նործիններ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Mothers' className='caption-category'>
							<img src={subPic1} alt='ccd' />
						</Link>
						<Link to='Mothers'>
							<h4>մայրիկներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Pregnant' className='caption-category'>
							<img src={subPic1} alt='ccd' />
						</Link>
						<Link to='Pregnant'>
							<h4>հղիներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='Detergents' className='caption-category'>
							<img src={subPic1} alt='ccd' />
						</Link>
						<Link to='Detergents'>
							<h4>լվացող միջոցներ</h4>
						</Link>
					</div>

					<div className='category'>
						<Link to='giftSets' className='caption-category'>
							<img src={subPic1} alt='ccd' />
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
