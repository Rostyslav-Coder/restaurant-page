// ========== HEADER COMPONENT MODULE ========== //

import PropTupes from 'prop-types';
import moonImage from '../assets/images/logo/restaurant-logo.webp';
import '../styles/Header.css';


const Header = ({ setPage }) => {
	return (
		<header className='header' id='header'>
			<h1 className='header__logoText'>
				C<img className='header__logoImage' src={moonImage} alt='moon icon' />SMOPIZZA
			</h1>
			<nav className='header__navBar'>
				<button className='header__navButton' onClick={() => setPage('Home')}>Home</button>
				<button className='header__navButton' onClick={() => setPage('Menu')}>Menu</button>
				<button className='header__navButton' onClick={() => setPage('Delivery')}>Delivery</button>
				<button className='header__navButton' onClick={() => setPage('Contact')}>Contact</button>
				<button className='header__navButton' onClick={() => setPage('About')}>About</button>
			</nav>
		</header>
	);
};

Header.propTypes = {
	setPage: PropTupes.func.isRequired,
}
export default Header;
