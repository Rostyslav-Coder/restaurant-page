// ========== MENU DATA MODULE ========== //

import { v4 as uuid4 } from 'uuid';
import cosmoCowboyPizza from '../assets/images/food/cosmoCowboyPizzaImg.webp';
import craterCheesePizza from '../assets/images/food/craterCheesePizzaImg.webp';
import radioactivePizza from '../assets/images/food/radioactivePizzaImg.webp';
import starryExoticPizza from '../assets/images/food/starryExoticPizzaImg.webp';
import galacticColdCutsPizza from '../assets/images/food/galacticColdCutsPizzaImg.webp';
import snortingAstronautBurger from '../assets/images/food/snortingAstronautBurgerImg.webp';
import cosmicChickenBurger from '../assets/images/food/cosmicChickenBurgerImg.webp';
import cheeseWithMushroomsBurger from '../assets/images/food/cheeseWithMushroomsBurgerImg.webp';
import galacticFishBurger from '../assets/images/food/galacticFishBurgerImg.webp';
import starCatchBurger from '../assets/images/food/starCatchBurgerImg.webp';
import alienObserverBurger from '../assets/images/food/alienObserverBurgerImg.webp';
import mrsUniverseBurger from '../assets/images/food/mrsUniverseBurgerImg.webp';
import alienHeadKebab from '../assets/images/food/alienHeadKebabImg.webp';
import acidRollKebab from '../assets/images/food/acidRollKebabImg.webp';
import starryPotato from '../assets/images/food/starryPotatoImg.webp';
import lunarWater from '../assets/images/food/lunarWaterImg.webp';
import meteorJuice from '../assets/images/food/meteorJuiceImg.webp';
import beerRocket from '../assets/images/food/beerRocketImg.webp';


const MENU_DATA = [
	{
		cardId: uuid4(),
		cardTitle: 'Cosmo Cowboy Pizza',
		cardImage: cosmoCowboyPizza,
		cardDescription:
			'This pizza is made from the same veal that aliens snatch from decent farmers. \
			A dish for those who love veal and are not afraid of alien abductions. \
			Veal, barbecue sauce, onions and cheddar cheese - this combination will not let you get bored.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Crater Cheese Pizza',
		cardImage: craterCheesePizza,
		cardDescription:
			'Our cheese is made from the fresh milk of astro cows that are caught in craters. \
			It has a unique taste, aroma and will most likely cause hallucinations that will blow your mind.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Radioactive Pizza',
		cardImage: radioactivePizza,
		cardDescription:
			'These mushrooms gather on the asteroids where they grow and absorb all the cosmic radiation. \
			This pizza is for true explorers and adventure lovers. \
			And if you don`t eat it all, the leftovers can be used as nuclear fuel for your starship.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Starry Exotic Pizza',
		cardImage: starryExoticPizza,
		cardDescription:
			'Star pineapples and space ham against a background of cheese melted under supernova light. \
			A taste that transports you to the tropical beaches of distant worlds.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Galactic Cold Cuts Pizza',
		cardImage: galacticColdCutsPizza,
		cardDescription:
			'Selected cuts of intergalactic meat collected from distant planetary farms. \
			A combination of four types of meat, fried on star fire, under a layer of aromatic cheese. \
			An ideal choice for true gourmets of space delicacies.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Snorting Astronaut',
		cardImage: snortingAstronautBurger,
		cardDescription:
			'Immerse yourself in the taste of wild bacon, sourced from alien pigs hunting in the nebulae of space. \
			This burger combines the boldness of wild flavors and the boldness of interstellar discovery \
			to offer a unique journey for your palate.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Cosmic Chicken',
		cardImage: cosmicChickenBurger,
		cardDescription:
			'Juicy Venusian roosters caught by space poachers, \
			seasoned with exotic spices from the most distant corners of the Universe. \
			This burger is a real trophy for foodie adventurers.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Cheese With Mushrooms',
		cardImage: cheeseWithMushroomsBurger,
		cardDescription:
			'Mushrooms that enslave the minds of astronauts with simple melted cheese in a burger that opens up the galactic horizons.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Galactic Fish',
		cardImage: galacticFishBurger,
		cardDescription:
			'Discover the taste of Neptune`s sea depths with our Fishburger. \
			Fish caught from the crystal waters beneath the ice of this mysterious \
			planet bring with them a cold glow and incredible freshness.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Star Cath',
		cardImage: starCatchBurger,
		cardDescription:
			'Star Cath is a culinary treasure caught by space poachers in the most dangerous black holes. \
			The fish, flavored with stellar currents and seasoned with rare asteroidal spices, \
			makes every bite a truly galactic adventure.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger Alien Observer',
		cardImage: alienObserverBurger,
		cardDescription:
			'The adventure begins with the first bite. \
			This burger, made from a juicy alien observer, \
			will be your guide to the world of cosmic mysteries and secrets.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Burger mrs Univers',
		cardImage: mrsUniverseBurger,
		cardDescription:
			'This burger is a culinary masterpiece created by our master, which can disappear at any moment. \
			Hurry up to try it before one of the jealous fans shoots our master. \
			Hurry up to try it while it`s still here!',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Kebab Alien Head',
		cardImage: alienHeadKebab,
		cardDescription:
			'This kebab is not for the faint of heart! \
			Prepared from the meat of mysterious space creatures, it promises an explosion of emotions and an unforgettable taste sensation. \
			Dare this kebab and your courage will be rewarded with an incredible adventure in the world of taste.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Kebab Acid Roll',
		cardImage: acidRollKebab,
		cardDescription:
			'This kebab is a real challenge for thrill seekers. \
			The combination of spicy meats marinated in acidic sauces from distant planets and fresh ingredients \
			creates an explosive flavor that will make you forget about gravity and take you on a culinary journey across the galaxy.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Starry Potato',
		cardImage: starryPotato,
		cardDescription:
			'Potatoes grown in asteroid fields and fried in interstellar oil, \
			seasoned with spices from the constellation Orion, \
			will turn every bite into a space trip.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Lunar Water',
		cardImage: lunarWater,
		cardDescription:
			'Taste the purest water from lunar springs, where every drop contains the secrets of cosmic life. \
			This water, enriched with minerals from ancient meteorites, gives you a feeling of weightlessness \
			and fills you with the energy of the stars.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Meteor Juice',
		cardImage: meteorJuice,
		cardDescription:
			'Refresh yourself with a drink created from the juice of meteorites falling on ancient icy planets. \
			This drink, charged with cosmic energy and minerals, awakens the spirit of adventure \
			and gives strength for new discoveries.',
	},
	{
		cardId: uuid4(),
		cardTitle: 'Beer Rocket',
		cardImage: beerRocket,
		cardDescription:
			'Take a journey through a galaxy of flavors with our Beer Rocket range. \
			Each variety is a reflection of a different corner of the universe, f\
			rom the dark and deep flavors of black holes to the light and sparkling flavors of star clusters.',
	},
];

export default MENU_DATA;
