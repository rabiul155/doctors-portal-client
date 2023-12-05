import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async function () {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json();
            return data;
        }
    })

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('jwtToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                toast.success('successfully make admin')
                refetch()

                console.log(data)
            })

    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <tr>
                                    {
                                        user?.role !== 'admin' &&
                                        <button onClick={() => handleUpdate(user._id)} className=' btn btn-xs btn-primary'>Make admin</button>
                                    }
                                </tr>

                                <td><button className=' btn btn-xs btn-warning'>Delete</button></td>


                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;