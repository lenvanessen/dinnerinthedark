
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square, Volume2 } from 'lucide-react';

export default function ReadAloudButton() {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if speech synthesis is supported
    setIsSupported('speechSynthesis' in window);
  }, []);

  const getPageText = () => {
    // Get all text content from the page, excluding navigation and scripts
    const excludeSelectors = 'nav, script, style, [aria-hidden="true"]';
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Skip if parent element matches exclude selectors
          if (node.parentElement?.closest(excludeSelectors)) {
            return NodeFilter.FILTER_REJECT;
          }
          // Skip empty or whitespace-only text
          if (!node.textContent?.trim()) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let textContent = '';
    let node;
    while (node = walker.nextNode()) {
      textContent += node.textContent.trim() + ' ';
    }

    return textContent.replace(/\s+/g, ' ').trim();
  };

  const startReading = () => {
    if (!isSupported) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const text = getPageText();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure speech settings
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'nl-NL'; // Dutch language

    utterance.onstart = () => {
      setIsReading(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsReading(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsReading(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const pauseReading = () => {
    if (!isSupported) return;
    
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeReading = () => {
    if (!isSupported) return;
    
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stopReading = () => {
    if (!isSupported) return;
    
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gray-800 border border-gray-600 rounded-lg shadow-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className="w-4 h-4 text-yellow-600" />
          <span className="text-sm text-white font-medium">Voorlezen</span>
        </div>
        
        <div className="flex gap-2">
          {!isReading ? (
            <Button
              size="sm"
              onClick={startReading}
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
              aria-label="Begin met voorlezen van de pagina"
            >
              <Play className="w-4 h-4" />
            </Button>
          ) : (
            <>
              {!isPaused ? (
                <Button
                  size="sm"
                  onClick={pauseReading}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  aria-label="Pauzeer voorlezen"
                >
                  <Pause className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={resumeReading}
                  className="bg-green-500 hover:bg-green-600 text-white"
                  aria-label="Hervat voorlezen"
                >
                  <Play className="w-4 h-4" />
                </Button>
              )}
              
              <Button
                size="sm"
                onClick={stopReading}
                className="bg-red-500 hover:bg-red-600 text-white"
                aria-label="Stop met voorlezen"
              >
                <Square className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
