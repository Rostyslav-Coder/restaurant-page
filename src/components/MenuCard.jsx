// ========== MENU_CARD COMPONENT MODULE ========== //

import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';


const MenuCard = ({ cardTitle, cardImage, cardDescription }) => {
	return (
		<Tilt
			className='menuCard'
			tiltEnable={true}
			tiltMaxAngleX={18}
			tiltMaxAngleY={18}
			transitionSpeed={1500}
			perspective={1200}
			glareEnable={true}
			glareColor='#FFF'
			glareMaxOpacity={0.4}
			glarePosition='bottom'
		>
			<h2 className='menuCard__title'>{cardTitle}</h2>
			<img className='menuCard__image' src={cardImage} alt={`${cardTitle} image`} />
			<p className="menuCard__text">{cardDescription}</p>
		</Tilt>
	);
};

MenuCard.propTypes = {
	cardTitle: PropTypes.string.isRequired,
	cardImage: PropTypes.string.isRequired,
	cardDescription: PropTypes.string.isRequired,
};

export default MenuCard;
