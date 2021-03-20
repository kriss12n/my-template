import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import { open_sidebar, open_sidebar_mobile } from "../../actions"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FiBell } from "react-icons/fi"
import { VscGear } from "react-icons/vsc"
import { RiShutDownLine } from "react-icons/ri";
import { DropdownMenu } from "reactstrap";
import { NavbarContainer, IconMobile, IconNavbar, RightMenu, IconMenu, DropdownToggle, Dropdown, AvatarNavbar,DropdownItem } from "./NavbarElements";


export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isOpen = useSelector(state => state.ui.sidebarWebOpen);
    const isOpenMobile = useSelector(state => state.ui.sidebarMobileOpen);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(open_sidebar(!isOpen));
    }

    const toggleMobile = () => {
        dispatch(open_sidebar_mobile(!isOpenMobile));
    }

    const toggleDropdown = () =>{
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <NavbarContainer isOpen={isOpen}>
            <IconMobile onClick={toggleMobile}>
                <AiOutlineMenu /> 
            </IconMobile>
            <IconMenu onClick={toggle}>
                <AiOutlineMenu/>
            </IconMenu>
            <RightMenu>
                <IconNavbar>
                    <FiBell />
                </IconNavbar>
                <IconNavbar>
                    <VscGear />
                </IconNavbar>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} >
                    <AvatarNavbar src="https://i.pinimg.com/originals/08/d0/62/08d0622e5a5bec5154a11cc2bef81b98.png" />
                    <DropdownToggle caret tag="nav">
                            Cristian Arias
                        </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem> <AiOutlineUser className="mr-2"/> Perfil</DropdownItem>
                        <DropdownItem> <RiShutDownLine className="mr-2" /> Cerrar sesion</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            </RightMenu>
        </NavbarContainer>
    )
}
