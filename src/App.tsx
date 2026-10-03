/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import { portfolioProjects, aboutData } from './data/portfolioData';
import { Header } from './components/Header';
import { MenuOverlay } from './components/MenuOverlay';
import { LandingDial } from './components/LandingDial';
import { ProjectDetail } from './components/ProjectDetail';
import { AboutView } from './components/AboutView';
import { triggerHapticTick } from './utils/haptics';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [activeProjectId, setActiveProjectId] = useState<string>(portfolioProjects[0].id);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // Active project object
  const activeProject =
    portfolioProjects.find((p) => p.id === activeProjectId) || portfolioProjects[0];

  // Navigation handlers
  const handleNavigateHome = () => {
    triggerHapticTick('light');
    setCurrentView('landing');
    setTargetSection(null);
    setMenuOpen(false);
  };

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  const handleNavigateToProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setCurrentView('project');
    setTargetSection(null);
    setMenuOpen(false);
  };

  const handleSelectAbout = (sectionId?: string) => {
    setCurrentView('about');
    setTargetSection(sectionId || null);
    setMenuOpen(false);
  };

  const handleToggleMenu = () => {
    triggerHapticTick('light');
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#f9f7f2] dark:bg-[#121110] text-[#161513] dark:text-[#f4f1ea] font-sans-swiss overflow-x-hidden selection:bg-[#161513] selection:text-[#f9f7f2] dark:selection:bg-[#f4f1ea] dark:selection:text-[#121110] transition-colors duration-250">
      {/* 1. Persistent Global Header */}
      <Header
        currentView={currentView}
        menuOpen={menuOpen}
        onToggleMenu={handleToggleMenu}
        onNavigateHome={handleNavigateHome}
      />

      {/* 2. Full-Screen Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        projects={portfolioProjects}
        activeProjectId={activeProjectId}
        onClose={() => setMenuOpen(false)}
        onSelectProject={handleNavigateToProject}
        onSelectAbout={handleSelectAbout}
      />

      {/* 3. Main Views */}
      <main className="relative w-full">
        {currentView === 'landing' && (
          <LandingDial
            projects={portfolioProjects}
            activeProjectId={activeProjectId}
            onSelectProject={handleSelectProject}
            onNavigateToProject={handleNavigateToProject}
          />
        )}

        {currentView === 'project' && (
          <ProjectDetail
            project={activeProject}
            onBackToLanding={handleNavigateHome}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            data={aboutData}
            targetSection={targetSection}
            onBackToLanding={handleNavigateHome}
          />
        )}
      </main>
    </div>
  );
}
