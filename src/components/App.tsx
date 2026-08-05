import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import ExecutiveView from './ExecutiveView/ExecutiveView';
import TerminalView from './TerminalView/TerminalView';

export default function App() {
  const [mode, setMode] = useState<'executive' | 'terminal'>('executive');

  return (
    <>
      <Navbar mode={mode} onModeChange={setMode} />
      {mode === 'executive' ? <ExecutiveView /> : <TerminalView />}
    </>
  );
}
