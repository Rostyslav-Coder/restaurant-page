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
						We, the members of the expedition to the Moon, decided to stay here and open a pizzeria.
						Why? Because we found something amazing on the Moon, that changed our view of life.
						We found an ancient artifact, that showed us that we are not alone in the universe.
						It also gave us a recipe for pizza, that was the most delicious in the world.
						We decided that this was a sign of fate, and that we had to share this pizza with others.
						We remodeled our lunar module into a pizzeria, and started to make pizza according to the recipe of the artifact.
						We named our pizzeria &#034;Lunar Pizza&#034;, and became famous in the whole cosmos.
						We are happy and satisfied with our life, and we don&#039;t regret anything.
						And if you hear something about the gravity acceleration around the Moon, don&#039;t believe it.
						It&#039;s just that all the astronauts come to us for pizza.
					</p>
					<img className='aboutPage__image' src={pizzaTiam} />
				</div>
			</div>
		</section>
	);
};

export default About;
