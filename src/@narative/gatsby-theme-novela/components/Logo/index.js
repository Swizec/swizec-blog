import React from "react";
import logo from "./swizec-teller.jpg";
import styled from "styled-components";

const Img = styled.img`
    border-radius: 100%;
    width: 48px;
    height: 48px;
    margin-right: 12px;
`;

const Div = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
`;

export default function Logo() {
    return (
        <Div>
            <Img src={logo} alt="Swizec" />
            Swizec Teller &mdash; a geek with a hat
        </Div>
    );
}
