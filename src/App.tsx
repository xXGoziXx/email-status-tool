import React from "react";
import { Redirect, Route } from "react-router";
import "./App.css";
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";

import { archive, mail, library, search } from "ionicons/icons";

import HomePage from "./pages/HomePage";
import { IonReactRouter } from "@ionic/react-router";

const App: React.FC = () => {


    const routes = [
        {
            path: "/home",
            component: HomePage,
        },
        // {
        //     path: "/radio",
        //     component: RadioPage,
        // },
        // {
        //     path: "/library",
        //     component: LibraryPage,
        // },
        // {
        //     path: "/search",
        //     component: SearchPage,
        // }
    ];


    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/home" />
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={true}
                        />
                    ))}
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon icon={archive} />
                        <IonLabel>Insert Email</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="radio" href="/radio">
                        <IonIcon icon={mail} />
                        <IonLabel>Email Viewer</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="library" href="/library">
                        <IonIcon icon={library} />
                        <IonLabel>Library</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="search" href="/search">
                        <IonIcon icon={search} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default App;
