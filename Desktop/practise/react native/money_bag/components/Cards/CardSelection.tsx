import React, { FunctionComponent } from "react"
import styled from "styled-components/native"

const CardList = styled.FlatList`
    width:100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
`;
import { CardSelectionProps } from "./types";
import CardItem from "./CardItem";

const CardSelection: FunctionComponent<CardSelectionProps> = (props) =>{
    return (
        <CardList
            data={props.data}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: "center",
            }}
            keyExtractor={({id}:any) => id.toString()}
            renderItem={CardItem}
        />
    );
}
export default CardSelection;