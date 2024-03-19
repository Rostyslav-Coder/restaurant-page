// ========== ABOUT COMPONENT MODULE ========== //

import pizzaTiam from '../assets/images/about/pizza-team.webp';
import '../styles/About.css';


const About = () => {
	return (
		<section className='aboutPage'>
			<div className='aboutPage__card'>
				<h1 className='aboutPage__title'>About</h1>
				<div className='aboutPage__wrapper'>
					<p className='aboutPage__text'>
						In a distant galaxy, at the crossroads of cosmic pathways, a team of
						chefs from different corners of the universe combined their unique
						talents to open a pizzeria on a lifeless planet. Together, they
						transformed the pizzeria into a meeting place for travelers from all
						ends of space, eager to taste the best pizza in the galaxy. Their
						friendship and collaborative work became an example of peaceful
						coexistence and mutual understanding between various civilizations.
					</p>
					<img className='aboutPage__image' src={pizzaTiam} />
				</div>
			</div>
		</section>
	);
};

export default About;
