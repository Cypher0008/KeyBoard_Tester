import React, { useState, useEffect } from 'react';
import '../styles/KeyboardTester.css';


// Mac keyboard layout
const macKeys = [
  ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
];

// Windows keyboard layout
const windowsKeys = [
  ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
];



// Mac key names for display
const macKeyNames = {
  Escape: 'Esc', F1: 'F1', F2: 'F2', F3: 'F3', F4: 'F4', F5: 'F5', F6: 'F6', F7: 'F7', F8: 'F8', F9: 'F9', F10: 'F10', F11: 'F11', F12: 'F12',
  Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
  Minus: '-', Equal: '=', Backspace: 'Backspace',
  Tab: 'Tab', KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T', KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
  CapsLock: 'CapsLock', KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G', KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L', Semicolon: ';', Quote: '\'', Enter: 'Enter',
  ShiftLeft: 'Shift', KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B', KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '/', ShiftRight: 'Shift',
  ControlLeft: 'Ctrl', MetaLeft: 'Cmd', AltLeft: 'Option', Space: 'Space', AltRight: 'Option', MetaRight: 'Cmd',
  ArrowLeft: '←', ArrowUp: '↑', ArrowDown: '↓', ArrowRight: '→'
};

// Windows key names for display
const windowsKeyNames = {
  Escape: 'Esc', F1: 'F1', F2: 'F2', F3: 'F3', F4: 'F4', F5: 'F5', F6: 'F6', F7: 'F7', F8: 'F8', F9: 'F9', F10: 'F10', F11: 'F11', F12: 'F12',
  Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
  Minus: '-', Equal: '=', Backspace: 'Backspace',
  Tab: 'Tab', KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T', KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
  CapsLock: 'CapsLock', KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G', KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L', Semicolon: ';', Quote: '\'', Enter: 'Enter',
  ShiftLeft: 'Shift', KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B', KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '/', ShiftRight: 'Shift',
  ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: 'Space', AltRight: 'Alt', ContextMenu: 'Menu', ControlRight: 'Ctrl',
  ArrowLeft: '←', ArrowUp: '↑', ArrowDown: '↓', ArrowRight: '→'
};


const KeyboardTester = ({ layout }) => {
  const [pressedKeys, setPressedKeys] = useState({});
  const [keyHistory, setKeyHistory] = useState([]);
  const [testText, setTestText] = useState("Type here...");

  const handleKeyDown = (e) => {
    const key = e.code;
    setPressedKeys((prevState) => ({
      ...prevState,
      [key]: true,
    }));

    setKeyHistory((prevHistory) => [key, ...prevHistory]);
  };

  const handleKeyUp = (e) => {
    const key = e.code;
    setPressedKeys((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const getKeyClass = (key) => {
    return pressedKeys[key] ? 'key pressed' : 'key';
  };

  const keysLayout = layout === 'Mac' ? macKeys : windowsKeys;
  const keyNames = layout === 'Mac' ? macKeyNames : windowsKeyNames;

  return (
    <div className="keyboard-container">
      <h2>{layout} Keyboard Tester</h2>
      <p>Note: If function keys (F1-F12) do not work, try holding the 'Fn' key while pressing them.</p>
      
      <div className="keyboard">
        {keysLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="key-row">
            {row.map((key) => (
              <div key={key} className={getKeyClass(key)} data-key={key}>
                {keyNames[key] || key}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="typing-test">
        <h3>Typing Test</h3>
        <textarea 
          rows="4" 
          cols="50" 
          value={testText} 
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Type here..."
        />
      </div>

      <div className="key-history">
        <h3>Key Press History</h3>
        <ul>
          {keyHistory.slice(0, 10).map((key, index) => (
            <li key={index}>{keyNames[key] || key}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyboardTester;
