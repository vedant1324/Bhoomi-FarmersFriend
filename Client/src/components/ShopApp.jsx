import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Cart from './cart';

const categories = [
  { id: 1, name: 'Moisture Sensors' },
  { id: 2, name: 'Nutrient Sensors' },
  { id: 3, name: 'Temperature Sensors' },
];

const products = [
  {
    id: 1,
    name: 'OT Wireless Soil EC PH Analyzer Temperature Moisture nutrient Sensor',
    price: 2000,
    originalPrice: 2400,
    sensorType: 'Moisture and Temperature Sensor',
    image: 'tm.png',
    category: 'Moisture Sensors',
  },
  {
    id: 2,
    name: 'soil moisture ph ec temperature sensor soil humidity modbus ec sensors ph tester',
    price: 3000,
    originalPrice: 3200,
    sensorType: 'Nutrient Detection Probe',
    image: '222.png', // Replace with the actual image URL
    category: 'Nutrient Sensors',
  },
  {
    id: 3,
    name: '7 in 1 Sensor',
    price: 12000.0,
    originalPrice: 24.99,
    sensorType: 'Nutrient Detection Probe',
    image: '7in1.png', // Replace with the actual image URL
    category: 'Nutrient Sensors',
  },
  {
    id: 4,
    name: 'NPK Sensor',
    price: 12000.0,
    originalPrice: 24.99,
    sensorType: 'Nutrient Detection Probe',
    image: 'npk.png', // Replace with the actual image URL
    category: 'Nutrient Sensors',
  },
  {
    id: 5,
    name: '3 in 1 sensor',
    price: 4800,
    originalPrice: 5000,
    sensorType: 'Soil Water Content Soil Temperature Moisture Sensor',
    image: 'npk1.png', // Replace with the actual image URL
    category: 'Nutrient Sensors',
  },
  {
    id: 6,
    name: '7 in 1 Rapid soil tester',
    price: 9120,
    originalPrice: 10000,
    sensorType: 'NPK ph moisture temperature humidity',
    image: '7in1cwt.png',
    category: 'Nutrient Sensors',
  },
  {
    id: 7,
    name: '2pcs soil moisture sensor',
    price: 690,
    originalPrice: 1000,
    sensorType: '2Pcs Soil Moisture Sensor Soil Humidity Detection Module for Arduino',
    image: '2pc.png',
    category: 'Humidity Sensors',
  },
];

const ShopApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (text) => {
    setSearchText(text.toLowerCase());
  };

  const handleAddToCart = (product) => {
    setCartProducts((prevCart) => [...prevCart, product]);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300, friction: 10 },
  });

  const popIn = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const zoomIn = useSpring({
    transform: 'scale(1.2)',
    config: { tension: 300, friction: 10 },
  });

  
  const handleScrollToSensors = () => {
    const sensorSection = document.getElementById('sensor-section');
    if (sensorSection) {
      window.scrollTo({
        top: sensorSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <animated.div style={fadeIn} className="bg-gray-100 min-h-screen">
      <header className="bg-white px-2 py-2 shadow-md flex justify-between items-center mb-4">
        <div className='flex flex-row'>
          <img src="bhoomikartlogo.png" alt="" className='h-12 ml-3' />
          <Link to='/bhoomikart' style={zoomIn} className="text-xl font-bold text-green-500 ml-6 mt-3">
            BhoomiKart
          </Link>
        </div>
        <div className='float-right'>
          <div className="flex items-center">
            <a
              href="/dashboard"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-300"
            >
              Go Back to Dashboard
            </a>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleOpenCart}>
              View Cart
            </button>
            <input
              className="border border-gray-300 rounded-md px-2 py-1 pl-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full md:w-auto"
              placeholder="Search for sensors..."
              value={searchText}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 rounded-md hover:bg-gray-200 ${
                selectedCategory === category.id ? 'bg-green-500 text-white' : 'text-gray-700'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="h-96 relative overflow-hidden mb-4">
          <img
            className="w-full h-full object-fill absolute top-0 left-0 z-10 blur-md"
            src="bkbanner.jpeg"
            alt="Banner Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white ">
            <h2 className="text-5xl font-extrabold mb-4 backdrop-blur-sm   ">"Grow Smart, Grow BhoomiKart. Elevate Your Agriculture with Advanced Soil Sensors."</h2>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600" onClick={handleScrollToSensors}>Shop Now</button>
          </div>
        
        </div>
        <div id="sensor-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 m-8">
          {products
            .filter(
              (product) =>
                (!selectedCategory || product.category === selectedCategory) &&
                (product.name.toLowerCase().includes(searchText) ||
                  product.sensorType.toLowerCase().includes(searchText))
            )
            .map((product) => (
              <animated.div
                key={product.id}
                style={popIn}
                className="bg-white rounded-lg shadow-md overflow-hidden p-4 transition duration-300 transform hover:scale-105"
              >
                <img className="w-full h-48 object-contain mb-4" src={product.image} alt={product.name} />
                <div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">₹{product.price}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-700">
                      {product.sensorType}
                    </span>
                    <span className="text-green-500 text-sm font-medium">₹{product.originalPrice}</span>
                    <span className="text-red-500 text-xs">
                      -{(100 - (product.price / product.originalPrice) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    onClick={() => {
                      handleAddToCart(product);
                      handleOpenCart();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </animated.div>
            ))}
        </div>
      </main>
      {isCartOpen && <Cart cartProducts={cartProducts} onClose={handleCloseCart} />}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">Copyright &copy; {new Date().getFullYear()} Soil Sensor Shop</p>
      </footer>
    </animated.div>
  );
};

export default ShopApp;
