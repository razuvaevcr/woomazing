import { AppHeader, AppFooter, MainPage, WrapperPage, SinglePage } from "../pages/index";

import "../../style/style.scss";

function App() {
	return (
		<div className="app">
			<AppHeader />
			{/* <MainPage /> */}
			<WrapperPage/>
			{/* <SinglePage/> */}
			<AppFooter />
		</div>
	);
}

export default App;
