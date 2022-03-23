import './App.css';
import { Button, Radio } from 'antd';
import {useEffect} from "react";
import fetch from "unfetch";

const getAllStudentsLocal = () => {
    fetch('api/v1/students')
        .then(res => {
            if(res.ok) {
                return res.json()
            }

            throw new Error("something went wrong")
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err.message)
        })
}

function App() {
    useEffect(() => {
        getAllStudentsLocal();
    },[])

    return (
        <div className="App">
            <Button type='primary'>Hello</Button>
            <br/>

            <Radio.Group value='large'>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
        </div>
    );
}

export default App;
