import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from 'react';
import { runCommand } from '../../data/terminalCommands';
import { profile } from '../../data/profileData';
import styles from './TerminalView.module.css';

const WELCOME = `Welcome to ${profile.name}'s terminal.\nType 'help' to see available commands.`;

interface HistoryItem {
  type: 'command' | 'output';
  text?: string;
}

export default function TerminalView() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: WELCOME },
  ]);
  const [input, setInput] = useState<string>('');
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState<number>(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function focusInput() {
    inputRef.current?.focus();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input;
    const result = runCommand(trimmed);

    if (result.type === 'clear') {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'command', text: trimmed },
        { type: 'output', text: result.text },
      ]);
    }

    if (trimmed.trim() !== '') {
      setCommandLog((prev) => [...prev, trimmed]);
    }
    setLogIndex(-1);
    setInput('');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex =
        logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (logIndex === -1) return;
      const nextIndex = logIndex + 1;
      if (nextIndex >= commandLog.length) {
        setLogIndex(-1);
        setInput('');
      } else {
        setLogIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    }
  }

  return (
    <div className={styles.wrapper} onClick={focusInput}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <span className={styles.titleText}>
            {profile.name.toLowerCase().replace(' ', '-')}@portfolio: ~
          </span>
        </div>

        <div className={styles.body} ref={scrollRef}>
          {history.map((line, i) =>
            line.type === 'command' ? (
              <div key={i} className={styles.line}>
                <span className={styles.promptSymbol}>guest@portfolio:~$</span>
                <span className={styles.commandText}>{line.text}</span>
              </div>
            ) : (
              <pre key={i} className={styles.outputText}>
                {line.text}
              </pre>
            ),
          )}

          <form onSubmit={handleSubmit} className={styles.line}>
            <span className={styles.promptSymbol}>guest@portfolio:~$</span>
            <input
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete='off'
              aria-label='Terminal command input'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
