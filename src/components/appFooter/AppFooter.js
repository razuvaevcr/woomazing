import logo from "../../resources/icons/logo.svg";
import facebook from "../../resources/icons/facebook.svg";
import instagram from "../../resources/icons/instagram.svg";
import twitter from "../../resources/icons/twitter.svg";
import visa from "../../resources/icons/visa-mastercard.svg";

import './appFooter.scss';

const AppFooter = () => {
  return (
    <footer className="footer">
		<div className="info">
			<a href="#"><img src={logo} alt="logo" className="info__logo" /></a>
			<div className="info__items">
				<a href="#" className="info__item">© Все права защищены</a>
				<a href="#" className="info__item">Политика конфиденциальности</a>
				<a href="#" className="info__item">Публичная оферта</a>
			</div>
		</div>
		<div className="menu">
			<div className="menu__main">
				<a href="#" className="menu__main-item">Главная</a>
				<a href="#" className="menu__main-item">Магазин</a>
				<a href="#" className="menu__main-item">О бренде</a>
				<a href="#" className="menu__main-item">Контакты</a>
			</div>
			<div className="menu__wear">
				<a href="#" className="menu__wear-item">Пальто</a>
				<a href="#" className="menu__wear-item">Свитшоты</a>
				<a href="#" className="menu__wear-item">Кардиганы</a>
				<a href="#" className="menu__wear-item">Толстовки</a>
			</div>
		</div>
		<div className="footer__contacts">
			<div className="footer__contacts__office">
				<div className="footer__contacts__office-item">+7 (495) 823-54-12</div>
				<div className="footer__contacts__office-item">hello@womazing.com</div>
			</div>
			<div className="footer__contacts__socials">
				<a href="#"><img className="footer__contacts__socials-img" src={instagram} alt="instagram" /></a>
				<a href="#"><img className="footer__contacts__socials-img"  src={facebook} alt="facebook" /></a>
				<a href="#"><img className="footer__contacts__socials-img"  src={twitter} alt="twitter" /></a>
			</div>
			<a href="#"><img src={visa} alt="visa/mastercard" /></a>
		</div>
    </footer>
  );
};

export default AppFooter;
