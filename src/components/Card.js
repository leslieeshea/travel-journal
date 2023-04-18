import React from 'react';

export default function Card() {
	return (
		<div className='card'>
			<div className='card--image'></div>
			<div className='card--details'>
				<span className='card--location'>ISTANBUL</span>
				<a
					href='https://www.google.com/maps/d/viewer?mid=1izAC_NU-T8opgp_MeLgji5_uDhE&hl=en_US&ll=41.00850000000001%2C28.979283999999996&z=17'
					className='card--map'
				>
					View on Google Maps
				</a>
				<h2 className='card--title'>Hagia Sophia</h2>
				<p className='card--dates'>12 May, 2016 - 24 May, 2016</p>
				<p className='card--description'>
					Istanbul is home to several churches belonging to the Byzantine architecture and Hagia Sophia happens to be the most significant Byzantine churches.
					Hagia Sophia in Greek (Ayasofya in Turkish) happens as the universally acknowledged and the most visited museums in the world.
				</p>
			</div>
		</div>
	)
}
