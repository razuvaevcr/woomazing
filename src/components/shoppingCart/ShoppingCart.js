import img from '../../resources/img/stairs.jpg';

import './shoppingCart.scss';


const ShoppingCart = () => {
	return (
		<div className="shopping-cart">
			<div className="titles">
				<div className="titles__name">Товар</div>
				<div className="titles__price">Цена</div>
				<div className="titles__amount">Количество</div>
				<div className="titles__total">Всего</div>
			</div>
			<div className="shopping-cart__goods">
				<div className="shopping-cart__goods__good">
					<div className="shopping-cart__goods__good__trash-btn">x</div>
					<img src={img} alt="woman" className="shopping-cart__goods__good__img" />
					<div className="shopping-cart__goods__good__name">Футболка USA</div>
					<div className="shopping-cart__goods__good__price">$129</div>
					<input type="text" placeholder="1" className="shopping-cart__goods__good__amount" />
					<div className="shopping-cart__goods__good__total">$129</div>
				</div>
			</div>
			<div className="coupons">
				<input type="text" placeholder="Введите купон" className="coupons__coupon" />
				<button className="coupons__btn">Применить купон</button>
			</div>
			<div className="checkout">
				<div className="checkout__fullprice">Подытог: $129</div>
				<div className="checkout__final">
					<div className="checkout__final__total">Итого: $129</div>
					<button className="checkout__final__btn">Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}

export default ShoppingCart;