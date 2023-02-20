import './confirmation.scss';

const Confirmation = () => {
	return (
		<div className="confirmation">
			<div className="confirmation__info">
				<div className="confirmation__info__label"></div>
				<div className="confirmation__info__text">
					<div className="confirmation__info__text__title">Заказ успешно оформлен</div>
					<div className="confirmation__info__text__subtitle">Мы свяжемся с вами в ближайшее время!</div>
				</div>
			</div>
			<button className="confirmation__btn">Перейти на главную</button>
		</div>
	)
}

export default Confirmation;