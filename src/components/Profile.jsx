import React from "react";
import styled from "styled-components";


const ProfileImage = styled.img`
    border-radius: 80%;
    border-style: solid;
    border-width: thin;
    border-color: grey;
    height: 100px;
    
`

function Profile(props) {
    return (
        <ProfileImage alt="Profile" src={props.data} />
    )
}
export default Profile;