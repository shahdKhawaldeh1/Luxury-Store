import React from 'react';
import './styles.css';
import { ItemDetails } from '../Category/ItemDetails';

export const Home = () => {
  return (
    <>
      <div className='main-home'>
        <div className='background-image'></div>
        <div className='text-home'>
          <h1 className='subtitle-home'>Welcome to Luxury Store!</h1>
          <h2 className='title-home'>
            <em>Luxury</em> Explore a Universe of Unrivaled Elegance
          </h2>
          <div className='button-home'>
            <a href='#'>Shop Now</a>
          </div>
        </div>
      </div>
      <ItemDetails />
    </>

  );
};
