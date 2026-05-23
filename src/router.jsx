import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import ButtonsPage from '@/pages/ButtonsPage';
import FormsPage from '@/pages/FormsPage';
import AlertsPage from '@/pages/AlertsPage';
import ToastsPage from '@/pages/ToastsPage';
import TypographyPage from '@/pages/TypographyPage';
import BadgesPage from '@/pages/BadgesPage';
import AvatarsPage from '@/pages/AvatarsPage';
import LoadersPage from '@/pages/LoadersPage';
import ColorsPage from '@/pages/ColorsPage';
import DashboardPage from '@/pages/DashboardPage';
import NavigationPage from '@/pages/NavigationPage';
import TablesPage from '@/pages/TablesPage';
import ModalsPage from '@/pages/ModalsPage';
import SearchPage from '@/pages/SearchFiltersPage';
import AdvancedPage from '@/pages/AdvancedPage';
import DocumentationPage from '@/pages/DocumentationPage';


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/buttons" element={<ButtonsPage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/alerts" element={<AlertsPage />} />
      <Route path="/toasts" element={<ToastsPage />} />
      <Route path="/typography" element={<TypographyPage />} />
      <Route path="/badges" element={<BadgesPage />} />
      <Route path="/avatars" element={<AvatarsPage />} />
      <Route path="/loaders" element={<LoadersPage />} />
      <Route path="/colors" element={<ColorsPage />} />
      <Route path="/navigation" element={<NavigationPage />} />
      <Route path="/tables" element={<TablesPage />} />
      <Route path="/modals" element={<ModalsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/advanced" element={<AdvancedPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
