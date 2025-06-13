import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className = "navbar">
			<div className = "navbar-left">
				<a href = "/" className="logo">
					Map
				</a>
			</div>
			<div className="navbar-center">
				<ul className="navlinks">
					<li>
						<a href="/">Home</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;