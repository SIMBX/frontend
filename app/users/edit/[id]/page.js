'use client';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params;

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    //const interval  = setInterval(getUsers, 1000);
    //return () => clearInterval(interval);
  }, [id]);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', // Make sure to include Content-Type header
      },
      body: JSON.stringify({ firstname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form {JSON.stringify(items)}
          </div>
          <div className="card-body">
            {items.map((item) => (
              <form className="row g-3" onSubmit={handleSubmit} key={item.id}> {/* Add key here */}
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">FirstName</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname || item.firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">LastName</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname || item.lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      value={username || item.username}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="basic-url" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                    <input
                      type="password"
                      className="form-control"
                      value={password || item.password}
                      onChange={(e) => setPassWord(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> Sign Up</button>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
