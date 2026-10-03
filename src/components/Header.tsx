import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  menuOpen,
  onToggleMenu,
  onNavigateHome,
}) => {
  return (
    <header
      id="portfolio-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#f9f7f2]/85 dark:bg-[#121110]/85 backdrop-blur-md border-b border-[#e8e4dc] dark:border-[#262420]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Left: Wordmark / Name */}
        <button
          id="nav-wordmark-button"
          onClick={onNavigateHome}
          className="group flex items-baseline gap-3 text-left focus:outline-hidden cursor-pointer"
          title="Return to Landing"
        >
          <span className="font-sans-swiss text-lg sm:text-xl font-bold tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors">
            Lyne Olmedo-Revaz
          </span>
        </button>

        {/* Right: Burger / Close Button */}
        <div className="flex items-center gap-4">
          <button
            id="nav-menu-toggle-button"
            onClick={onToggleMenu}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            className="relative w-11 h-11 rounded-full border border-[#dcd7cb] dark:border-[#33302a] bg-[#fdfcf9] dark:bg-[#1c1b18] hover:bg-[#ede9df] dark:hover:bg-[#282622] hover:border-[#161513] dark:hover:border-[#f4f1ea] flex items-center justify-center transition-all cursor-pointer shadow-xs focus:outline-hidden"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              <span
                className={`w-5 h-[1.5px] bg-[#161513] dark:bg-[#f4f1ea] rounded-full transition-transform duration-300 ease-out origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[7.2px]' : ''
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-[#161513] dark:bg-[#f4f1ea] rounded-full transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-[#161513] dark:bg-[#f4f1ea] rounded-full transition-transform duration-300 ease-out origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[7.2px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
