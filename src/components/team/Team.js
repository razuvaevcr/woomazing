import team from '../../resources/img/group.jpg';

import './team.scss';

const Team = () => {
	return (
		<div className="team">
			<div className="title">Команда мечты Womazing</div>
			<div className="slider">
				<div className="slider__slide">
					<img src={team} alt="team" className="slider__slide-img" />
					<div className="slider__slide-text">
						<div className="slider__slide-title">Для каждой</div>
						<div className="slider__slide-description">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.<br/><br/>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</div>
						<a href="#">Подробнее о бренде</a>
					</div>
				</div>
				{/* <div className="slider__slide">
					<img src={team} alt="team" className="slider__slide-img" />
					<div className="slider__slide-text">
						<div className="slider__slide-title"></div>
						<div className="slider__slide-description"></div>
						<a href=""></a>
					</div>
				</div>
				<div className="slider__slide">
					<img src={team} alt="team" className="slider__slide-img" />
					<div className="slider__slide-text">
						<div className="slider__slide-title"></div>
						<div className="slider__slide-description"></div>
						<a href=""></a>
					</div>
				</div>*/}
			</div>
		</div>
	)
}

export default Team;