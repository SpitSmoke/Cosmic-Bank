import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @keyframes cosmic {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
    }

    body {
        display: flex
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        background: radial-gradient(circle, #FF69B4, #6A0572, #1B003A);
        background-size: 400% 400%; 
        animation: cosmic 10s ease infinite;
        background-attachment: fixed; 
        color: #333;
        overflow-x: hidden;
    }

    main {
    margin-top: 180px;
    margin-bottom:80px;
    }
`