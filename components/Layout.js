import Navbar from './Navbar';

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h4 className="mb-4">EasyFix Expert</h4>
              <p className="mb-4">
                Professional home appliance repair services you can trust. Fast, reliable, and affordable solutions for all your appliance needs.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="/air-conditioner" className="text-white text-decoration-none">AC Service</a></li>
                <li className="mb-2"><a href="/washing-machine" className="text-white text-decoration-none">Washing Machine</a></li>
                <li className="mb-2"><a href="/fridge" className="text-white text-decoration-none">Refrigerator</a></li>
                <li className="mb-2"><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Our Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">AC Installation</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">AC Repair</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Washing Machine Repair</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Refrigerator Service</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Dishwasher Repair</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h5 className="mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  <span>123 Service Street, City, State, ZIP</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  <span>+91 7550331197</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-envelope text-primary me-2"></i>
                  <span>info@easyfixexpert.com</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-clock text-primary me-2"></i>
                  <span>Mon-Sat: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; {currentYear} EasyFix Expert. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout; 