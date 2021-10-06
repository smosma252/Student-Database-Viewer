import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";


const ProfileInfo = styled.div`
    background-color: white;
    display: flex;
    width: 85%;
    flex-direction: row;
    justify-content: center;
    border-bottom: lightgray;
    border-width: 1px;
    border-bottom-style: solid;
    padding-bottom: 2%;
`


const ProfileImageContainer = styled.div`
    display: flex;
    padding-top: 100px;
    padding-right: 40px;
`


const TextContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
`

const TextHeader = styled.h1`
    width: 125%;
`

const TextContent = styled.div`
    padding-left: 20px;
    flex-direction: column;
    display: flex;
`

const Information = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;

`

const ButtonTrigger = styled.button`
    display: flex;
    height:50px;
    width: 50px;
    font-size: 50px;
    color: grey;
    border-style: none;
    background-color: white;
`
const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


function calculateAverage(arrayInput) {
    let total = 0;
    arrayInput.forEach(num => {
        total += parseInt(num)
    })
    return parseFloat(total / arrayInput.length);
}


function Card(props) {

    const [isOpen, setisOpen] = useState(false);

    return (
        <ProfileInfo>

            <ProfileImageContainer>
                <Profile data={props.pic} />
            </ProfileImageContainer>

            <TextContainer>
                <TextHeader>{props.fName} {props.lName}</TextHeader>

                <TextContent>
                    <Information>Email: {props.email}</Information>
                    <Information>Company: {props.company}</Information>
                    <Information>Skill: {props.skill}</Information>
                    <Information>Average: {calculateAverage(props.average)}%</Information>
                    {isOpen && (props.average).map((number) => {
                        let count = 1;
                        let testValue = "Test " + count + ":  \t  " + number + "%";
                        return <Information>{testValue}</Information>
                    })}
                </TextContent>

            </TextContainer>
            <ButtonTrigger onClick={() => setisOpen(!isOpen)}>+</ButtonTrigger>
        </ProfileInfo>

    )
}

export default Card;
