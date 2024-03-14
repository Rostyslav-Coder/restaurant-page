// ========== APP COMPONENT MODULE ========== //

import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Footer from './Footer';


const App = () => {
	const [page, setPage] = useState('Home');

	const renderPage = () => {
		switch (page) {
			case 'Home':
				return <Home />;
			case 'Menu':
				return <Menu />;
			default:
				return <Home />;
		}
	};

	return (
		<>
			<Header setPage={setPage} />
			<ParallaxProvider className='aplication'>
				{renderPage()}
			</ParallaxProvider>
			<Footer />
		</>
	);
};

export default App;
