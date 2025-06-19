import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#{$]%^&*-_+=[}~`";

    for (let i=0;i<length;i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
    }
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Whenever page loads, this gets called to generate a password
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black-500 to-gray-500 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl px-6 py-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h1>
        <div className="flex shadow border border-gray-300 rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-gray-700"
            placeholder="Your password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={() => { copyPasswordToClipboard(); alert("Password copied to clipboard!"); }}
            className="bg-blue-700 hover:bg-blue-500 transition-colors text-white px-4 py-2"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Length: {length}</label>
            <input
              type="range"
              min={4}
              max={16}
              value={length}
              className="w-2/3 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="mr-2 h-5 w-5"
            />
            <label htmlFor="numberInput" className="text-gray-700">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="mr-2 h-5 w-5"
            />
            <label htmlFor="characterInput" className="text-gray-700">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
