import { Button, Radio } from 'antd'
import './App.css';
import { useGetAllStudents } from "./hooks/useGetAllStudents";
import {useEffect, useState} from "react";

function App() {
    const [students, setStudents] = useState([])

    const { data, isPending, error } = useGetAllStudents("api/v1/students");

    useEffect(() => {
        if(data) {
            setStudents(data);
        }
    },[data])

    if(students.length <= 0) {
        return "no data"
    }

    return (
        <div className="App">
            {
                students.map((student, index) => {
                    return <p key={index}>{student.id} {student.name}</p>
                })
            }
        </div>
    )
}

export default App;