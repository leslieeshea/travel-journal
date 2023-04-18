/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

export default function Card() {
	return (
		<div className='card'>
			<img
				className='card--image'
				alt='card-image'
				src='https://images.unsplash.com/photo-1621164870333-7931835f05de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
			/>
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
