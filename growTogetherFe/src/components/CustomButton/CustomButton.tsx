import React from 'react';
import {IonSpinner} from '@ionic/react';
import './CustomButton.css'

interface CustomButtonProps {
    hasBorder: boolean;
    text: string;
    onPress: () => void;
    borderSize?: number;
    borderRadius?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({hasBorder,text,onPress,borderSize,borderRadius}) => {

    const buttonStyle = {
        border: hasBorder ? `${borderSize || '2'}px solid black` : "none",
        borderRadius: borderRadius ? `${borderRadius}px` : '100px',
    };
    return (
        <button className="custom-button" onClick={onPress} style={buttonStyle}>
            {text}
        </button>
    );
};

export default CustomButton;
