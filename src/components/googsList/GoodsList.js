import './goodsList.scss';
import good from '../../resources/img/usa.jpg';

const GoodsList = () => {
	return (
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
	)
}

export default GoodsList;