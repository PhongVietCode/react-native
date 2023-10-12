import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSelection from "../components/Cards/CardSelection";
import logo1 from "./../assets/bgs/flame_logo.jpg"
import logo2 from "./../assets/bgs/face_logo.png"

// Container
const HomeContainer = styled(Container)`
    background-color: ${colors.gray};
    width:100%;
    flex:1;
`;
// mainReturn
const Home :FunctionComponent = () => {
    const cardsData = [
        {
            id:1,
            accountNo: "1249874213",
            balance: 3921.31,
            alias:"Work Payment",
            logo:logo1,
        },
        {
            id:2,
            accountNo: "892710193",
            balance: 23132.31,
            alias:"Home Payment",
            logo:logo2,
        },
        {
            id:3,
            accountNo: "663121020",
            balance: 73431.31,
            alias:"Bank Payment",
            logo:logo1, 
        }, 
    ];
    return (
        <HomeContainer>
            <StatusBar style="dark"/>
        </HomeContainer>
    );
}
export default Home;