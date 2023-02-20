import './contacts.scss';

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="contacts__map"></div>
			<div className="contacts__info">
				<div className="contacts__info__item">
					<span className="contacts__info__item-title">Телефон</span>
					<span className="contacts__info__item-subtitle">+7 (495) 823-54-12</span>
				</div>
				<div className="contacts__info__item">
					<span className="contacts__info__item-title">E-mail</span>
					<span className="contacts__info__item-subtitle">info@sitename.com</span>
				</div>
				<div className="contacts__info__item">
					<span className="contacts__info__item-title">Адрес</span>
					<span className="contacts__info__item-subtitle">г. Москва, 3-я улица Строителей, 25</span>
				</div>
			</div>
			<div className="contacts__form">
				<div className="contacts__title">Напишите нам</div>
				<div className="contacts__form">
					<input type="text" placeholder="Имя" className="contacts__form__input" />
					<input type="text" placeholder="E-mail" className="contacts__form__input" />
					<input type="text" placeholder="Телефон" className="contacts__form__input" />
					<textarea name="" id="" placeholder="Сообщение" cols="30" rows="10" className="contacts__form__textarea"></textarea>
					<button className="contacts__form__btn">Отправить</button>
				</div>
				<div className="contacts__form__message">Сообщение успешно отправлено</div>
			</div>
		</div>
	)
}

export default Contacts;