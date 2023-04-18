/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

export default function Card(props) {
	return (
		<>
			<div className='card'>
			<img
				className='card--image'
				alt='card-image'
				src={props.data.imageUrl}
			/>
			<div className='card--details'>
				<span className='card--location'>{props.data.location}</span>
				<a
					href={props.data.googleMapsUrl}
					className='card--map'
				>
					View on Google Maps
				</a>
				<h2 className='card--title'>{props.data.title}</h2>
				<p className='card--dates'>{props.data.startDate} - {props.data.endDate}</p>
				<p className='card--description'>{props.data.description}</p>
			</div>
		</div>
		<hr></hr>
		</>
	)
}
