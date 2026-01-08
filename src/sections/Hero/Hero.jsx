import './Hero.css';
import paw from '/paw.png';
import Img1 from '/img1.jpg';
import Img2 from '/Naruto.jpg';

const Hero = () => {
  return (
    <>
      <section className="hero--section">
        <div className="hero-container">
          <div className="hero-data">
            <a href="/" className="hero-subs">
              subscribe
              <span>
                <i className="ri-arrow-down-long-line"></i>
                <i className="ri-arrow-down-long-line"></i>
              </span>
            </a>
            <h1 className="hero-heading">
              Pet care
              <span>
                <img src={paw} alt="paw-img" />
              </span>
              services & products.
            </h1>
            <p className="hero-info">your trusted partner in pet care</p>
          </div>
          <div className="hero-center">
            <div className="pet-img">
              <img src={Img1} alt="pet care" />
            </div>

            <div className="hero-cards">
              <div className="question-card">
                <div className="question-header">
                  <img src={Img2} alt="profile" className="profile-img" />
                  <i className="ri-share-fill"></i>
                </div>

                <h5>
                  Have a question ? <br />
                  <span>contact us</span>
                </h5>
              </div>

              <div className="profile-card">
                <div className="profile-info">
                  <h5 className="profile-name">
                    Leo Smith <br />
                    <span>pet owner</span>
                  </h5>
                  <h5 className="profile-rating">5/5</h5>
                </div>

                <div className="profile-data">
                  <p>Our dog is happy just as we are!</p>
                  <i className="ri-double-quotes-r"></i>
                </div>
              </div>

              <a href="/" className="explore-btn">
                explore
                <i className="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
