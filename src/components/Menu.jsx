// ========== MENU COMPONENT MODULE ========== //

import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import MenuCard from './MenuCard';
import MENU_DATA from '../data/menuData';
import '../styles/Menu.css';


const Menu = () => {
	return (
		<section className='menuPage'>
			<ParallaxBanner className='menuPage__banner'>
				<h1 className='menuPage__title'>Menu</h1>
				<div className='menuPage__cardsGrp'>
					{
						MENU_DATA.map((data, index) => {
							return (
								<Parallax
									key={index}
									speed={30}
									translateX={[30, -30]}
								>
									< MenuCard
										key={data.cardId}
										cardTitle={data.cardTitle}
										cardImage={data.cardImage}
										cardDescription={data.cardDescription}
									/>
								</Parallax>
							);
						})
					}
				</div>
			</ParallaxBanner>
		</section>
	);
};

export default Menu;
