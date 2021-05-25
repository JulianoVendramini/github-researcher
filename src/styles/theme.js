import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    fontColor: '#000',
    body: '#fff',
    border: '#000 solid 1px',
    card: '#f1f1f1',
}

export const darkTheme = {
    fontColor: '#c9d1d9',
    body: '#0d1117;',
    border: '#c9d1d9 solid 1px',
    card: '#161b22',
}

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }

    .container-card{
        border: ${props => props.theme.border};
    }
    
    .container-card{
        background-color: ${props => props.theme.card}
    }

    .container-card-intro{
        border-bottom: ${props => props.theme.border};
        border-top: ${props => props.theme.border};
    }

`