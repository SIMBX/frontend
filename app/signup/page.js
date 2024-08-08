'use client';
import { useState } from 'react';
import Link from "next/link";

export default function Page() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/" class="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link href="/service" class="nav-link px-2 text-white">Service</Link></li>
          <li><Link href="/contact" class="nav-link px-2 text-white">Contact</Link></li>
          <li><Link href="/about" class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </input>
        </form>

        <div class="text-end">
        <Link href="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></Link>
        <Link href="/signup"><button type="button" class="btn btn-warning">Sign-up</button></Link>
        </div>
      </div>
    </div>
  </header>
  
    <br /><br /><br />
    <div className="container">
    <div class="card">
  <div class="card-header bg-success text-white">
    SignUp Form
  </div>
  <div class="card-body">

  <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label for="basic-url" className="form-label">FirstName</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
      <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
    </div>
  </div>
  <div className="col-md-6">
  <label for="basic-url" className="form-label">LastName</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
      <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
    </div>
  </div>
  <div className="col-md-6">
    <label for="basic-url" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
      <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
    </div>
  </div>
  <div className="col-md-6">
  <label for="basic-url" className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
      <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-success"><i class="bi bi-box-arrow-right"></i> Sign Up</button>
  </div>
</form>
</div>
</div>

</div>
    </>
  );
}