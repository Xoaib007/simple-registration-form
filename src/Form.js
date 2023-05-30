import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Form = () => {

    const [error, setError] = useState(null);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length <= 6) {
            setError('password must be upto 6 charecter');
            return;
        }
        if (password !== confirm) {
            setError('password didnt match ');
            return;
        }

        const user = { firstName, lastName, email, password };
        fetch('https://server-tawny-psi.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(() => {
            toast.success('Successfully signed up')
        })

        
    }

    return (
        <div className='lg:w-1/2 w-3/4 mx-auto py-20'>
            <h1 className="text-5xl font-semibold text-white text-center mx-auto mb-10 px-10 border-x-8 w-fit border-orange-500">Sign Up</h1>
            <form  onSubmit={handleSignUp} className='flex flex-col'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">First Name</span>
                    </label>
                    <input type='text' name='firstName' placeholder='First Name' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Last Name</span>
                    </label>
                    <input type='text' name='lastName' placeholder='Last Name' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type='email' name='email' placeholder='Email Adress' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type='password' name='password' placeholder='Password' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Retype Password</span>
                    </label>
                    <input type='password' name='confirm' placeholder='Confirm Password' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>
                <p className='text-orange-600 font-bold'>{error}</p>

                <div className="form-control mt-3">
                    <input value='Sign Up' type='submit' className="btn bg-orange-500 text-white rounded-none hover:bg-white hover:text-black"/>
                </div>
            </form>
            

        </div>
    );
};

export default Form;