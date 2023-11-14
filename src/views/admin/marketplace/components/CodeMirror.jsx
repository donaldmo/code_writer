import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import React, { useState, useEffect } from "react";
import axios from "axios";
import sampleText from '../../../../code/greet.txt'

const CodeMirrow = ({ codeText }) => {
    const [output, setOutput] = useState("");
    const [code, setCode] = useState('');

    useEffect(() => {
      fetch(sampleText)
        .then(response => response.text())
        .then(data => setCode(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const extensions = [
        python({
            insertSpaces: true,
            tabSize: 4,
            indentOnInput: true,
            lineNumbers: true
        }),
    ];

    const runPythonCode = async () => {
        try {
            const endPoint = 'http://localhost:5001/run-python'

            const response = await axios.post(endPoint, { code })
            setOutput(response.data.output);
        } catch (error) {
            console.error('Error executing Python code:', error)
            setOutput('Error executing Python code')
        }
    };

    return (
        <div
            className="flex w-full flex-col px-[30px] py-[30px] md:px-[64px] md:py-[56px]">
            <div className="w-full">
                <CodeMirror
                    value={code}
                    height="200px"
                    theme={dracula}
                    extensions={extensions}
                    language={python}
                    onBeforeChange={(editor, data, value) => setCode(value)}
                />

                <button onClick={runPythonCode}>Run Python Code</button>

                <div style={{ width: '100%' }}>
                    <h2>Output:</h2>
                    <textarea
                        value={output}
                        rows={10}
                        cols={50}
                        readOnly
                        style={{ width: '100%', fontFamily: 'monospace' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CodeMirrow;
