import React, { useState } from 'react';
import Card from './components/Card';
import Top from './components/Top';
import Header from './components/Header';
import End from './components/End';

function App() {
  let [cart, setCart] = useState(0);
  const products = [
    {
      name: 'Fancy Product',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$40.00 - $80.00',
      sale: false,
    },
    {
      name: 'Special Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$18.00',
      sale: true,
      originalPrice: '$20.00',
      reviews: 5,
    },
    {
      name: 'Sale Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$25.00',
      sale: true,
      originalPrice: '$50.00',
    },
    {
      name: 'Popular Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$40.00',
      sale:false,
      reviews: 5,
    },
    {
      name: 'Sale Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$25.00',
      sale: true,
      originalPrice: '$50.00',
      reviews: 5,
    },
    {
      name: 'Fancy Product',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$120.00',
      sale: false,
      originalPrice: '$280.00',
    },
    {
      name: 'Special Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$18.00',
      sale: true,
      originalPrice: '$20.00',
      reviews: 5,
    },
    {
      name: 'Special Item',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      price: '$40.00',
      sale: false,
      reviews: 5,
    }
  ];
  return (
    <>
      <Top cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
              <Card key={index} product={product} cart={cart} setCart={setCart} />
            ))}  
          
          </div>
        </div>
      </section>
      <End />
    </>
  );
}

export default App;
