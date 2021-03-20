import React from 'react'
import { AppRouter } from './router/AppRouter'
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const WorkamApp = () => {
    return (
        <Provider store={store}>
                <AppRouter />
        </Provider>
    )
}
