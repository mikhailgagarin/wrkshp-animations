import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

import { color } from "./theme";

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html {
      font-size: 16px;
    }

    html,
    body {
      height: 100%;
      width: 100%;
      overflow-x: hidden;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 16px;
      background: ${color("greyLight")};
    }

    #root {
      height: 100%;
    }

    a {
      color: ${color("primary")};

      &:hover {
        text-decoration: none;
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    input:invalid {
        box-shadow: none; // https://stackoverflow.com/q/5939341
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
`;
