import React from 'react';

const Form = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form className='flex flex-col'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">First Name</span>
                    </label>
                    <input type='text' name='first name' placeholder='First Name' required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Last Name</span>
                    </label>
                    <input type='text' name='last name' placeholder='Last Name' required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type='email' name='email' placeholder='Email Adress' required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type='password' name='pasword' placeholder='Password' required />
                </div>
            </form>

        </div>
    );
};

export default Form;