import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
// Container
const HomeContainer = styled(Container)`
    background-color: ${colors.gray};
    width:100%;
    flex:1;
`;
// mainReturn
const Home :FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark"/>
        </HomeContainer>
    );
}
export default Home;