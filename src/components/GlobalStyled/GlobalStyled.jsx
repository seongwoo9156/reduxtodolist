import { createGlobalStyle } from "styled-components";
import "../../font.css";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'NexonMaplestory';

    }
    body {
        background-color: #e6dfd3;
    }
`;

export default GlobalStyled;
