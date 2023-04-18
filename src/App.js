import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cardElements = data.map(data => {
    return (
      <Card
        key={data.id}
        data={data}
      />
    )
  });

  return (
    <div>
      <Navbar />
      <section className='card--list'>
        {cardElements}
      </section>
    </div>
  )
}
