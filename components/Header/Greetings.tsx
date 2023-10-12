import React, { FunctionComponent } from "react"
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native"

import RegularText from "../texts/RegularText";
import SmalleText from "../texts/SmallText";
import { colors } from "../colors";
interface GreetingsProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}
const StyleView = styled.View`
    flex-direction:column;
    flex: 1;
    justify-content:center;
`;
const Greetings: FunctionComponent<GreetingsProps> = (props) => {
    return (
        <StyleView>
            <RegularText 
                textStyles={[
                    {
                        color: colors.primary,
                        fontSize: 22
                    },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmalleText textStyles={[
                {
                    color: colors.gray,
                },
                props.subTextStyles,
            ]}>{props.subText}</SmalleText>
        </StyleView>
    );
}
export default Greetings;