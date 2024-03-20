// ========== HEADER COMPONENT MODULE ========== //

import { useState } from 'react';
import PropTupes from 'prop-types';
import moonImage from '../assets/images/logo/restaurant-logo.webp';
import '../styles/Header.css';


const NavButton = ({ handleNavButtonClick, isOpen }) => {
	return (
		<div
			className="navigator__button"
			onClick={handleNavButtonClick}
			style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
		>
			+
		</div>
	);
};

NavButton.propTypes = {
	handleNavButtonClick: PropTupes.func.isRequired,
	isOpen: PropTupes.bool.isRequired,
};

const Navigator = ({ setPage, handleLinkClick }) => {
	return (
		<nav className='header__navBar'>
			<button className='header__navButton' onClick={() => { setPage('Home'); handleLinkClick(); }}>Home</button>
			<button className='header__navButton' onClick={() => { setPage('Menu'); handleLinkClick(); }}>Menu</button>
			<button className='header__navButton' onClick={() => { setPage('Delivery'); handleLinkClick(); }}>Delivery</button>
			<button className='header__navButton' onClick={() => { setPage('Contact'); handleLinkClick(); }}>Contact</button>
			<button className='header__navButton' onClick={() => { setPage('About'); handleLinkClick(); }}>About</button>
		</nav>
	);
};

Navigator.propTypes = {
	setPage: PropTupes.func.isRequired,
	handleLinkClick: PropTupes.func.isRequired
};

const Header = ({ setPage }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		if (!window.matchMedia('(min-width: 1024px)').matches) {
			setIsOpen(false);
		}
	};

	return (
		<>
			<NavButton handleNavButtonClick={handleNavButtonClick} isOpen={isOpen} />
			<header className={`header ${isOpen ? 'open' : 'closed'}`} id='header'>
				<div className="header__wrapper">
					<h1 className='header__logoText'>
						C<img className='header__logoImage' src={moonImage} alt='moon icon' />SMOPIZZA
					</h1>
					<Navigator setPage={setPage} handleLinkClick={handleLinkClick} />
				</div>
			</header>
		</>
	);
};

Header.propTypes = {
	setPage: PropTupes.func.isRequired,
};

export default Header;
