// ========== MENU COMPONENT MODULE ========== //

import MenuCard from './MenuCard';
import MENU_DATA from '../data/menuData';
import '../styles/Menu.css';


const Menu = () => {
	return (
		<section className='menuPage'>
			<h1 className='menuPage__title'>Menu</h1>
			<div className='menuPage__cardsGrp'>
				{
					MENU_DATA.map((data) => {
						return (
							< MenuCard
								key={data.cardId}
								cardTitle={data.cardTitle}
								cardImage={data.cardImage}
								cardDescription={data.cardDescription}
							/>
						);
					})
				}
			</div>
		</section>
	);
};

export default Menu;
