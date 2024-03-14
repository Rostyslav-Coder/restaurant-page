// ========== APP COMPONENT MODULE ========== //

import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Delivery from './Delivery';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import '../styles/App.css';


const App = () => {
	const [page, setPage] = useState('Home');

	const renderPage = () => {
		switch (page) {
			case 'Home':
				return <Home />;
			case 'Menu':
				return <Menu />;
			case 'Delivery':
				return <Delivery />;
			case 'Contact':
				return <Contact />;
			case 'About':
				return <About />;
			default:
				return <Home />;
		}
	};

	return (
		<div className='application'>
			<Header setPage={setPage} />
			<ParallaxProvider>
				<div className='application__wrapper'>
					{renderPage()}
				</div>
			</ParallaxProvider>
			<Footer />
		</div>
	);
};

export default App;
