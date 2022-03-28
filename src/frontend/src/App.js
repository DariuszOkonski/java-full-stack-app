import { Button, Radio } from 'antd'
import './App.css';
import { useGetAllStudents } from "./hooks/useGetAllStudents";

function App() {
    const { data, isPending, error } = useGetAllStudents("api/v1/students");

    return (
        <div className="App">
            { error && <h1>{error}</h1>}
            { isPending && <h1>Loading...</h1> }
            { data && data.map(el => <h1 key={el.id}>{el.name}</h1>)}

        </div>
    );
}

export default App;