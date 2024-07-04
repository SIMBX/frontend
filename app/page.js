import Navbar from '../app/component/navbar'; // Adjust the path according to your project structure

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div id="carouselExample" className="carousel slide p-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/3.png" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="/img/4.png" className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/5.png" className="custom-img" alt="Card Image 5" />
              <div className="card-body text-center">
                <h5 className="card-title">การตูนย์แนะนำ</h5>
                <p className="card-text">Alice in WondeRland 2015</p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="img/6.png" className="custom-img" alt="Card Image 6" />
              <div className="card-body text-center">
                <h5 className="card-title">การตูนย์แนะนำ</h5>
                <p className="card-text">Alice in WondeRland 2022</p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/4.png" className="custom-img" alt="Card Image 7" />
              <div className="card-body text-center">
                <h5 className="card-title">การตูนย์แนะนำ</h5>
                <p className="card-text">The Lion King</p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="py-5 container">
      <div className="row">
        <div className="col-6 col-md-3 mb-3">
          <h5>Section 1</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h5>Section 2</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Support</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h5>Section 3</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Partners</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Investors</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-3">
          <h5>Newsletter</h5>
          <p>Stay updated with our latest news and updates.</p>
          <form>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input type="email" className="form-control" placeholder="Your Email Address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
