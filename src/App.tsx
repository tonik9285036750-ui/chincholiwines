import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SEOLanding from './pages/SEOLanding';

export default function App() {
  return (
    <Router>
      <div className="bg-[#FAF8F5] text-stone-900 font-sans antialiased selection:bg-[#5c0620]/30 selection:text-stone-900">
        {/* Navigation Header */}
        <Navbar />

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-wines-online" element={<SEOLanding title="Order Wines Online" />} />
          <Route path="/hotel-booking" element={<SEOLanding title="Hotel Booking" />} />
          <Route path="/wine-shop" element={<SEOLanding title="Wine Shop" />} />
          <Route path="/home-delivery" element={<SEOLanding title="Home Delivery" />} />
          <Route path="/vip-lounge-booking" element={<SEOLanding title="VIP Lounge Booking" />} />
          <Route path="/event-venues" element={<SEOLanding title="Event Venues" />} />
        </Routes>

        {/* Footer Disclaimer */}
        <Footer />

        {/* Global WhatsApp Float */}
        <a
          href="https://wa.me/919424769902?text=Hello%20Chincholi%20Team%2C%20I%20want%20to%20book%20something"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex items-center justify-center transition-all duration-200 hover:scale-[1.05]"
          aria-label="Chat on WhatsApp"
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '60%',
            backgroundColor: 'rgba(16, 120, 54, 0.776)',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 18px',
            zIndex: 2000,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.05 4.91A9.87 9.87 0 0 0 12.04 2 9.94 9.94 0 0 0 2 12.03a9.86 9.86 0 0 0 1.43 5.14L2 22l4.97-1.43a9.9 9.9 0 0 0 5.08 1.4h.01c5.5 0 10-4.47 10.01-9.97A9.81 9.81 0 0 0 19.05 4.9ZM12.06 20a8.32 8.32 0 0 1-4.24-1.17l-.3-.18-2.95.85.84-2.88-.2-.3A8.33 8.33 0 0 1 3.7 12a8.4 8.4 0 0 1 8.37-8.38A8.36 8.36 0 0 1 20.4 12c-.01 4.62-3.78 8.37-8.34 8.37Zm4.67-6.23c-.25-.13-1.47-.72-1.69-.8-.23-.08-.4-.13-.56.13-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.21-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.01-.38.12-.5.13-.13.25-.29.38-.42.13-.17.17-.29.25-.46.08-.17.04-.32-.02-.45-.06-.13-.56-1.34-.77-1.83-.2-.49-.4-.42-.56-.43l-.48-.01c-.17 0-.41.06-.62.29-.21.23-.82.8-.82 1.97 0 1.16.84 2.28.96 2.44.13.17 1.65 2.64 4.12 3.69.58.25 1.04.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.57-.62 1.8-1.22.22-.6.22-1.09.15-1.2-.06-.11-.22-.18-.47-.31Z"></path>
          </svg>
        </a>
      </div>
    </Router>
  );
}
