import React, { useState } from 'react';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';
import { ProductionsPage } from './pages/productions-page';
import { AuditionsPage } from './pages/auditions-page';
import { GalaPage } from './pages/gala-page';
import { HistoryPage } from './pages/history-page';
import { AwardsPage } from './pages/awards-page';
import { PressKitPage } from './pages/press-kit-page';
import { MikadoResourcesPage } from './pages/mikado-resources-page';
import { SponsorsPage } from './pages/sponsors-page';
import { ArchivePage } from './pages/archive-page';
import { ShowDetailPage } from './pages/show-detail-page';
import { MerchandisePage } from './pages/merchandise-page-new';
import { ScholarshipPage } from './pages/scholarship-page';
import { OutreachPage } from './pages/outreach-page';
import { NewToGSPage } from './pages/new-to-gs-page';
import { PerformanceHistoryPage } from './pages/performance-history-page';
import { PhotoGalleriesPage } from './pages/photo-galleries-page';

export type Page = 
  | 'home'
  | 'about'
  | 'productions'
  | 'auditions'
  | 'gala'
  | 'history'
  | 'awards'
  | 'press-kit'
  | 'mikado-resources'
  | 'sponsors'
  | 'archive'
  | 'performance-history'
  | 'photo-galleries'
  | 'merchandise'
  | 'scholarships'
  | 'outreach'
  | 'new-to-gs'
  | { type: 'show-detail'; productionId: string };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    if (typeof currentPage === 'object' && currentPage.type === 'show-detail') {
      return <ShowDetailPage productionId={currentPage.productionId} onNavigate={setCurrentPage} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'productions':
        return <ProductionsPage onNavigate={setCurrentPage} />;
      case 'auditions':
        return <AuditionsPage />;
      case 'gala':
        return <GalaPage />;
      case 'history':
        return <HistoryPage />;
      case 'awards':
        return <AwardsPage />;
      case 'press-kit':
        return <PressKitPage />;
      case 'mikado-resources':
        return <MikadoResourcesPage />;
      case 'sponsors':
        return <SponsorsPage />;
      case 'archive':
        return <ArchivePage onNavigate={setCurrentPage} />;
      case 'performance-history':
        return <PerformanceHistoryPage />;
      case 'photo-galleries':
        return <PhotoGalleriesPage />;
      case 'merchandise':
        return <MerchandisePage />;
      case 'scholarships':
        return <ScholarshipPage />;
      case 'outreach':
        return <OutreachPage />;
      case 'new-to-gs':
        return <NewToGSPage />;
      default:
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}