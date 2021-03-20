import React from "react";
import {useSelector} from "react-redux"

import { SidebarContainer, SidebarMenuTitle,SidebarMenu ,SidebarLinks,SidebarIcon,SidebarTitle,SidebarLogo,ContainerLogo } from "./SidebarElements";
import { Navbar } from "../Navbar";

import { BiHomeAlt, BiCart } from "react-icons/bi";
import { AiOutlinePieChart, AiOutlineFileDone } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { BsTag, BsCalendar, BsLock, BsBarChart } from "react-icons/bs";
import { FiBox } from "react-icons/fi";


export const Sidebar = () => {

    const isOpen = useSelector(state => state.ui.sidebarWebOpen)
    const isOpenMobile = useSelector(state => state.ui.sidebarMobileOpen);

    return(
        <>
            <SidebarContainer isOpen={isOpen} isOpenMobile={isOpenMobile} >
            <ContainerLogo>
                    <SidebarLogo />
            </ContainerLogo>
            <SidebarMenu>
                <SidebarLinks to="dashboard" >
                    <SidebarIcon> <BiHomeAlt/> </SidebarIcon>
                    <SidebarTitle>Dashboard</SidebarTitle>    
                </SidebarLinks>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarMenuTitle>MANAGENT</SidebarMenuTitle>
                <SidebarLinks to="analythics" >
                    <SidebarIcon> <AiOutlinePieChart /> </SidebarIcon>
                    <SidebarTitle>Analythics</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="customers" >
                    <SidebarIcon> <IoPeopleOutline /> </SidebarIcon>
                    <SidebarTitle>Customers</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="orders" >
                    <SidebarIcon> <BiCart /> </SidebarIcon>
                    <SidebarTitle>Orders</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="products" >
                    <SidebarIcon> <BsTag /> </SidebarIcon>
                    <SidebarTitle>Products</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="invoices" >
                    <SidebarIcon> <AiOutlineFileDone /> </SidebarIcon>
                    <SidebarTitle>Invoices</SidebarTitle>
                </SidebarLinks>
            </SidebarMenu>
            
            <SidebarMenu>
                <SidebarMenuTitle>PAGES</SidebarMenuTitle>
                <SidebarLinks to="authentication" >
                    <SidebarIcon> <BsLock /> </SidebarIcon>
                    <SidebarTitle>Authentication</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="calendar" >
                    <SidebarIcon> <BsCalendar /> </SidebarIcon>
                    <SidebarTitle>Calendar</SidebarTitle>
                </SidebarLinks>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarMenuTitle>components</SidebarMenuTitle>
                <SidebarLinks to="charts" >
                    <SidebarIcon> <BsBarChart /> </SidebarIcon>
                    <SidebarTitle>Charts</SidebarTitle>
                </SidebarLinks>
                <SidebarLinks to="ui" >
                    <SidebarIcon> <FiBox /> </SidebarIcon>
                    <SidebarTitle>Ui elements</SidebarTitle>
                </SidebarLinks>
            </SidebarMenu>
        </SidebarContainer>
        </>
    );
}