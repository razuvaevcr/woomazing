import mainPicture from '../../resources/img/glasses.jpg';
import leftPicture from '../../resources/img/pray.jpg';
import rightPicture from '../../resources/img/hat.jpg';

import './offer.scss';


const Offer = () => {
	return (
		<div className='offer'>
			<div className="offer__slider">
				<div className="offer__slider-wrapper">
					<div className="offer__slider-slide">
						<h2 className="offer__slider-title">Новые поступления<br/>в этом сезоне</h2>
						<div className="offer__slider-subtitle">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</div>
					</div>
					{/* <div className="offer__slider-slide">
						<h2 className="offer__slider-title">Что-то новенькое.<br/> Мы заждались тебя.</h2>
						<div className="offer__slider-subtitle">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</div>
					</div>
					<div className="offer__slider-slide">
						<h2 className="offer__slider-title">Включай новый<br/>сезон с WOMAZING</h2>
						<div className="offer__slider-subtitle">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров.</div>
					</div> */}
				</div>
				
				<button className="offer__slider-btn">Открыть магазин</button>

			</div>

			<div className="offer__pictures">
				<img src={mainPicture} className="offer__pictures-main" alt='girl'></img>
				<img src={leftPicture} className="offer__pictures-left" alt='girl'></img>
				<img src={rightPicture} className="offer__pictures-right" alt='girl'></img>
			</div>
			
		</div>
	)
}

export default Offer;