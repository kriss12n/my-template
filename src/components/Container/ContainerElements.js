import styled from "styled-components";

export const MainContainer = styled.div`
    width:100%;
    height:100%;
    padding:20px;
    margin-top:75px;
    position:fixed;
    margin-left:${({isOpen}) => (isOpen ? "0" : "260px")};
    transition: all .5s ease;
    @media (max-width: 768px){
        margin-left:0;
        position: fixed;
        transition: all .3s ease;
    }
`