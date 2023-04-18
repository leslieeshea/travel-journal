import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
	return (
		<header>
			<nav>
			<FaGlobeAmericas className='navbar--globe' />
			<h1 className='navbar--title'>my travel journal.</h1>
			</nav>
		</header>
	)
}
