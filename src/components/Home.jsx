// ========== HOME COMPONENT MODULE ========== //

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Tilt from 'react-parallax-tilt';
import spaceBg from '../assets/images/home/space-bg.webp';
import moonBG from '../assets/images/home/moon-landscape.webp';
import earthBg from '../assets/images/home/earth-bg.webp';
import pizza from '../assets/images/home/pizza1.webp';
import pizzaBox from '../assets/images/home/pizza-box.webp';
import moonStation from '../assets/images/home/moon-station.webp';
import '../styles/Home.css';
import '../styles/AstronautAnimation.css';
import '../styles/RotateAnimation.css';


const Home = () => {
	return (
		<section className='homePage'>
			<ParallaxBanner className='homePage__banner'>

				<ParallaxBannerLayer className='homePage__layer1' image={spaceBg} speed={-10} />

				<ParallaxBannerLayer className='homePage__layerEarth' speed={-30}>
					<div className='homePage__layerEarthShadow'></div>
					<img className='homePage__layerEarthImage' src={earthBg} alt='Earth the Planet' />
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='homePage__layerText' speed={100} scale={[1, 0.1]} opacity={[1, 0]}>
					<h1>There is only one <span>real Pizzeria</span> on the Moon</h1>
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='homePage__layer2' image={moonBG} speed={-1} />

				<div className='homePage__moonStation'>
					<p className='pizzaMan__textTop'>I only use the freshest ingredients.</p>
					<img src={moonStation} alt='moon shatle' />
					<p className='pizzaMan__textBottom'>Just don`t ask where I get them from.</p>
				</div>

				<div className='homePage__pizzaMan1'>
					<p className='pizzaMan__textTop'>We make the most delicious pizza on the entire moon.</p>
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
					<p className='pizzaMan__textBottom'>This is the only pizzeria on the moon.</p>
				</div>

				<div className='homePage__pizzaMan2'>
					<p className='pizzaMan__textTop'>We can deliver pizza to you anywhere in the world.</p>
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
					<p className='pizzaMan__textBottom'>We`ll drop it right on your doorstep when we`re passing by.</p>
				</div>

			</ParallaxBanner>
		</section>
	);
};

export default Home;
