const GlobalStyle = () => {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */

      /* Works on Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: blue orange;
      }

      /* Works on Chrome */
      *::-webkit-scrollbar {
        width: 12px;
      }
      *::-webkit-scrollbar-track {
        background: grey;
      }
      *::-webkit-scrollbar-thumb {
        background-color: black;
        border: 3px solid grey;
      }
    `}</style>
  );
};

export default GlobalStyle;
