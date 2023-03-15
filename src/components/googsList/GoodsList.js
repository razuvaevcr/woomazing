import { useEffect } from 'react';

import './goodsList.scss';


const GoodsList = ({goods}) => {
	const renderItems = (arr) => {
		const items = arr.map((item) => (
			<div key={item.id} className="goods__list-item">
				<a href="#"><img src={item.img} alt="good" /></a>
				<div className="goods__list-item-description">{`${item.name}$`}</div>
				<div className="goods__list-item-price">{`${item.price}$`}</div>
			</div>
		))
		return (
			<div className="goods__list">
				{items}
			</div>
		)
	}
	return (
		renderItems(goods)
	)
}

export default GoodsList;