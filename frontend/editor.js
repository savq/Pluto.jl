import { html, render } from "./imports/Preact.js"
import "./common/NodejsCompatibilityPolyfill.js"
// asdfasdf asdfasd
import { Editor } from "./components/Editor.js"

// it's like a Rube Goldberg machine
render(html`<${Editor} />`, document.body)
