import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Button } from '../components/buttons';
import { Card } from '../components/cards';
import { Badge } from '../components/badges';
import { Avatar, AvatarGroup } from '../components/avatars';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '../components/alerts';
import { Spinner } from '../components/feedback';
import { Progress } from '../components/feedback';

const DashboardPage = () => {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className={`border-b transition-colors ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Dashboard
              </h1>
              <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Welcome back! Here's your component library overview.
              </p>
            </div>
            <Button
              variant="primary"
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading && <Spinner size="sm" />}
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alert Banner */}
        <div className="mb-8">
          <Alert variant="info">
            <AlertIcon />
            <div className="flex-1">
              <AlertTitle>Component Library v1.0</AlertTitle>
              <AlertDescription>
                You have access to 40+ production-ready components. Explore each section to see documentation and live examples.
              </AlertDescription>
            </div>
          </Alert>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat Card 1 */}
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <div className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Total Components
            </div>
            <div className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              40+
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden">
              <div className="w-full h-full bg-blue-500"></div>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <div className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Production Ready
            </div>
            <div className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              100%
            </div>
            <Badge variant="success" label="All Verified" />
          </div>

          {/* Stat Card 3 */}
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <div className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Accessibility
            </div>
            <div className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              WCAG 2.1
            </div>
            <Badge variant="info" label="Level AA" />
          </div>

          {/* Stat Card 4 */}
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <div className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Documentation
            </div>
            <div className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Complete
            </div>
            <Badge variant="success" label="API Docs Ready" />
          </div>
        </div>

        {/* Component Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Part 1 Components */}
          <div className={`rounded-lg p-8 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Part 1: Foundation
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Buttons & Links</span>
                <Badge variant="success" size="sm" label="Ready" />
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Forms & Inputs</span>
                <Badge variant="success" size="sm" label="Ready" />
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Alerts & Toasts</span>
                <Badge variant="success" size="sm" label="Ready" />
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Badges & Avatars</span>
                <Badge variant="success" size="sm" label="Ready" />
              </div>
              <div className="flex items-center justify-between">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Loaders & Feedback</span>
                <Badge variant="success" size="sm" label="Ready" />
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className={`rounded-lg p-8 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Part 2: Advanced
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Modals & Overlays</span>
                  <Badge variant="success" size="sm" label="Ready" />
                </div>
                <Progress value={0} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Tables & Data</span>
                  <Badge variant="success" size="sm" label="Ready" />
                </div>
                <Progress value={0} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Navigation & Menus</span>
                  <Badge variant="success" size="sm" label="Ready" />
                </div>
                <Progress value={0} />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`rounded-lg p-8 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Development 
          </h2>
          <AvatarGroup max={5}>
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              alt="Developer 1"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=2"
              alt="Developer 2"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              alt="Developer 3"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=4"
              alt="Developer 4"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=5"
              alt="Developer 5"
              size="lg"
            />
          </AvatarGroup>
          <p className={`mt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Built by Syed Zain Naqvi a passionate developer dedicated to creating exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;