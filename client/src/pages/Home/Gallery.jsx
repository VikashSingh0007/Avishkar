// Timeline.js

import React from 'react';
import './Gallery.css'; // Make sure to adjust the path

  const timelineData = [
    {
      imgSrc: 'https://assets.codepen.io/159218/the-legend-of-zelda.png',
      title: 'The legend of Zelda',
      year: '1986',
      platform: 'NES',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/zelda-2-the-adventure-of-link.jpg',
      title: 'The Adventure of Link',
      year: '1987',
      platform: 'NES',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/a-link-to-the-past.jpg',
      title: 'A Link to the Past',
      year: '1991',
      platform: 'SNES',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/links-awakening.png',
      title: "Link's Awakening",
      year: '1993',
      platform: 'Game Boy',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/ocarina-of-time.jpg',
      title: 'Ocarina of Time',
      year: '1998',
      platform: 'Nintendo 64',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/majoras-mask.jpg',
      title: "Majora's Mask",
      year: '2000',
      platform: 'Nintendo 64',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/oracle-of-seasons.jpg',
      title: 'Oracle of Seasons',
      year: '2001',
      platform: 'Game Boy Color',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/oracle-of-ages.jpg',
      title: 'Oracle of Ages',
      year: '2001',
      platform: 'Game Boy Color',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/the-wind-waker.jpg',
      title: 'The Wind Waker',
      year: '2002',
      platform: 'GameCube',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/the-minish-cap.jpg',
      title: 'The Minish Cap',
      year: '2004',
      platform: 'GBA',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/four-swords-adventures.jpg',
      title: 'Four Swords Adventures',
      year: '2005',
      platform: 'GameCube',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/twilight-princess.jpg',
      title: 'Twilight Princess',
      year: '2006',
      platform: 'WII',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/phantom-hourglass.jpg',
      title: 'Phantom Hourglass',
      year: '2007',
      platform: 'DS',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/spirit-tracks.jpg',
      title: 'Spirit Tracks',
      year: '2009',
      platform: 'DS',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/skyward-sword.jpg',
      title: 'Skyward Sword',
      year: '2011',
      platform: 'WII',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/a-link-between-worlds.jpg',
      title: 'Link Between Worlds',
      year: '2013',
      platform: '3DS',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/tri-force-heroes.jpg',
      title: 'Tri-force Heroes',
      year: '2015',
      platform: '3DS',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/breath-of-the-wild.jpg',
      title: 'Breath of the Wild',
      year: '2017',
      platform: 'WII U',
    },
    {
      imgSrc: 'https://assets.codepen.io/159218/tears-of-the-kingdom.jpg',
      title: 'Tears of the Kingdom',
      year: '2023',
      platform: 'Switch',
    },
  ];

const Timeline = () => {
  return (
   <div className="custom-boy-css rootGallary">
    <section className="timeline">
      {timelineData.map((item, index) => (
        <article key={index}>
          <img className='imgGallery' src={item.imgSrc} alt="" />
          <div>
            <h2>{item.title}</h2>
            <time>{item.year}</time> -
            <strong>{item.platform}</strong>
          </div>
        </article>
      ))}
    </section>
    </div>
  );
};

export default Timeline;
