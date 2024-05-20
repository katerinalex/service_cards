import React from 'react';
import logo from './logo.svg';
import './App.scss';
import tap from './images/Tap.svg';
import paint from './images/paint.svg';
import electr from './images/Electrical.svg';
import door from './images/door.svg';
import picture from './images/picture.svg';
import inst from './images/instalation.svg';
import home from './images/home.svg';
import furn from './images/Frame 11.svg';
import geom from './images/Geom.svg';
import { Link } from 'react-router-dom';

function App() {
  const cards = [
    {
      title: 'Plumbing',
      image: tap,
      options: ['Install / Replace a Toilet', 'Install / Replace a Faucet', 'Fix a Leaking', 'Install / Replace a Sink', 'Repair Under Sink Plumbing'],
      link: '',
      color: 'green'
    },
    {
      title: 'Drywall & painting',
      image: paint,
      options: ['Install Drywall', 'Patch and Paint Drywall', 'Paint a Wall / Trim', 'Paint or Stain A Fence', 'Paint a Cabinet Door'],
      link: '',
      color: 'blue'
    },
    {
      title: 'Furniture assembly',
      image: furn,
      options: ['Assemble Fitness Equipment', 'Assemble - Custom Request', 'Assemble a TV Stand', 'Assemble Pet Furniture', 'Assemble a Bar Cabinet'],
      link: '',
      color: 'yellow'
    },
    {
      title: 'Electrical',
      image: electr,
      options: ['Install / Replace a Ceiling Fan', 'Replace Switch & Outlet Faceplate', 'Upgrade to a Video Doorbell', 'Install / Replace an Bathroom Exhaust Fan'],
      link: '',
      color: 'red'
    },
    {
      title: 'Doors & windows',
      image: door,
      options: ['Install / Replace New Door', 'Install / Replace a Screen Door', 'Install / Replace a Window Screen', 'Repair a Door Frame'],
      link: '',
      color: 'green'
    },
    {
      title: 'Hanging & mounting',
      image: picture,
      options: ['Mount a TV', 'Remove a TV Mount from Wall', 'Mount and Hang a Projector Screen', 'Hang a Bathroom Fixture'],
      link: '',
      color: 'blue'
    },
    {
      title: 'Appliance installation',
      image: inst,
      options: ['Replace an Existing Dishwasher', 'Replace an Existing Microwave', 'Replace an Existing Oven'],
      link: '',
      color: 'yellow'
    },
    {
      title: 'Smart home',
      image: home,
      options: ['Install a Smart Lock', 'Install a Smart Home Security Camera', 'Mount a Baby Monitor Camera on the Wall', 'Install an Under Sink Water Filtration System '],
      link: '',
      color: 'red'
    },
    {
      title: 'Outdoor',
      image: geom,
      options: ['Assemble an Outdoor Trampoline', 'Hang a Garage Shelving Unit', 'Install Outdoor Decorative Exterior Window Shutters', 'Install a Storm Door'],
      link: '',
      color: 'green'
    },
  ];
  return (
    <div className="App">
      <div className="App__cards">
        {cards.map(card => (
          <div className={`App__cards__item App__cards__item--${card.color}`} key={card.title}>
            <img src={card.image} alt={card.title} className="App__cards__item__img" />
            <h2 className="App__cards__item__title">{card.title}</h2>
            <ul className="App__cards__item__options">
              {card.options.map(option => (
                <li className="App__cards__item__options__item" key={option}>{option}</li>
              ))}
            </ul>
            <a className="App__cards__item__link" href={card.link}>View more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
