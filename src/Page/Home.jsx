import Axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";



const ScrollWrapper = styled.div`
    max-height: 120px;
    height: 120px;
    display: flex;
`


function Home() {

    const [items, setItems] = useState([]);

    function getItem() {
        Axios.get("https://api.hatchways.io/assessment/students")
            .then((res) => {
                console.log(res.data.students);
                setItems(res.data.students);
            });
    };


    return (
        <div>
            <button onClick={getItem}>Click Me</button>
            {items.map((item) => (
                <Card pic={item.pic} fName={item.firstName} lName={item.lastName} email={item.email} company={item.company} skill={item.skill} average={item.grades} />
            ))}
        </div>
    )



}



export default Home;
