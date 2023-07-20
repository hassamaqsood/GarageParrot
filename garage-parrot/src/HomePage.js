// HomePage.js
import React from 'react';
import './HomePage.css';
import NavigationBar from './NavigationBar';

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <h1>Welcome to V. Parrot Garage</h1>
      {/* Here you can add the rest of your components such as Services, Testimonials, etc. */}
    </div>
  );
}

export default HomePage;
