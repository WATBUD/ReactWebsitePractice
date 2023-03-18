import React, { useState } from "react";
import axios from "axios";

// function removeDuplicates(arr) {
//   var aaa=new Set(arr);
//   console.log(aaa); // [1, 2, 3, 4, 5]

//   return Array.from(new Set(arr));
// }
// const arr = [1, 2, 3, 3, 4, 4, 5];
// console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]

function OpenAI() {
  const [prompt, setPrompt] = useState("");
  const [text, setText] = useState("");

  const generateText = async () => {
    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt,
      max_tokens: 500,
      n: 1,
      stop: "\n"
    }, {
      headers: {
        Authorization: `Bearer ${'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'}`,
        "Content-Type": "application/json"
      }
    });
    setText(response.data.choices[0].text);
  };

  return (
    <div>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateText}>Generate Text</button>
      <p>{text}</p>
    </div>
  );
}

export default OpenAI;
