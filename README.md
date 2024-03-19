# Run with Create React App
npm start

## Important Fact
`Make sure that this combination of dependecies is maintained`

"react": "^17.0.0",\
"react-dom": "^17.0.0",\
"react-qr-reader": "^2.2.1",

`Since here React-DOM V17 is being used instead of the latest version like v18.2 or so, one should make the changes in index.js too.`

### index.js
---------------------------------------------
`import React from "react";`\
`import { render } from "react-dom";`\
`import "./index.css";`\
`import App from "./App";`\
`const root = document.getElementById("root");`\
`render(<App />, root);`

