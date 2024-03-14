// ========== APP COMPONENT MODULE ========== //

import { useRoutes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Footer from './Footer';


const App = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/menu', element: <Menu /> },
	]);

	return (
		<ParallaxProvider>
			<div className="aplication">
				<Header />
				{routes}
				<Footer />
			</div>
		</ParallaxProvider>
	);
};

export default App;
