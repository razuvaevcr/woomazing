

import './ordering.scss';

const Ordering = () => {
	return (
		<div className="ordering">
			<div className="ordering__form">
					<div className="ordering__form__main-data">
						<div className="ordering__form__main-data__title">Данные покупателя</div>
						<input name="name" placeholder="Имя" type="text" className="ordering__form__main-data__item" />
						<input name="email" placeholder="E-mail" type="text" className="ordering__form__main-data__item" />
						<input name="phone" placeholder="Телефон" type="text" className="ordering__form__main-data__item" />
					</div>
					<div className="ordering__form__address">
						<div className="ordering__form__address__title">Адрес получателя</div>
						<input name="name" placeholder="Страна" type="text" className="ordering__form__address__item" />
						<input name="name" placeholder="Город" type="text" className="ordering__form__address__item" />
						<input name="name" placeholder="Улица" type="text" className="ordering__form__address__item" />
						<input name="name" placeholder="Дом" type="text" className="ordering__form__address__item" />
						<input name="name" placeholder="Квартира" type="text" className="ordering__form__address__item" />
					</div>
					<div className="ordering__form__comment">
						<div className="ordering__form__comment__title">Комментарии</div>
						<textarea name="comment" id="" cols="30" rows="10" className="ordering__form__comment__item"></textarea>
					</div>
			</div>
			<div className="ordering__order">
				<div className="ordering__order__info">
					<div className="ordering__order__info__title">Ваш заказ</div>
					<div className="ordering__order__info__subtitles">
						<div className="ordering__order__info__subtitles__subtitle">Товар</div>
						<div className="ordering__order__info__subtitles__subtitle">Всего</div>
					</div>
					<div className="ordering__order__info__good">
						<div className="ordering__order__info__good__name">Футболка USA</div>
						<div className="ordering__order__info__good__price">$129</div>
					</div>
					<div className="ordering__order__info__subtotal">
						<div className="ordering__order__info__subtotal__title">Подытог</div>
						<div className="ordering__order__info__subtotal__price">$129</div>
					</div>
					<div className="ordering__order__info__total">
						<div className="ordering__order__info__total__title">Итого</div>
						<div className="ordering__order__info__total__price">$129</div>
					</div>
				</div>
				<div className="ordering__order__payment">
					<div className="ordering__order__payment__title">Способы оплаты</div>
					<div className="ordering__order__payment__options">
						<div className="ordering__order__payment__options__option">
							<input type="checkbox" name="payment"/>
							<label htmlFor="payment">Оплата наличными</label>
						</div>
					</div>
					<button className="ordering__order__btn">Разместить заказ</button>
				</div>
			</div>
		</div>
	)
}

export default Ordering;