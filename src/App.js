import Axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";



const ScrollWrapper = styled.div`
border-radius: 15px;
    margin-top: 5%;
    margin-left: 20%;
    overflow-y: auto;
    max-height: 700px;
`


const Filter = styled.input`
    display: flex;
    width: 100%;
    margin-left: 10px;
    border-style: none;
    outline: none;
    font-size: 20px;
`

const FilterWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
    justify-content: left;
    align-items: left;
    padding-top: 2%;
    background-color: white;
    height: 50px;
    width: 85%;
`

const ContentBox = styled.div`
    background-color: white;
    border-radius: 15px;
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    min-height: 700px;
`

const APIURL = "";

function App() {

    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    function getItem() {
        Axios.get(APIURL)
            .then((res) => {
                console.log(res.data.students);
                setItems(res.data.students);
            });
    };


    return (
        <ContentBox>
            <ScrollWrapper>
                {getItem()}
                <FilterWrapper>
                    <Filter
                        placeholder="Search by name"
                        type="text"
                        onChange={(event) => {
                            setSearchItem(event.target.value);
                        }}>
                    </Filter>
                </FilterWrapper>

                {items.filter((val) => {
                    if (searchItem === "") {
                        return val
                    } else if (val.firstName.toLowerCase().includes(searchItem.toLowerCase()) || val.lastName.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val
                    }
                }).map((item) => (
                    <Card pic={item.pic} fName={item.firstName} lName={item.lastName} email={item.email} company={item.company} skill={item.skill} average={item.grades} />
                ))}
            </ScrollWrapper>
        </ContentBox>
    )
}


export default App;