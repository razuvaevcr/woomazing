import { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

import mainPicture from '../../resources/img/glasses.jpg';
import leftPicture from '../../resources/img/pray.jpg';
import rightPicture from '../../resources/img/hat.jpg';

import './offer.scss';


const Offer = () => {
	const items = [
		{
			id: 0,
			title: 'Новые поступления в этом сезоне',
			subtitle: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
		},
		{
			id: 1,
			title: 'Что-то новенькое. Мы заждались тебя.',
			subtitle: 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!',
		},
		{
			id: 2,
			title: 'Включай новый сезон с WOMAZING',
			subtitle: 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров.',
		}
	]
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			changeSlide()
		}, 8000);

		return () => clearInterval(interval);
	}, [slide]);

	const changeSlide = () => {
		slide >= 2 ? setSlide(slide => slide = 0) : setSlide(slide => slide + 1);
	}

	const renderSlide = (item) => {
		return (
			<CSSTransition
				key={item.id}
				timeout={700}
				classNames='item'
				>
					<li className='offer__slider__slide'>
						<h2 className="offer__slider__slide__title">{item.title}</h2>
						<div className="offer__slider__slide__subtitle">{item.subtitle}</div>
					</li>
			</CSSTransition>
		)
	}

	const renderDots = (items) => {
		const dots = items.map((item) => {
			return (
				<span
					key={item.id}
					className={`offer__slider__dots__dot ${slide === item.id ? 'offer__slider__dots__dot-active' : ''}`}
					onClick={() => setSlide(slide => slide = item.id)}
				></span>
			)
		})

		return (
			<div className="offer__slider__dots">
				{dots}
			</div>
		)
	}

	return (
		<div className='offer'>
			<div className="offer__wrapper">
				<ul className="offer__slider">
					<SwitchTransition>
						{renderSlide(items[slide])}
					</SwitchTransition>
					{renderDots(items)}
				</ul>
				<div className="offer__wrapper__btn">
					<button className="offer__wrapper__btn-down">
						<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F" /></svg>
					</button>
					<button className="button">Открыть магазин</button>
				</div>
			</div>

			<div className="offer__pictures">
				<img src={mainPicture} className="offer__pictures-main" alt='woman'></img>
				<img src={leftPicture} className="offer__pictures-left" alt='woman'></img>
				<img src={rightPicture} className="offer__pictures-right" alt='woman'></img>
			</div>

		</div>
	)
}

export default Offer;