import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
html {
    font-size: 10px;
    
    *{
        box-sizing: border-box;
    }
        
    body{
        font-style : normal;
        font-family: 'Noto Sans KR', sans-serif;
    }

    button {
        cursor : pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, textarea, button {
        appearance: none;
        border-radius: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
    }

    input:focus {
        outline : none;
    }

    input[type="radio"] {
        appearance: auto;
    }

    textarea {
        resize: none;
    }

    .no-drag {
        -ms-user-select: none; 
        -moz-user-select: -moz-none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        user-select: none;
    };
}
`;

export default GlobalStyles;
