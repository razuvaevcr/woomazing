import GoodsList from "../googsList/GoodsList";

import './shop.scss';

const Shop = () => {
	return (
		<div className="shop">
			<div className="categorys">
				<a href="#" className="categorys-item">Все</a>
				<a href="#" className="categorys-item">Пальто</a>
				<a href="#" className="categorys-item">Свитшоты</a>
				<a href="#" className="categorys-item">Кардиганы</a>
				<a href="#" className="categorys-item">Толстовки</a>
			</div>
			<span className="shop__quality shop__quality_top">Показано: 9 из 12 товаров</span>
			<GoodsList/>
			<span className="shop__quality shop__quality_bottom">Показано: 9 из 12 товаров</span>
			<div className="shop__pages">
				<a href="#" className="shop__pages-page">1</a>
				<a href="#" className="shop__pages-page">2</a>
				<a href="#" className="shop__pages-page shop__pages-page_next">
					arrow
				</a>
			</div>
		</div>
	)
}

export default Shop;