import React from 'react';

const Form = () => {
    return (
        <div className='lg:w-1/2 w-3/4 mx-auto py-40'>
            <h1 className="text-5xl font-semibold text-white text-center mx-auto mb-10 px-10 border-x-8 w-fit border-orange-500">Sign Up</h1>
            <form className='flex flex-col'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">First Name</span>
                    </label>
                    <input type='text' name='first name' placeholder='First Name' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Last Name</span>
                    </label>
                    <input type='text' name='last name' placeholder='Last Name' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
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
                    <input type='password' name='pasword' placeholder='Password' className="input input-bordered bg-black border-orange-500 text-[#f9f4f4]" required />
                </div>

                <div className="form-control mt-3">
                    <button type='submit' className="btn bg-orange-500 text-white rounded-none hover:bg-white hover:text-black">Sign Up</button>
                </div>
            </form>
            

        </div>
    );
};

export default Form;