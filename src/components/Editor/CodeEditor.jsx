import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './CodeEditor.css'; // Import the CSS we just created

// Boilerplate code for different languages
const BOILERPLATES = {
  java: `public class Main {
    public static void main(String[] args) {
        // Write your logic here
        System.out.println("Hello, World!");
    }
}`,
  python: `def solve():
    # Write your logic here
    print("Hello, World!")

if __name__ == "__main__":
    solve()`,
  javascript: `function solve() {
    // Write your logic here
    console.log("Hello, World!");
}

solve();`
};

const CodeEditor = () => {
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState(BOILERPLATES['java']);
  const [output, setOutput] = useState('// Run code to see output here...');

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(BOILERPLATES[newLang]); // Reset to boilerplate when language changes
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    // In a real app, you would send 'code' to your backend or an API here.
    setOutput("Executing code...\n\nCompiled successfully.\nOutput:\nHello, World!");
  };

  return (
    <div className="assessment-container">
      
      {/* Left Pane: Problem Description */}
      <div className="problem-pane">
        <h2>Problem 1: Two Sum</h2>
        <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
        <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
        <br/>
        <h4>Example 1:</h4>
        <pre style={{ background: '#1e1e1e', padding: '10px', borderRadius: '5px' }}>
          Input: nums = [2,7,11,15], target = 9<br/>
          Output: [0,1]
        </pre>
      </div>

      {/* Right Pane: Editor & Console */}
      <div className="editor-pane">
        
        {/* Editor Toolbar */}
        <div className="editor-toolbar">
          <select 
            className="language-select" 
            value={language} 
            onChange={handleLanguageChange}
          >
            <option value="java">Java 17</option>
            <option value="python">Python 3</option>
            <option value="javascript">Node.js</option>
          </select>
          <button className="run-btn" onClick={handleRunCode}>Run Code</button>
        </div>

        {/* The Monaco Editor */}
        <Editor
          height="calc(100vh - 250px)" /* Leaves room for toolbar and console */
          theme="vs-dark"
          language={language}
          value={code}
          onChange={handleEditorChange}
          options={{
            fontSize: 15,
            minimap: { enabled: false },
            wordWrap: "on",
            scrollBeyondLastLine: false,
          }}
        />

        {/* Output Console */}
        <div className="console-pane">
          <h4 style={{ margin: '0 0 10px 0', color: '#ccc' }}>Console</h4>
          <div className="console-output">
            {output}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CodeEditor;