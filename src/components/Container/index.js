import React from 'react'
import {MainContainer} from "./ContainerElements";
import { useSelector, useDispatch } from "react-redux";
import { open_sidebar_mobile } from '../../actions';




export const Container = ({children}) => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.ui.sidebarWebOpen)

    const toggle = () => {
        dispatch(open_sidebar_mobile(true));
    }


    return (
        <MainContainer isOpen={isOpen} onClick={toggle} >
            {children}
        </MainContainer>
    )
}


