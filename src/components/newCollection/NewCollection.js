import good from '../../resources/img/usa.jpg'
import './newCollection.scss'

const NewCollection = () => {
	return (
		<div className="collection">
			<h2 className="title">Новая коллекция</h2>
			<div className="goods">
				<div className="goods__item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__item-description">Футболка USA</div>
					<div className="goods__item-price">124$</div>
				</div>
				<div className="goods__item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__item-description">Футболка USA</div>
					<div className="goods__item-price">124$</div>
				</div>
				<div className="goods__item">
					<a href="#"><img src={good} alt="good" /></a>
					<div className="goods__item-description">Футболка USA</div>
					<div className="goods__item-price">124$</div>
				</div>
			</div>
			<div className="btn">Открыть магазин</div>
		</div>
	)
}

export default NewCollection;