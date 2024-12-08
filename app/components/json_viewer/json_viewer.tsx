"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ThemeKeys } from 'react-json-view';
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

export function JsonViewer() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedJson, setParsedJson] = useState(null);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('monokai');
  const themes = [
    'apathy',
    'apathy:inverted',
    'ashes',
    'bespin',
    'brewer',
    'bright:inverted',
    'bright',
    'chalk',
    'codeschool',
    'colors',
    'eighties',
    'embers',
    'flat',
    'google',
    'grayscale',
    'grayscale:inverted',
    'greenscreen',
    'harmonic',
    'hopscotch',
    'isotope',
    'marrakesh',
    'mocha',
    'monokai',
    'ocean',
    'paraiso',
    'pop',
    'railscasts',
    'rjv-default',
    'shapeshifter',
    'shapeshifter:inverted',
    'solarized',
    'summerfruit',
    'summerfruit:inverted',
    'threezerotwofour',
    'tomorrow',
    'tube',
    'twilight'
  ] as ThemeKeys[];


  const handleParse = (jsonInput: string) => {
    setJsonInput(jsonInput);
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedJson(parsed);
      setError('');
      
    } catch {
      setError('Invalid JSON');
      setParsedJson(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">JSON Prettier</h1>
      <p className='hidden'>Our JSON Viewer allows you to parse and debug JSON files effortlessly. Whether you are a developer or data analyst, this tool is perfect for visualizing JSON data.
      </p>
      <div className="mb-4 flex flex-col items-center">
        <div className="relative">
          <select
            className="block w-full appearance-none bg-gray-700 text-white py-2 px-4 pr-8 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setTheme(e.target.value)}
            defaultValue={theme}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className='flex w-full gap-4 h-[calc(100vh-12rem)] flex-col lg:flex-row'>
        <div className='basis-1/2 bg-gray-800'>
            <textarea
                className="w-full h-full p-4 border bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 scrollbar"
                placeholder="Enter JSON here..."
                value={jsonInput}
                onChange={(e) => handleParse(e.target.value)}
            />
        </div>
        
        
        <div className="basis-1/2 w-full max-w-2xl bg-gray-800 border rounded-md shadow-md overflow-y-auto scrollbar">
            {parsedJson && <ReactJson src={parsedJson} theme={theme as ThemeKeys} />}
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <a
          href="https://umer.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Website
        </a>
        <a
          href="https://github.com/mumer119131"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/dev-umer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          LinkedIn
        </a>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} All rights reserved. Created by Umer.
      </footer>
    </div>
  );
}
