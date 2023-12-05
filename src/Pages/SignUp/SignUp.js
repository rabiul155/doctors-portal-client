
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken'


const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('create user successfully')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(user.displayName, user.email)

                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.error('create user error ', error)
            })


    }

    const saveUser = (name, email) => {
        const user = {
            name,
            email
        }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getJWT(email)
                navigate('/')

            })
    }

    const getJWT = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('jwtToken', data.accessToken)
                    console.log('token save on localstorage');
                }
            })
    }


    return (
        <div className=' h-[800px] flex justify-center '>
            <div className=' w-96 p-7'>
                <h2 className=' text-3xl font-bold text-secondary text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" placeholder="name" />
                        {errors.name && <p className=' text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" placeholder="email" />
                        {errors.email && <p className=' text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: " password must be 6 character" },
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: ' use a strong password' }

                                })}
                            className="input input-bordered w-full max-w-xs" placeholder="**********" />
                        {errors.password && <p className=' text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-6' value='SignUp' type="submit" />
                </form>
                <p>Already have an account <Link className=' text-secondary text-lg' to='/login'>logIn</Link></p>
                <div className="divider">or</div>
                <button className=' btn btn-outline w-full uppercase'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;