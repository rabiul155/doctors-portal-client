import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostingKey = process.env.REACT_APP_imgbb_api_key;

    const navigate = useNavigate();

    const { data: Specialities, isLoading } = useQuery({
        queryKey: ['specility'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality')
            const data = await res.json()
            return data;
        }
    })
    const handleAddDoctor = data => {

        const image = data.photo[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url
                    }
                    console.log(doctor)

                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('speciality added ')
                            navigate('/dashbord/manageDoctors')
                        })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' w-96'>


            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <h2 className=' text-4xl font-bold '>Add a doctor</h2>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name",
                            { required: "Name is required" })}
                        className="input input-bordered w-full " placeholder="name" />
                    {errors.name && <p className=' text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register("email",
                            { required: "Email Address is required" })}
                        className="input input-bordered w-full " placeholder="email" />
                    {errors.email && <p className=' text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select
                        {...register('speciality')}
                        className="select select-bordered w-full ">

                        {
                            Specialities.map(speciality =>

                                <option
                                    key={speciality._id}
                                >{speciality.name}</option>

                            )
                        }

                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("photo",
                            { required: "Photo is required" })}
                        className="input input-bordered w-full " placeholder="photo" />
                    {errors.photo && <p className=' text-red-600'>{errors.photo?.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-6' value='SignUp' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;