// ========== CONTACT COMPONENT MODULE ========== //

import { useState, useEffect } from 'react';
import '../styles/Contact.css';


const Contact = () => {
	const [contactCardStyle, setContactCardStyle] = useState({});

	useEffect(() => {
		const cardAnimationDelay = setTimeout(() => {
			setContactCardStyle({
				transition: '3s',
				transitionProperty: 'opacity, width',
				opacity: '1',
				width: '100%',
			});
		}, 1500);

		const resetCardAnimationDelay = setTimeout(() => {
			setContactCardStyle(cardStyle => ({
				...cardStyle,
				transition: 'border 1s',
			}));
		}, 1500 + 3000);

		return () => {
			clearTimeout(cardAnimationDelay);
			clearTimeout(resetCardAnimationDelay);
		};
	}, []);

	return (
		<section className="contactPage">
			<div className="contactPage__card" style={contactCardStyle}>
				<h1 className="contactPage__title">CONTACT</h1>
				<p className="contactPage__text">
					<span>Address: </span><br />Sector E-4, Nova-Gastron Planet, Andromeda Galaxy
				</p>
				<p className="contactPage__text">
					<span>Galactic Delivery Code: </span><br />42-22-64
				</p>
				<p className="contactPage__text">
					<span>Wave Channel: </span><br />π.31415
				</p>
				<p className="contactPage__text">
					<span>Operating Hours: </span><br />Cosmoport Standard Time - 26 hours a day, 8 days a week
				</p>
				<p className="contactPage__text">
					<span>Menu: </span><br />Interactive menu available through the quantum interface on wave channel π.31415 and on our website
				</p>
				<p className="contactPage__text">
					<span>Delivery: </span><br />Free delivery across the galaxy with a minimum order of two pizzas
				</p>
				<p className="contactPage__text">
					<span>Website: </span><br />Place your orders on our interstellar web portal for a cosmic pizza experience!
				</p>
			</div>
		</section>
	);
};

export default Contact;
