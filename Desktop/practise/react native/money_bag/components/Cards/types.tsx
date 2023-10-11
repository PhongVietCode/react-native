import { ImageSourcePropType } from "react-native";

export interface CardProps{
    id:number;
    account:string;
    balance:number;
    alias?: string;
    logo: ImageSourcePropType
}

export interface CardSelectionProps{
    data: Array<CardProps>;
    
}