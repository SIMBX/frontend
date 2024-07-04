import Navber from "../component/navbar.js"

export default function Home() {
  return (

    <>
      <Navber /> 
      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src="img/4.png" alt="About Us Image" /></div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="text-muted"></span>
                <h2 className="display-5 fw-bold">เกี่ยวกับพวกเรา</h2>
                <p className="lead">เว็บเราเป็นเว็บที่ใช้ดูการตูนย์แบบถูกลิขสิทธิ์

</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </>

  );
}