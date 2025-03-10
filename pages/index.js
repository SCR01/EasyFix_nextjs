import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { initSwipers, submitGoogleForm } from '../lib/clientUtils';

export default function Home() {
  useEffect(() => {
    // Initialize Swipers after component mount
    initSwipers();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitGoogleForm('submit-to-google-sheet');
  };

  return (
    <Layout>
      <Head>
        <title>EasyFix Expert - Home Appliance Service</title>
        <meta name="description" content="Fast, Reliable, and Affordable Repair Services at Your Doorstep!" />
      </Head>

      {/* Hero Section */}
      <section className="landing-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <h1>
                Expert <span style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textFillColor: 'transparent' }}>Home Appliance</span> Repair Services
              </h1>
              <p className="lead mb-4">
                Schedule a service appointment today and enjoy comfort in your home again. Fast, reliable, and affordable repairs at your doorstep!
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn rounded-pill btn-with-icon" href="tel:7550331197" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>
                  <i className="bi bi-telephone-fill"></i>
                  Call Now
                </a>
                <a className="btn btn-outline-info rounded-pill btn-with-icon" href="#contact">
                  <i className="bi bi-calendar-check"></i>
                  Book Service
                </a>
              </div>
              
              <div className="mt-5 d-flex gap-4">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle p-2 text-white me-2" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle p-2 text-white me-2" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span>Expert Technicians</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
              <div className="hero-image-container position-relative">
                <div className="bg-light rounded-4 p-4 text-center position-relative overflow-hidden" style={{ height: '500px' }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="rounded-circle position-absolute" style={{ width: '300px', height: '300px', opacity: '0.1', top: '-100px', right: '-100px', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
                    <div className="rounded-circle position-absolute" style={{ width: '200px', height: '200px', opacity: '0.05', bottom: '-50px', left: '-50px', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
                    <div className="position-relative">
                      <h3 className="mb-3" style={{ color: '#17a2b8' }}>Professional Appliance Services</h3>
                      <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                          <div className="rounded-circle p-3 me-3" style={{ background: 'rgba(23, 162, 184, 0.1)' }}>
                            <i className="bi bi-snow" style={{ color: '#17a2b8' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">Air Conditioner Service</h5>
                            <small className="text-muted">Repair, Installation & Maintenance</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                          <div className="rounded-circle p-3 me-3" style={{ background: 'rgba(23, 162, 184, 0.1)' }}>
                            <i className="bi bi-water" style={{ color: '#17a2b8' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">Washing Machine Repair</h5>
                            <small className="text-muted">All Brands & Models</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                          <div className="rounded-circle p-3 me-3" style={{ background: 'rgba(23, 162, 184, 0.1)' }}>
                            <i className="bi bi-thermometer-half" style={{ color: '#17a2b8' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">Refrigerator Service</h5>
                            <small className="text-muted">Quick & Reliable Repairs</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="fw-bold text-uppercase" style={{ color: '#17a2b8' }}>Our Services</h6>
            <h2 className="display-5 fw-bold">What We Offer</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We provide comprehensive repair and maintenance services for all your home appliances
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 service-card">
                <div className="service-icon" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)', color: '#17a2b8' }}>
                  <i className="bi bi-snow"></i>
                </div>
                <div className="card-body text-center">
                  <h3>AC Services</h3>
                  <p>
                    Complete air conditioner solutions including installation, repair, gas refilling, and regular maintenance.
                  </p>
                  <a href="/air-conditioner" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 service-card">
                <div className="service-icon" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)', color: '#17a2b8' }}>
                  <i className="bi bi-water"></i>
                </div>
                <div className="card-body text-center">
                  <h3>Washing Machine</h3>
                  <p>
                    Expert repair services for all types of washing machines, from basic troubleshooting to complex repairs.
                  </p>
                  <a href="/washing-machine" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 service-card">
                <div className="service-icon" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)', color: '#17a2b8' }}>
                  <i className="bi bi-thermometer-half"></i>
                </div>
                <div className="card-body text-center">
                  <h3>Refrigerator</h3>
                  <p>
                    Comprehensive refrigerator repair services including cooling issues, ice maker repairs, and seal replacements.
                  </p>
                  <a href="/refrigerator" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="position-relative p-4">
                <div className="rounded-4 position-absolute" style={{ width: '80%', height: '80%', opacity: '0.1', zIndex: '0', top: '10%', left: '10%', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
                <div className="bg-white rounded-4 shadow p-4 position-relative" style={{ zIndex: '1' }}>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                          <i className="bi bi-clock-history"></i>
                        </div>
                        <h5 className="mb-0">Fast Service</h5>
                      </div>
                      <p>Quick response time and efficient repairs</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                          <i className="bi bi-tools"></i>
                        </div>
                        <h5 className="mb-0">Expert Team</h5>
                      </div>
                      <p>Highly trained and certified technicians</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                          <i className="bi bi-shield-check"></i>
                        </div>
                        <h5 className="mb-0">Warranty</h5>
                      </div>
                      <p>Service warranty on all repairs</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <h5 className="mb-0">Best Prices</h5>
                      </div>
                      <p>Competitive and transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h6 className="fw-bold text-uppercase" style={{ color: '#17a2b8' }}>Why Choose Us</h6>
              <h2 className="display-5 fw-bold mb-4">We Provide Quality Appliance Repair Services</h2>
              <p className="lead mb-4">
                With years of experience in the industry, we've built a reputation for reliable, efficient, and affordable appliance repair services.
              </p>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h5 className="mb-0">24/7 Emergency Service</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h5 className="mb-0">90-Day Service Warranty</h5>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle p-2 text-white me-3" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h5 className="mb-0">Genuine Spare Parts</h5>
                </div>
              </div>
              <a href="#contact" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Contact Us Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="fw-bold text-uppercase" style={{ color: '#17a2b8' }}>Trusted Brands</h6>
            <h2 className="fw-bold mb-4">Brands We Service</h2>
            <div className="mx-auto mb-5" style={{ width: '80px', height: '3px', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We repair and service all major appliance brands
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/samsung.svg"
                    alt="Samsung"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/lg.svg"
                    alt="LG"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/whirlpool.svg"
                    alt="Whirlpool"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/bosch.svg"
                    alt="Bosch"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="500">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/panasonic-logo.webp"
                    alt="Panasonic"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="600">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/Haier.svg"
                    alt="Haier"
                    width={100}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <h6 className="fw-bold text-uppercase" style={{ color: '#17a2b8' }}>Contact Us</h6>
              <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                Have questions or need to schedule a service? Contact us today and our team will get back to you as soon as possible.
              </p>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-geo-alt fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>Our Location</h5>
                  <p className="mb-0">123 Service Street, City, State, ZIP</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-telephone fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p className="mb-0">+91 7550331197</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-envelope fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p className="mb-0">info@easyfixexpert.com</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h3 className="card-title text-center mb-4">Book a Service</h3>
                  <form id="submit-to-google-sheet" onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input type="tel" className="form-control" id="phone" name="phone" placeholder="Your Phone" required />
                          <label htmlFor="phone">Your Phone</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <select className="form-select" id="service" name="service" required defaultValue="">
                            <option value="" disabled>Select Service</option>
                            <option value="AC Service">AC Service</option>
                            <option value="Washing Machine">Washing Machine</option>
                            <option value="Refrigerator">Refrigerator</option>
                            <option value="Other">Other</option>
                          </select>
                          <label htmlFor="service">Service Type</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <textarea className="form-control" id="message" name="message" placeholder="Your Message" style={{ height: '120px' }}></textarea>
                          <label htmlFor="message">Your Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn w-100 rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>
                          <i className="bi bi-send me-2"></i> Submit Request
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 