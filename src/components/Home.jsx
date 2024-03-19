// ========== HOME COMPONENT MODULE ========== //

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Tilt from 'react-parallax-tilt';
import spaceBg from '../assets/images/home/sky-bg.webp';
import planetBg from '../assets/images/home/planet-bg.webp';
import landscapeBg from '../assets/images/home/landscape-bg.webp';
import pizza from '../assets/images/home/pizza1.webp';
import pizzaBox from '../assets/images/home/pizza-box.webp';
import burger from '../assets/images/menu/alienObserverBurgerImg.webp'
import '../styles/Home.css';
import '../styles/AstronautAnimation.css';
import '../styles/RotateAnimation.css';


const Home = () => {
	return (
		<section className='homePage' id='home'>
			<ParallaxBanner className='homePage__banner'>

				<ParallaxBannerLayer className='homePage__sky' image={spaceBg} speed={-10} />

				<ParallaxBannerLayer className='homePage__planet' speed={-30}>
					<div className='homePage__planetShadow'></div>
					<img className='homePage__planetImage' src={planetBg} alt='Planet image' />
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='homePage__title' speed={100} scale={[1, 0.1]} opacity={[1, 0]}>
					<h1>There is only one<br /><span>real Pizzeria</span><br />on the Space</h1>
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='homePage__landscape' image={landscapeBg} speed={36} />

				<div className='homePage__pizzaMan1'>
					{/* <p className='pizzaMan__textTop'>We make the most delicious pizza on the entire moon.</p> */}
					<Tilt
						className='parallax__pizzaMan1'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
					>
						<img src={pizza} alt='pizza man' />
					</Tilt>
					{/* <p className='pizzaMan__textBottom'>This is the only pizzeria on the moon.</p> */}
				</div>

				<div className='homePage__pizzaMan2'>
					<Tilt
						className='parallax__pizzaMan2'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
					>
						<img src={pizzaBox} alt='pizza man' />
					</Tilt>
				</div>

				<div className='homePage__pizzaMan3'>
					<Tilt
						className='parallax__pizzaMan3'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
					>
						<img src={burger} alt='pizza man' />
					</Tilt>
				</div>

			</ParallaxBanner>
		</section>
	);
};

export default Home;
