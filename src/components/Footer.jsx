// ========== FOOTER COMPONENT MODULE ========== //

import '../styles/Footer.css';


const Footer = () => {
	return (
		<div className='footer'>
			<p className='footer__text'>
				This website was developed by Rostyslav-Coder using the latest achievements in
				space science and artifacts of alien visitors.
			</p>
			<a
				className='footer__link'
				href="https://www.linkedin.com/in/rostyslav-putnikov-76484926a/"
				target="_blank"
				rel="noopener noreferrer"
			>
				&copy; 2024 Rostyslav-Coder. All rights reserved.
			</a>
		</div>
	);
};

export default Footer;
