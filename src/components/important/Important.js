import gear from '../../resources/icons/gear.svg';
import check from '../../resources/icons/check.svg';
import hand from '../../resources/icons/hand.svg';

import './important.scss';

const Important = () => {
	return (
		<div className="important">
			<div className="title">Что для нас важно</div>
			<div className="advantages">
				<div className="advantages__item">
					<img src={check} alt='check' className="advantages__item-img"></img>
					<div className="advantages__item-text">
						<div className="advvantages__item-title">Качество</div>
						<div className="advantages__item-description">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</div>
					</div>
				</div>
				<div className="advantages__item">
					<img src={gear} alt='gear' className="advantages__item-img"></img>
					<div className="advantages__item-text">
						<div className="advvantages__item-title">Скорость</div>
						<div className="advantages__item-description">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</div>
					</div>
				</div>
				<div className="advantages__item">
					<img src={hand} alt='hand' className="advantages__item-img"></img>
					<div className="advantages__item-text">
						<div className="advvantages__item-title">Ответственность</div>
						<div className="advantages__item-description">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Important;