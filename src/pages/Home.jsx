import React, { useRef, useState } from 'react';
import Layout from '../layout/Layout';
import BiryaniCard from 'components/BiryaniCard/BiryaniCard';
import biryaniData from 'data/biryaniData.json';
import 'global.css';
import ReviewCard from 'components/Reviewcard/ReviewCard';
import { useNavigate } from 'react-router-dom';

const reviewData = [
  {
    image: '/assets/review1.png',
    name: 'John Doe',
    rating: 4,
    text: "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app."
  },
  {
    image: '/assets/review2.png',
    name: 'Emily Johnson',
    rating: 5,
    text: "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective."
  },
  {
    image: '/assets/user2.png',
    name: 'Michael Brown',
    rating: 5,
    text: "With Capable, I've expanded my circle and found genuine connections. The smooth interface makes socializing so easy."
  },
  {
    image: '/assets/review1.png',
    name: 'Michael Brown',
    rating: 4,
    text: "With Capable, I've expanded my circle and found genuine connections. The smooth interface makes socializing so easy."
  }
];

const App = () => {
  const [bookingType, setBookingType] = useState('dine-in');
  const slidesRef = useRef(null);
  const navigate = useNavigate();

  const handleOrderClick = (platform) => {
    const links = {
      swiggy: 'https://www.swiggy.com/city/bangalore/bagara-biryani-cafe-electronic-city-rest639045',
      zomato: 'https://www.zomato.com/bangalore/bagara-biriyani-cafe-electronic-city-bangalore',
    };
    window.open(links[platform], '_blank');
  };

  const scroll = (direction) => {
    const { current } = slidesRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout>
      {/* Top Banner */}
      <div className="biryani" style={{ backgroundImage: `url('/assets/birr.png')` }}>
        <div className="biryani-content1">
          <div className="left">
            <h1>Best Biryani In <br /> Electronic City</h1>
            <p>Bagara Biryani is fusion of Telangana special rice and many hidden recipes of tribes. Hence we call it as Folk Biryani or Naatu Biryani.</p>
            <button className="click-btn">Click Here</button>
          </div>
        </div>
        <div className="logo2">
          <img src="/assets/discount.png" alt="15% Discount Offer" />
        </div>
      </div>

      {/* Booking Section */}
      <div className="bir-sec rytutguy">
        <div className="biryani-section">
          <div className="biryani-content">
            <h1>Traditional Chicken <br />Biryani In Electronic City</h1>
            <p>Bagara Biryani is fusion of Telangana special rice and many hidden recipes of tribes. Hence we call it as Folk Biryani or Naatu Biryani.</p>
            <p>We have dedicated some of the names to remember the greatness and significance of many tribes of India. Like Banjara Chicken Biryani, Kalinga Chicken Biryani and many more</p>
            <p>Over all, if you want to taste a different biryani, visit us - It's flavorful and Unique..</p>

            <div className="biryani-features">
              <div className="biryani-feature-item">World Level Insurance Travelling</div>
              <div className="biryani-feature-item">Many Language Tour Guide Skills</div>
              <div className="biryani-feature-item">Many Language Tour Guide Skills</div>
            </div>
          </div>

          <div className="biryani-booking">
            <h2 className="biryani-booking-title">Book Your Table Now!</h2>

            <div className="biryani-toggle">
              <input type="radio" name="booking-type" id="dine-in" checked={bookingType === 'dine-in'} onChange={() => setBookingType('dine-in')} />
              <label htmlFor="dine-in" className="biryani-toggle-btn">Dine in</label>
              <input type="radio" name="booking-type" id="order-online" checked={bookingType === 'order-online'} onChange={() => setBookingType('order-online')} />
              <label htmlFor="order-online" className="biryani-toggle-btn">Order online</label>
            </div>

            {bookingType === 'dine-in' ? (
              <form>
                <div className="biryani-form-group">
                  <label htmlFor="biryani-name">Name</label>
                  <input type="text" id="biryani-name" placeholder="Your Name" />
                </div>
                <div className="biryani-form-group">
                  <label htmlFor="biryani-mobile">Mobile Number</label>
                  <input type="tel" id="biryani-mobile" placeholder="+91" />
                </div>
                <button type="button" className="biryani-discount-btn">Get 15% discount on your next Dine in</button>
                <button type="submit" className="biryani-submit-btn">Submit</button>
              </form>
            ) : (
              <div className="order-platforms">
                <p style={{ fontSize: '16px', color: '#ccc', marginBottom: '10px' }}>Choose a platform to order:</p>
                <div className="order-images">
                  <img src="/assets/swiggy.png" alt="Order on Swiggy" onClick={() => handleOrderClick('swiggy')} className="platform-img" />
                  <img src="/assets/zomato.png" alt="Order on Zomato" onClick={() => handleOrderClick('zomato')} className="platform-img" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="whychoose">
        <div className="whycontainer">
          <h2>Why Choose Bagara Biryani Cafe</h2>
          <div className="why-cards">
            <div className="why-card">
              <img src="/assets/delivery.png" alt="24/7 Delivery" className="why-icon" />
              <h3>24/7 delivery</h3>
              <p>Biryani cravings anytime? We deliver 24/7 hot, fresh, and fast!</p>
            </div>
            <div className="why-card">
              <img src="/assets/nati.png" alt="Authentic Nati Style" className="why-icon" />
              <h3>Authentic Nati style</h3>
              <p>Bold spices, rich flavors — experience the true taste of Authentic Nati Style Biryani!</p>
            </div>
            <div className="why-card">
              <img src="/assets/varietie.png" alt="Biryani Varieties" className="why-icon2" />
              <h3>15 Plus Varieties Of Biryanis</h3>
              <p>Explore 15+ mouth-watering Biryani varieties, each crafted with unique spices and love.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Biryani Slider */}
      <div className="biriii">
        <div className="content">
          <div className="headers">
            <h1 className="titles">Biryani Items</h1>
            <div className="nav-arrows">
              <div className="nav-arrow" onClick={() => scroll('left')}><p>←</p></div>
              <div className="nav-arrow" onClick={() => scroll('right')}><p>→</p></div>
            </div>
          </div>
          <div className="slides-container" ref={slidesRef}>
            {biryaniData.slice(0, 4).map((item, index) => (
              <BiryaniCard
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                badge={item.badge}
                previewMode={true}
              />
            ))}
          </div>
        </div>
        <div className="order-button-container">
          <button onClick={() => navigate('/dine')} className="order-button">Dine In</button>
        </div>
      </div>

      {/* Bulk Section */}
      <div className="bulk-biryani-section">
        <h1>Looking for customized Bulk Biryani<br />Boxes & Catering Services</h1>
        <div className="buffet-wrapper">
          <div className="buffet-box">
            <img src="/assets/menu1.png" alt="Veg Buffet Menu" />
            <div className="buffet-content">
              <img src="/assets/vegii.png" alt="Veg Icon" />
              <ul className="buffet-list">
                <li>Soup</li><li>Veg Starter</li><li>Bread</li><li>Veg Curry</li><li>Veg Biryani</li><li>Salan</li><li>Raita</li><li>Dessert</li><li>Ice Cream Scoop</li>
              </ul>
            </div>
          </div>
          <div className="buffet-box">
            <img src="/assets/menu2.png" alt="Non-Veg Buffet Menu" />
            <div className="buffet-content">
              <img src="/assets/vegii.png" alt="Veg Icon" />
              <ul className="buffet-list">
                <li>Soup</li><li>Veg Starter</li><li>Bread</li><li>Veg Curry</li><li>Veg Biryani</li><li>Salan</li><li>Raita</li><li>Dessert</li><li>Ice Cream Scoop</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="contact-btn">Contact us →</button>
      </div>

      {/* Celebrate Section */}
      <div className="celebrate">
        <h2 className="celebrate-title">Celebrate with us at Bagara Biryani Cafe in <br /> Electronic City</h2>
        <div className="celebrate-cards">
          <div className="celebrate-card1">
            <img src="/assets/celeb.png" className="getimg" alt="Social Events" />
            <div className="ccard-content">
              <h3>Social Get togethers</h3>
              <p>Hosting Open-Mic and Stand Up Comedy Shows for Lively Experiences.</p>
            </div>
          </div>
          <div className="celebrate-card">
            <img src="/assets/celeb2.png" alt="Live Events" />
            <div className="ccard-content">
              <h3>Live Events</h3>
              <p>Ideal Venue for various events.</p>
            </div>
          </div>
          <div className="celebrate-card">
            <img src="/assets/celeb3.png" alt="Birthday Events" />
            <div className="ccard-content">
              <h3>Birthday Celebrations</h3>
              <p>Welcoming spaces for socials.</p>
            </div>
          </div>
        </div>
        <div className="contact1-btn-container">
          <button className="contact1-btn">Contact us →</button>
        </div>
      </div>

      {/* Unique Section */}
      <div className="unique">
        <div className="unique-container">
          <h2 className="unique-title">Uniqueness About Our Brand</h2>
          <div className="unique-content">
            <ul>
              <li><h4>In-House Food Processing Unit:</h4><p>Streamlining cost effective food production for quality and freshness.</p></li>
              <li><h4>No Skilled Manpower Required:</h4><p>Only last-mile regeneration like microwave or grill is required at the outlet level.</p></li>
              <li><h4>Supply Chain Management:</h4><p>Ensuring efficient sourcing, processing and distribution through single point of contact.</p></li>
              <li><h4>Consistency Assured:</h4><p>Ensuring a consistent standard for all food items and beverages is guaranteed.</p></li>
            </ul>
            <img src="/assets/unique.png" alt="Unique Highlights" />
          </div>
        </div>
      </div>

      {/* Franchise Section */}
      <div className="franchise-section">
        <div className="franchise-container">
          <h2>Contact us if you are interested<br />in owning our Franchise</h2>
          <a href="/contact" className="franchise-button">Get in touch →</a>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-section">
        <h2 className="reviews-title">User Reviews and Feedback</h2>
        <div className="reviews-container">
          {reviewData.map((review, index) => (
            <ReviewCard
              key={index}
              image={review.image}
              name={review.name}
              rating={review.rating}
              text={review.text}
            />
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Bagara Biryani Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28405.624019859242!2d77.6166734111276!3d12.838676060744392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b84b9b69563%3A0xa9bd721fcb25938e!2sBagara%20Biryani%20cafe!5e1!3m2!1sen!2sin!4v1749634154633!5m2!1sen!2sin"
          width="1264.5"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
};

export default App;
