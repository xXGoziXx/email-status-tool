import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonIcon,
    IonBackButton,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { personCircle } from "ionicons/icons";
import { toTitleCase } from "../helpers/utils";

const Navbar: React.FC = () => {
    const [path, setPath] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname.split("/")[1]);
        console.log(location.pathname.split("/")[1]); // This will log the current path.
    }, [location]);

    return (
        <IonHeader translucent={true}>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>{toTitleCase(path)}</IonTitle>
                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default Navbar;
