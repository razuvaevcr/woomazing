import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './team.scss';


import team from '../../resources/img/team.jpg';
import team1 from '../../resources/img/team1.jpg';
import team2 from '../../resources/img/team2.jpg';

const Team = () => {
	const images = [
		{
			id: 0,
			src: team,
		},
		{
			id: 1,
			src: team1,
		},
		{
			id: 2,
			src: team2,
		},
	]

	const [activeIndex, setActiveIndex] = useState(0);

	const prevSlide = () => {
		setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
	};

	const nextSlide = () => {
		setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
	};

	const renderSlide = (index) => {
		const image = images[index];

		return (
			<CSSTransition
				key={index}
				timeout={500}
				classNames="slide"
			>
				<img src={image.src} alt="woman" className="team__slider__img" />
			</CSSTransition>
		);
	};

	return (
		<div className="team">
			<div className="team__title">Команда мечты Womazing</div>
			<div className="team__wrapper">
				<div onClick={() => prevSlide()} className="team__slider__btn-prev">
					<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15" stroke="#858585"/>
					</svg>
				</div>

				<SwitchTransition mode="out-in">
					{renderSlide(activeIndex)}
				</SwitchTransition>

				<div onClick={nextSlide} className="team__slider__btn-next">
					<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15" stroke="#858585"/>
					</svg>
				</div>
				<div className="team__text">
					<div className="team__text__title">Для каждой</div>
					<div className="team__text__description">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.<br/><br/>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</div>
					<a href="#">Подробнее о бренде</a>
				</div>
			</div>
		</div>
	);
};

export default Team;



// import { useState, useEffect } from 'react';
// import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

// import team from '../../resources/img/team.jpg';
// import team1 from '../../resources/img/team1.jpg';
// import team2 from '../../resources/img/team2.jpg';

// import './offer.scss';


// const Offer = () => {
// 	const items = [
// 		{
// 			id: 0,
// 			title: 'Новые поступления в этом сезоне',
// 			subtitle: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
// 		},
// 		{
// 			id: 1,
// 			title: 'Что-то новенькое. Мы заждались тебя.',
// 			subtitle: 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!',
// 		},
// 		{
// 			id: 2,
// 			title: 'Включай новый сезон с WOMAZING',
// 			subtitle: 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров.',
// 		}
// 	]
// 	const [slide, setSlide] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			changeSlide()
// 		}, 8000);

// 		return () => clearInterval(interval);
// 	}, [slide]);

// 	const changeSlide = () => {
// 		slide >= 2 ? setSlide(slide => slide = 0) : setSlide(slide => slide + 1);
// 	}

// 	const renderSlide = (item) => {
// 		return (
// 			<CSSTransition
// 				key={item.id}
// 				timeout={700}
// 				classNames='item'
// 				>
// 					<li className='offer__slider__slide'>
// 						<h2 className="offer__slider__slide__title">{item.title}</h2>
// 						<div className="offer__slider__slide__subtitle">{item.subtitle}</div>
// 					</li>
// 			</CSSTransition>
// 		)
// 	}

// 	const renderDots = (items) => {
// 		const dots = items.map((item) => {
// 			return (
// 				<span
// 					key={item.id}
// 					className={`offer__slider__dots__dot ${slide === item.id ? 'offer__slider__dots__dot-active' : ''}`}
// 					onClick={() => setSlide(slide => slide = item.id)}
// 				></span>
// 			)
// 		})

// 		return (
// 			<div className="offer__slider__dots">
// 				{dots}
// 			</div>
// 		)
// 	}

// 	return (
// 		<div className='offer'>
// 			<div className="offer__wrapper">
// 				<ul className="offer__slider">
// 					<SwitchTransition>
// 						{renderSlide(items[slide])}
// 					</SwitchTransition>
// 					{renderDots(items)}
// 				</ul>
// 				<div className="offer__wrapper__btn">
// 					<button className="offer__wrapper__btn-down">
// 						<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F" /></svg>
// 					</button>
// 					<button className="button">Открыть магазин</button>
// 				</div>
// 			</div>

// 			<div className="offer__pictures">
// 				<img src={mainPicture} className="offer__pictures-main" alt='woman'></img>
// 				<img src={leftPicture} className="offer__pictures-left" alt='woman'></img>
// 				<img src={rightPicture} className="offer__pictures-right" alt='woman'></img>
// 			</div>

// 		</div>
// 	)
// }

// export default Offer;

