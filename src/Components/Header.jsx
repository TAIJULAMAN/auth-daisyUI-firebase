import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                 <a className="btn btn-ghost normal-case text-xl">AMAN</a>
                 <Link className="btn btn-ghost normal-case text-xl" to='/'>HOME</Link>
                 <Link className="btn btn-ghost normal-case text-xl" to='/login'>LOGIN</Link>
                 <Link className="btn btn-ghost normal-case text-xl" to='/register'>REGISTER</Link>
            </div>
        </div>
    );
};

export default Header;