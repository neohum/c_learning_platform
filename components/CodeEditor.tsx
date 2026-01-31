'use client';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@monaco-editor/react').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <div style={{ height: '500px', background: '#1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading editor...</div>
});

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
  readOnly?: boolean;
  highlights?: number[];
}

export const CodeEditor = ({
  code,
  onChange,
  readOnly = false,
  highlights: _highlights = [],
}: CodeEditorProps) => {
  return (
    <div className="code-editor-container">
      <Editor
        height="500px"
        defaultLanguage="c"
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
        }}
      />
      <style>{`
        .code-editor-container {
          border: 2px solid #333;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};
