import styled from "styled-components";

export const BtnWaves = styled.button`
    position: relative;
    background-color: #4CAF50;
    border: none;
    font-size: 28px;
    color: #FFFFFF;
    padding: 20px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow:hidden;
    cursor: pointer;
&:after {
    content: "";
    background: #eee;
    display: block;
    position: absolute;
    border-radius:50%;
    top: 50%;
    left: 50%;
    padding:50%;
    transform: translate(-50%,-50%) scale(1);
    opacity: 0;
    transition: all 0.8s
}

&:active:after {
    transform: translate(-50%,-50%) scale(0);
    opacity: 1;
    transition: 0s
}
`