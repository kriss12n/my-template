import React from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import {Container} from "../Container";
import { useSelector  } from "react-redux";
import { ContainerDashboard, ContainerContent} from "./DashboardElements";

export const Dashboard = ({children}) => {

    const isOpen = useSelector(state => state.ui.sidebarWebOpen)



    return (
        <ContainerDashboard>
            <Sidebar />
                <ContainerContent isOpen={isOpen}>
                    <Navbar />
                        <Container >
                            {children}
                        </Container>
                </ContainerContent>
        </ContainerDashboard>
    )   
}