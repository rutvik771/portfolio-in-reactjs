import React, { useRef } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom';
import resume from '../../assets/resume/rutvik patel.pdf';

export const Navbar = () => {
	const hamburger = useRef();

	const openNavbar = () => {
		const navLinks = document.querySelector('.nav-links');
		const lines = document.querySelectorAll('.line');
		navLinks?.classList.toggle('active');
		lines.forEach((line) => {
			line.classList.toggle('active');
		});
	};

	return (
		<>
			<div id='desktop-navbar'>
				<nav className='navbar-container'>
				   <NavLink className='logo' to="/">
							Rutvik Patel
					</NavLink>
					<div className='menu'>
						<NavLink  to="/work">Work</NavLink>
						<NavLink to="/about">About</NavLink>
						{/* <NavLink to="/contact">Contact</NavLink> */}
						<a href={resume} target="_blank">Resume</a>
					</div>
				</nav>
			</div>
			<div id='mobile-navbar'>
				<nav className="mobile-navbar">
					<div className="navbar-container">
						<NavLink className='logo' to="/">
							Rutvik Patel
						</NavLink>
						<div className="hamburger" onClick={openNavbar} ref={hamburger}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
					<div className="nav-links">
						<NavLink onClick={openNavbar} to="/work" className="nav-link">
						Work
						</NavLink>
						<NavLink onClick={openNavbar} to="/about" className="nav-link">
						About
						</NavLink>
						<a href={resume} target="_blank" className="nav-link">Resume</a>
						{/* <NavLink onClick={openNavbar} to="/contact" className="nav-link">
						Contact
						</NavLink> */}
					</div>
				</nav>
			</div>
		</>
	)
}
