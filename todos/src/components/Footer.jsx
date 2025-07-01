import React from 'react'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#0f1419] border-t border-gray-600 py-4">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center text-gray-300">
          <span className="text-sm">
            Made by{' '}
            <span className="font-semibold text-white">Shorya Sethia</span>
            {' '} | {' '}
            <a 
              href="https://github.com/shoryasethia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
