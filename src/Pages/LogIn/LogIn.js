import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';



const LogIn = () => {
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const { logIn } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogIn = data => {
        setLoginError("")
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                getJWT(user.email);
                navigate(from, { replace: true })


            })
            .catch(error => {

                setLoginError(error.message);
                console.log(loginError);
            })
    }

    const getJWT = email => {

        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.accessToken) {
                    localStorage.setItem('jwtToken', data.accessToken)
                    console.log('token save to localstorage');

                }
                else {
                    console.log('token no found');
                }
            })
    }




    return (
        <div className=' h-[800px] flex justify-center '>
            <div className=' w-96 p-7'>
                <h2 className=' text-3xl font-bold text-secondary text-center'>LogIn</h2>
                <form onSubmit={handleSubmit(handelLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"  {...register("email", { required: "Email Address is required" })} placeholder="email" />
                    </div>
                    {errors.email && <p className=' text-red-600'>{errors.email?.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "password must be 6 character" }
                            })}
                            placeholder="**********" />
                    </div>
                    {
                        loginError && <p className=' text-red-600'>{loginError}</p>
                    }
                    {errors.password && <p className=' text-red-600'>{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">Foreget password</span>
                    </label>
                    <input className='btn btn-accent w-full' value='LogIn' type="submit" />
                </form>
                <p>New to Doctors Portal <Link className=' text-secondary text-lg' to='/signup'> Create an account</Link></p>
                <div className="divider">or</div>
                <button className=' btn btn-outline w-full uppercase'>Continue with google</button>
            </div>
        </div>
    );
};

export default LogIn;