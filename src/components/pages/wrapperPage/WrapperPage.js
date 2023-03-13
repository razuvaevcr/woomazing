import AboutUs from "../../aboutUs/AboutUs";
import Contacts from "../../contacts/Contacts";
import ShoppingCart from "../../shoppingCart/ShoppingCart";
import Ordering from "../../ordering/Ordering";
import Confirmation from "../../confirmation/Confirmation";
import Shop from "../../shop/Shop";

import './wrapperPage.scss';


const WrapperPage = () => {
	return (
		<div className="wrapper">
			<h2 className="wrapper__title">Магазин</h2>
			<h3 className="wrapper__navigation">Главная — Магазин</h3>
			<Shop/>
			{/* <AboutUs/> */}
			{/* <Contacts/> */}
			{/* <ShoppingCart/> */}
			{/* <Ordering/> */}
			{/* <Confirmation/> */}
		</div>
	)
}

export default WrapperPage;