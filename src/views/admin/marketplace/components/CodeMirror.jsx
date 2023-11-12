import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import React, { useState, useEffect } from "react";


const CodeMirrow = ({codeText}) => {
    const [output, setOutput] = useState("");

    const runCode = () => {
        try {
            const result = window.python.evaluate(pythonCode);
            setOutput(result);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const pythonCode = `
def greet():
    print('Hello, World!')

greet()
  `;

    const extensions = [
        python({
            insertSpaces: true,
            tabSize: 4,
            indentOnInput: true,
        }),
    ];

    return (
        <div
            className="flex w-full flex-col px-[30px] py-[30px] md:px-[64px] md:py-[56px]">
            <div className="w-full">
                <CodeMirror
                    value={pythonCode}
                    height="200px"
                    theme={dracula}
                    extensions={extensions}
                    language={python}
                />

                <button onClick={runCode}>Run Code</button>

                <div>
                    <h3>Output:</h3>
                    <pre>{output}</pre>
                </div>
            </div>
        </div>
    );
};

export default CodeMirrow;
