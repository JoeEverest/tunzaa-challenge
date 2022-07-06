import React from "react";

function Footer({ additionalCLasses = "color-white" }) {
	return (
		<footer className={`footer ${additionalCLasses}`}>
			<div className="footer-content-top">
				<ul className="footer-links">
					<li>Home</li>
					<li>Terms and Conditions</li>
					<li>Privacy Policy</li>
					<li>Collection Statement</li>
					<li>Help</li>
					<li>Manage Account</li>
				</ul>
				<p>Copyright © 2016 Demo Streaming. All rights reserved.</p>
			</div>
			<div className="footer-content-bottom">
				<div className="left">
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/social/facebook-white.svg"
						alt="FaceBook"
					/>
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/social/instagram-white.svg"
						alt="Instagram"
					/>
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/social/twitter-white.svg"
						alt="Twitter"
					/>
				</div>
				<div className="right">
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/store/app-store.svg"
						alt="Appstore"
					/>
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/store/play-store.svg"
						alt="Playstore"
					/>
					<img
						src="https://github.com/amawalla/js-coding-challenge/raw/master/assets/store/windows-store.svg"
						alt="Microsoft Store"
					/>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
