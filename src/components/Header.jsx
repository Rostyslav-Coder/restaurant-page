// ========== HEADER COMPONENT MODULE ========== //

import PropTupes from 'prop-types';

const Header = ({ setPage }) => {
	return (
		<header>
			<h1>Hi I`m Header</h1>
			<nav>
				<button onClick={() => setPage('Home')}>Home</button>
				<button onClick={() => setPage('Menu')}>Menu</button>
			</nav>
		</header>
	);
};

Header.propTypes = {
	setPage: PropTupes.func.isRequired,
}
export default Header;
