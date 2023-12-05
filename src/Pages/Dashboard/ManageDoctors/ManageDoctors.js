import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwtToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    console.log(doctors)
    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('jwtToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.Console.log(data)
                refetch();
            })

    }

    return (
        <div>
            <h4 className=' text-3xl font-bold'>Mangage Doctors {doctors?.length}</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) =>
                                <tr key={doctor._id}>
                                    <th>{idx + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-warning">Delete</label>

                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
                {
                    deleteDoctor &&
                    <ConfirmationModal
                        title={`Are you sure want to delete doctor`}
                        message={`if you delete doctor ${deleteDoctor.name} it cannot be undone`}
                        cancel={setDeleteDoctor}
                        handleDeleteDoctor={handleDeleteDoctor}
                        doctor={deleteDoctor}
                    >


                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default ManageDoctors;