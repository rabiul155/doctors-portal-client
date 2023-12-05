import { useEffect } from "react"

const useToken = email => {

    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('jwtToken', data.accessToken)
                }
            })

    }, [email])



}

export default useToken;