// ========== DELIVERY COMPONENT MODULE ========== //

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import spaceBg from '../assets/images/home/space-bg.jpg';
import planetBg from '../assets/images/home/planet-bg.webp';
import landscapeBg from '../assets/images/home/landscape-bg.webp';
import pizzaBox from '../assets/images/home/pizza-box.webp';
import '../styles/Delivery.css';
import '../styles/AstronautAnimation.css';
import '../styles/RotateAnimation.css';


const Delivery = () => {
	return (
		<section className='deliveryPage' id='delivery'>
			<ParallaxBanner className='deliveryPage__banner'>

				<ParallaxBannerLayer className='deliveryPage__sky' image={spaceBg} speed={-10} />

				<ParallaxBannerLayer className='deliveryPage__planet' speed={-30}>
					<div className='deliveryPage__planetShadow'></div>
					<img className='deliveryPage__planetImage' src={planetBg} alt='Planet image' />
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='deliveryPage__title' speed={100} scale={[1, 0.1]} opacity={[1, 0]}>
					<h1>We will deliver your pizza <br /><span>anywhere in the galaxy</span><br />in one hour.</h1>
				</ParallaxBannerLayer>

				<ParallaxBannerLayer className='deliveryPage__landscape' image={landscapeBg} speed={36} />

				<div className='deliveryPage__deliveryMan1'>
					<Tilt
						className='parallax__deliveryMan1'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
						tiltAxis={'y'}
					/>
				</div>

				<div className='deliveryPage__deliveryMan2'>
					<Tilt
						className='parallax__deliveryMan2'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
						tiltAxis={'y'}
					/>
				</div>

				<div className='deliveryPage__deliveryMan3'>
					<Tilt
						className='parallax__deliveryMan3'
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={1000}
						transitionSpeed={1500}
						gyroscope={true}
					>
						<img src={pizzaBox} alt='pizza man' />
					</Tilt>
				</div>

			</ParallaxBanner>
		</section>
	);
};

export default Delivery;
