import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import './CustomField.css'


interface CustomFieldProps {
    required: boolean;
    dateType: boolean;
    message: string;
}

const CustomField: React.FC<CustomFieldProps> = ({required,dateType, message}) => {

    return (
        dateType ? <div className={"custom-field-date"}>
                <IonDatetimeButton  datetime="datetime"></IonDatetimeButton>

                <IonModal keepContentsMounted={true}>
                    <IonDatetime id="datetime"
                                 presentation="date"></IonDatetime>
                </IonModal>
            </div> :
        <input className="custom-field" placeholder={required ? message + "*" : message}/>
);
};

export default CustomField;
