import { useState } from "react";
import { IonContent, IonInput, IonItem, IonList } from "@ionic/react";
import Navbar from "../components/Navbar";

const HomePage = () => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();

    const validateEmail = (email: string) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;

        setIsValid(undefined);

        if (value === "") return;

        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };
    return (
        <>
            <Navbar />
            <IonContent fullscreen={true} className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonInput
                            className={`${isValid && "ion-valid"} ${
                                isValid === false && "ion-invalid"
                            } ${isTouched && "ion-touched"}`}
                            type="email"
                            fill="solid"
                            label="Email"
                            labelPlacement="floating"
                            helperText="Enter a valid email"
                            errorText="Invalid email"
                            onIonInput={(event) => validate(event)}
                            onIonBlur={() => markTouched()}></IonInput>
                    </IonItem>
                </IonList>
            </IonContent>
        </>
    );
};

export default HomePage;
