// ========== HEADER COMPONENT MODULE ========== //

import { Link } from 'react-router-dom';

const Header = () => {
	return <header>
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/menu'>Menu</Link>
		</nav>
	</header>
};

export default Header;
