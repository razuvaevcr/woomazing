import './goodsList.scss';
import good from '../../resources/img/usa.jpg';

const GoodsList = () => {
	return (
		<div className="goods">
			<div className="categorys">
				<a href="#" className="categorys-item">Все</a>
				<a href="#" className="categorys-item">Пальто</a>
				<a href="#" className="categorys-item">Свитшоты</a>
				<a href="#" className="categorys-item">Кардиганы</a>
				<a href="#" className="categorys-item">Толстовки</a>
			</div>
			<span className="goods__quality goods__quality_top">Показано: 9 из 12 товаров</span>
			<div className="goods__list">
				<div className="goods__list-item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__list-item-description">Футболка USA</div>
					<div className="goods__list-item-price">124$</div>
				</div>
				<div className="goods__list-item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__list-item-description">Футболка USA</div>
					<div className="goods__list-item-price">124$</div>
				</div>
				<div className="goods__list-item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__list-item-description">Футболка USA</div>
					<div className="goods__list-item-price">124$</div>
				</div>
				<div className="goods__list-item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__list-item-description">Футболка USA</div>
					<div className="goods__list-item-price">124$</div>
				</div>
			</div>
			<span className="goods__quality goods__quality_bottom">Показано: 9 из 12 товаров</span>
			<div className="goods__pages">
				<a href="#" className="goods__pages-page">1</a>
				<a href="#" className="goods__pages-page">2</a>
				<a href="#" className="goods__pages-page goods__pages-page_next">
					arrow
				</a>
			</div>
		</div>
	)
}

export default GoodsList;