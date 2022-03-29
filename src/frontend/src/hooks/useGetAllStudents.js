import {useEffect, useState} from "react";
import fetch from "unfetch";

export const useGetAllStudents = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);
        setError(false);
        fetch(url)
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                throw new Error('no data from backend')
            })
            .then(data => {
                setData(data);
                setIsPending(false)
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
    },[])

    return { data, isPending }
}