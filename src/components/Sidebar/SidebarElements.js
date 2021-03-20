import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

export const SidebarContainer = styled.aside`
    background: #102A61;
    width: 260px;
    height: 100%;
    position: fixed;
    top:0;
    left:${({ isOpen }) => (isOpen ? '-260px' : '0')};
    right:0;
    display:flex;
    flex-direction:column;
    text-align:flex-start;
    overflow-y: auto;
    align-content:center;
    z-index:1;
    transition: all .5s ease;
    @media screen and (max-width: 768px){
        left:${({ isOpenMobile }) => (isOpenMobile ? '-260px' : '0')};
        position: absolute;
        transition: all .3s ease;
        z-index:999;
    }
`

export const SidebarLogo = styled.div`
    background-image: url(${logo});
    background-size:cover;
    width: 150px;
    height: 40px;
    align-self:center;
    margin-top: 10px;
    position:static;
`

export const SidebarMenu = styled.ul`
    
    width:100%;
    margin: 15px 0;
    
    
`

export const SidebarMenuTitle = styled.h5`

    color:#7890B5;
    font-weight:300;
    font-size:0.8rem;
    padding-left:20px;
    letter-spacing: 1.7px;
    text-transform:uppercase;
    
`

export const SidebarIcon = styled.div`
    color:#fff;
    font-size:20px;
    display:block;
    margin-left: 8px;
    margin-right: 8px;
`

export const SidebarTitle = styled.h5`
    font-size:0.8rem;
    font-weight:300;
    display:block;
    margin-bottom:2px;
    margin-left: 8px;
    margin-right: 8px;
`
export const SidebarLinks = styled(NavLink).attrs({ activeClassName })`
    color:#7890B5;
    display:flex;
    flex-direction:row;
    align-items:baseline;
    padding: 10px 20px;
    margin-top:5px;
    margin-bottom:5px;
    list-style:none;
    text-decoration:none;
    transition: all .2s ease;
        &.${activeClassName} {
            transition: all .2s ease-in-out;
            color:#fff !important;
            list-style:none !important;
            background: #153777;
            ${SidebarTitle} {
                font-size:0.9rem;
                transition: all .2s ease-in;
            }
            ${SidebarIcon} {
                font-size:20px;
                transition: all .2s ease-in;
            }
        }
        &:hover{
            color:#fff !important;
            text-decoration:none;
        }
    ` 

export const ContainerLogo = styled.div`

        display:flex;
        justify-content:center;

`
