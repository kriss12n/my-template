import styled from "styled-components";

export const ContainerDashboard = styled.div`
    display:flex;
    flex-direction:row;
`
export const ContainerContent = styled.div`
    display:flex;
    position:relative;
    background-color: ${({ isOpenMobile }) => (isOpenMobile ? "rgba(201, 76, 76, 0.3)" : "")};
    flex-direction:column;
    width:${({ isOpen }) => (isOpen ? "100%" : "calc(100% - 260px)")};
    transition: all .5s ease;
`
