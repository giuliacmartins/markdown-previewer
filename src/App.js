import React, { useState } from "react";
import "./styles.css";
import { marked } from "marked";

export default function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

  ## This is a sub-heading...
  
  ### And here's some other cool stuff:
  
  Here's a [link](http://giuliamartins.com/).
  
  \`Inline code\`
  
  \`\`\`
  // A code block
  function greet() {
    console.log("Hello, world!");
  }
  \`\`\`
  
  - List item 1
  - List item 2
  - List item 3
  
  > | A blockquote example
  
  ### An Image
  ![An image](https://i.quotev.com/vgq3olvxqfvq.jpg)
  
  **Bold text**
  `);

  function handleChange(event) {
    const newValue = event.target.value;
    setMarkdown(newValue);
  }

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="container">
      <div className="editor-wrap">
        <div className="toolbar">Editor</div>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          spellCheck="false"
        ></textarea>
      </div>
      <div className="preview-wrap">
        <div className="toolbar">Previewer</div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        ></div>
      </div>
    </div>
  );
}
