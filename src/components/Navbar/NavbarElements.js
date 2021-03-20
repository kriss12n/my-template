import styled from "styled-components";
import { DropdownToggle as DropdownToggleR, Dropdown as DropdownR, DropdownItem as DropdownItemR} from "reactstrap";
import {Avatar} from "@material-ui/core";

export const NavbarContainer = styled.div`
    background:#fff;
    width:100%;
    height:65px; 
    position:relative;
    box-shadow: 0px 5px 5px #aaaaaa;
    display:flex;
    padding:20px;
    margin-left:${({ isOpen }) => (isOpen ? "0" : "260px")};
    transition: all .5s ease;
    align-items:center;
    justify-content:space-between;
    @media (max-width: 768px){
        margin-left:0;
        position: fixed;
        transition: all .3s ease;
        z-index:1;
    }
`
export const IconMobile = styled.div`

    display:none;
    font-size:22px;
    @media screen and (max-width: 768px){
        display:block;
        cursor:pointer;
    }
`
export const IconMenu = styled.div`
    display:block;
    font-size:22px;
    cursor:pointer;
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const IconNavbar = styled.div`
    display:block;
    font-size:22px;
    cursor:pointer;
`

export const RightMenu = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width:300px;

`

export const DropdownToggle = styled(DropdownToggleR)`
    background:#fff;
    color:#000;
    border:none;
    font-size:16px;
    &:hover{
        background:#fff;
        color:#000;
    }
    &:show{
        background:#fff;
    color:#000;
    border:none;
    }
`

export const Dropdown = styled(DropdownR)`
    display:flex;
    flex-direction:row;
    align-items:center;
`
export const AvatarNavbar = styled(Avatar)`
    width:50px;
    height:50px;
    margin-left:5px;
    margin-right:8px;
`

export const DropdownItem = styled(DropdownItemR)`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    &:hover{
        color:blue;
        background:none;
    }
`