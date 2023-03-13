import { useState, useEffect } from 'react';

import logo from "../../resources/icons/logo.svg";
import shoppingBag from "../../resources/icons/shoppingBag.svg";
import phone from "../../resources/icons/phone.svg";

import './appHeader.scss';

const AppHeader = () => {
	//ЗАТЕМНЕНИЕ ФОНА
	const [background, setBackgroound] = useState(false);

	const changeBackground = () => {
		window.scrollY > 30 ? setBackgroound(true) : setBackgroound(false);
	}
	
	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
	}, []);

	return (
		<header className={background ? "header header_white" : "header"}>
			<a href="#"><img src={logo} alt="logo" className="header__logo" /></a>
			<div className="header__menu">
				<a href="#" className="header__menu-item">Главная</a>
				<a href="#" className="header__menu-item">Магазин</a>
				<a href="#" className="header__menu-item">О бренде</a>
				<a href="#" className="header__menu-item">Контакты</a>
			</div>
			<div className="header__phone">
				<img src={phone} alt="phone" className="header__phone-logo" />
				<div className="header__phone-logo"></div>
				<div className="header__phone-number">+7 (495) 823-54-12</div>
			</div>
			<div className="header__shoppingBag">
				<img src={shoppingBag} alt="shoppingBag" className="header__shoppingBag-img" />
			</div>
		</header>
	);
};

export default AppHeader;
