import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { initSwipers, submitGoogleForm } from '../lib/clientUtils';

export default function AirConditioner() {
  useEffect(() => {
    // Initialize Swipers after component mount
    initSwipers();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitGoogleForm('ac-form');
  };

  return (
    <Layout>
      <Head>
        <title>Air Conditioner Service - EasyFix Expert</title>
        <meta name="description" content="Professional air conditioner repair and maintenance services" />
      </Head>

      {/* Hero Section */}
      <section className="service-hero py-5 mt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative mb-4">
                <div className="position-absolute bg-gradient-info rounded-circle" style={{ width: '100px', height: '100px', opacity: '0.1', top: '-20px', left: '-20px', zIndex: '-1' }}></div>
                <h6 className="text-info fw-bold text-uppercase">Professional Service</h6>
                <h1 className="display-4 fw-bold mb-4">
                  Air Conditioner <span style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textFillColor: 'transparent' }}>Repair Service</span>
                </h1>
              </div>
              <p className="lead mb-4">
                Expert air conditioner repair and maintenance services for all brands and models. Fast, reliable, and affordable solutions at your doorstep.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a className="btn rounded-pill btn-with-icon" href="tel:7550331197" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>
                  <i className="bi bi-telephone-fill"></i>
                  Call for Service
                </a>
                <a className="btn btn-outline-info rounded-pill btn-with-icon" href="#contact">
                  <i className="bi bi-calendar-check"></i>
                  Book Service
                </a>
              </div>
              
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle p-2 text-white me-2" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span>Expert Technicians</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle p-2 text-white me-2" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span>90-Day Warranty</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="position-relative">
                <div className="rounded-4 position-absolute" style={{ width: '80%', height: '80%', opacity: '0.1', zIndex: '0', top: '10%', left: '10%', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
                <div className="text-center position-relative" style={{ zIndex: '1' }}>
                  <Image 
                    src="/images/ac-unit.png"
                    alt="Air Conditioner Service"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="text-info fw-bold text-uppercase">Our Services</h6>
            <h2 className="display-5 fw-bold">AC Solutions</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We provide comprehensive air conditioner repair and maintenance services
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle p-3 d-inline-block mb-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                    <i className="bi bi-tools text-info fs-3"></i>
                  </div>
                  <h3 className="h4 mb-3">Repair Service</h3>
                  <p className="mb-3">
                    Our expert technicians can diagnose and fix any AC issue quickly and efficiently.
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Cooling problems</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Electrical issues</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Thermostat repair</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Unusual noises</span>
                    </li>
                  </ul>
                  <a href="#contact" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Book Repair</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle p-3 d-inline-block mb-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                    <i className="bi bi-thermometer-half text-info fs-3"></i>
                  </div>
                  <h3 className="h4 mb-3">Gas Refilling</h3>
                  <p className="mb-3">
                    Professional refrigerant gas refilling for all types of air conditioners.
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Leak detection</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Gas refilling</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Pressure testing</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Performance check</span>
                    </li>
                  </ul>
                  <a href="#contact" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Book Gas Refilling</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle p-3 d-inline-block mb-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                    <i className="bi bi-calendar-check text-info fs-3"></i>
                  </div>
                  <h3 className="h4 mb-3">Maintenance</h3>
                  <p className="mb-3">
                    Regular maintenance to keep your AC running efficiently and extend its lifespan.
                  </p>
                  <ul className="list-unstyled text-start mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Filter cleaning</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Coil cleaning</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>System inspection</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-info me-2"></i>
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                  <a href="#contact" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>Book Maintenance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="text-info fw-bold text-uppercase">Trusted Brands</h6>
            <h2 className="fw-bold mb-4">AC Brands We Service</h2>
            <div className="mx-auto mb-5" style={{ width: '80px', height: '3px', background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)' }}></div>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We repair and service all major air conditioner brands
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm p-3 text-center">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Image 
                    src="/images/brands/daikin.svg"
                    alt="Daikin"
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
                    src="/images/brands/samsung.svg"
                    alt="Samsung"
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
                    src="/images/brands/panasonic-logo.webp"
                    alt="Panasonic"
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
                    src="/images/brands/hitachi.svg"
                    alt="Hitachi"
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
                    src="/images/brands/Logo_of_the_Carrier_Corporation.svg.png"
                    alt="Carrier"
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

      {/* Contact Form */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <h6 className="text-info fw-bold text-uppercase">Book a Service</h6>
              <h2 className="display-5 fw-bold mb-4">Schedule Your AC Service Today</h2>
              <p className="lead mb-4">
                Fill out the form and our team will get back to you within 30 minutes to confirm your appointment.
              </p>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-shield-check fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>90-Day Service Warranty</h5>
                  <p className="mb-0">All our repairs come with a 90-day service warranty</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-tools fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>Expert Technicians</h5>
                  <p className="mb-0">Highly trained and certified professionals</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="rounded-circle p-3 me-3" style={{ background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(13, 202, 240, 0.2) 100%)' }}>
                  <i className="bi bi-currency-dollar fs-4" style={{ color: '#17a2b8' }}></i>
                </div>
                <div>
                  <h5>Transparent Pricing</h5>
                  <p className="mb-0">No hidden fees or surprise charges</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h3 className="card-title text-center mb-4">Book Your Service</h3>
                  <form id="ac-form" onSubmit={handleFormSubmit}>
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
                          <select className="form-select" id="service" name="service" required>
                            <option value="" disabled selected>Select Service</option>
                            <option value="AC Repair">AC Repair</option>
                            <option value="Gas Refilling">Gas Refilling</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Installation">Installation</option>
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
                          <i className="bi bi-calendar-check me-2"></i> Schedule Service
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