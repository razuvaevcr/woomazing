import img from '../../resources/img/stone.jpg'

import './aboutUs.scss';

const AboutUs = () => {
	return (
		<>
			<div className="about-us">
				<div className="about-us__block">
					<img src={img} alt="woman" className="about-us__block__img" />
					<div className="about-us__block__text">
						<div className="about-us__block__text__title">Идея и женщина</div>
						<div className="about-us__block__text__discription">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.<br/><br/>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </div>
					</div>
				</div>
				<div className="about-us__block">
					<img src={img} alt="woman" className="about-us__block__img" />
					<div className="about-us__block__text">
						<div className="about-us__block__text__title">Магия в деталях</div>
						<div className="about-us__block__text__discription">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.<br/><br/>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </div>
					</div>
				</div>
				<button className="about-us__btn">Перейти в магазин</button>
			</div>
		</>
	)
}

export default AboutUs;