import img from '../../resources/img/walk.jpg'

import './good.scss';

const Good = () => {
	return (
		<div className="good">
			<img src={img} alt="woman" className="good__img" />
			<div className="good__description">
				<div className="good__description__price">
					<div className="good__description__price__new">$311</div>
					<div className="good__description__price__old">$450</div>
				</div>
				<div className="good__description__size">
					<div className="good__description__size__title">Выберите размер</div>
					<ul className="good__description__size-list">
						<li className="good__description__size-list__item">xs</li>
						<li className="good__description__size-list__item">s</li>
						<li className="good__description__size-list__item">m</li>
						<li className="good__description__size-list__item">l</li>
						<li className="good__description__size-list__item">xl</li>
					</ul>
				</div>
				<div className="good__description__color">
					<div className="good__description__color__title">Выберите цвет</div>
					<ul className="good__description__color-list">
						<li className="good__description__color-list__item"></li>
						<li className="good__description__color-list__item"></li>
						<li className="good__description__color-list__item"></li>
						<li className="good__description__color-list__item"></li>
					</ul>
				</div>
				<div className="good__description__adding">
					<input type="text" placeholder="1" className="good__description__adding__count" />
					<button className="good__description__adding__btn">Добавить в корзину</button>
				</div>
				
			</div>
		</div>
	)
}

export default Good;