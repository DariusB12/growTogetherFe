import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import CustomButton from "../components/CustomButton/CustomButton";
import LeftBackgroundBlob from "../components/LeftBackgroundBlob/LeftBackgroundBlob";
import CustomField from "../components/CustomField/CustomField";

const Home: React.FC = () => {
  return (
    <div className="Home">
        <div className={"home-center-container"}>
            <div className={"home-title"}>
                Grow Together
                <CustomField required={true} dateType={false} message={"username"}></CustomField>
                <CustomField required={true} dateType={true} message={"username"}></CustomField>
            </div>
            <div className={"home-buttons"}>
                <CustomButton hasBorder={true} text={"Log In"} onPress={()=>{}}></CustomButton>
                <CustomButton hasBorder={true} text={"Sign Up"} onPress={()=>{}}></CustomButton>
            </div>
        </div>

    </div>
  );
};

export default Home;
