import { styled, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #212529;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #212529;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`

export default GlobalStyle