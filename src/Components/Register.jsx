import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name,email,password);
    }

    return (

<div>
          <h1>please register here</h1>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input required type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>


            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>


            <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  required type="password"  name='password' placeholder="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>


            <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
            </div>
      </form>

      <Link to="/login">
            <a href="#" className="label-text-alt link link-hover">already have an account?</a>
          </Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;