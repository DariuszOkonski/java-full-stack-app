import { Button, Radio } from 'antd'
import './App.css';
import { useGetAllStudents } from "./hooks/useGetAllStudents";
import {useEffect, useState} from "react";

function App() {
    const [students, setStudents] = useState([])

    const { data, isPending, error } = useGetAllStudents("api/v1/students");

    useEffect(() => {
        setStudents(data);
    },[data])

    return (
        <div className="App">
            { error && <h1>{error}</h1>}
            { isPending && <h1>Loading...</h1> }
            { students && students.map(el => <h1 key={el.id}>{el.name}</h1>)}
        </div>
    );
}

export default App;