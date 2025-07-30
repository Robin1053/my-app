// src/app/page.tsx
'use client'; // Wichtig für interaktive Komponenten!

import { useState } from 'react';

export default function Home() {
  // State für interaktive Elemente
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  
  // Event Handler
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  const incrementCount = () => {
    setCount(count + 1);
  };
  
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎉 Meine Next.js App!
          </h1>
          <p className="text-gray-600">
            React + TypeScript + Tailwind CSS
          </p>
        </div>

        {/* Name Input Section */}
        <div className="mb-8 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            👋 Persönliche Begrüßung
          </h2>
          
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Gib deinen Namen ein..."
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            
            {name && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Hallo <span className="font-bold">{name}</span>! 
                  Schön, dass du hier bist! 🌟
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Counter Section */}
        <div className="mb-8 p-6 bg-blue-50 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            🔢 Interaktiver Counter
          </h2>
          
          <div className="flex items-center gap-4">
            <button
              onClick={incrementCount}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105"
            >
              Klick mich!
            </button>
            
            <div className="text-2xl font-bold text-blue-600">
              Count: {count}
            </div>
          </div>
          
          {count > 0 && (
            <p className="mt-3 text-sm text-gray-600">
              Du hast schon <strong>{count}</strong> mal geklickt! 
              {count >= 10 && " 🎊 Wow, du bist fleißig!"}
            </p>
          )}
        </div>

        {/* Toggle Message Section */}
        <div className="mb-8 p-6 bg-purple-50 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            🎛️ Show/Hide Demo
          </h2>
          
          <button
            onClick={toggleMessage}
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            {showMessage ? 'Nachricht verstecken' : 'Nachricht anzeigen'}
          </button>
          
          {showMessage && (
            <div className="mt-4 p-4 bg-purple-100 border border-purple-200 rounded-lg animate-fade-in">
              <p className="text-purple-800">
                🎉 Das ist Conditional Rendering in React! 
                Diese Nachricht erscheint und verschwindet basierend auf dem State.
              </p>
            </div>
          )}
        </div>

        {/* Skills List */}
        <div className="p-6 bg-yellow-50 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            🛠️ Was du hier lernst
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'React Hooks (useState)',
              'TypeScript Basics',
              'Event Handling',
              'Conditional Rendering',
              'Tailwind CSS',
              'Next.js App Router'
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm"
              >
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>🚀 Gebaut mit Next.js 15, React 19 & TypeScript</p>
          <p className="mt-1">
            Bearbeite <code className="bg-gray-100 px-2 py-1 rounded">src/app/page.tsx</code> um Änderungen zu sehen!
          </p>
        </div>
      </div>
    </div>
  );
}