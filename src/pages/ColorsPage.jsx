import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { HStack } from '@/components/layout/HStack';
import { Grid } from '@/components/layout/Grid';
import { Divider } from '@/components/layout/Divider';
import { useClipboard } from '@/hooks/useClipboard';

const ColorPalette = ({ name, colors }) => {
  const { copied, copy } = useClipboard();

  return (
    <Stack spacing="md">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{name}</h3>
      <Grid columns={6} spacing="md">
        {Object.entries(colors).map(([key, value]) => (
          <div
            key={key}
            className="cursor-pointer group"
            onClick={() => copy(value)}
            title="Click to copy"
          >
            <div
              className="w-full aspect-square rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow mb-2"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {key}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              {value}
            </div>
            {copied && (
              <div className="text-xs text-success-600 dark:text-success-400 mt-1">Copied!</div>
            )}
          </div>
        ))}
      </Grid>
    </Stack>
  );
};

export default function ColorsPage() {
  const palettes = {
    Primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    Secondary: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda29b',
      400: '#f87171',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9d174d',
      900: '#831843',
    },
    Success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#145231',
    },
    Warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    Danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    Neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Container maxWidth="6xl" py="xl">
        <Stack spacing="3xl">
          {/* Header */}
          <Stack spacing="md">
            <h1 className="text-4xl font-black text-neutral-900 dark:text-white">
              Color System
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Complete color palette with tokens for design consistency. Click any color to copy
              its hex value.
            </p>
          </Stack>

          <Divider />

          {/* Color Palettes */}
          {Object.entries(palettes).map(([paletteName, colors]) => (
            <div key={paletteName}>
              <ColorPalette name={paletteName} colors={colors} />
              <Divider />
            </div>
          ))}

          {/* Usage */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              CSS Variables
            </h2>
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <pre className="text-sm text-neutral-700 dark:text-neutral-300 font-mono overflow-x-auto">
                {`/* Use in your components */
className="bg-primary-500 text-white"
className="border border-primary-200"
className="bg-primary-50 dark:bg-primary-950"`}
              </pre>
            </div>
          </Stack>

          {/* Spacing Scale */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Spacing</h2>
            <Stack spacing="md">
              <div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  xs (4px)
                </span>
                <div className="mt-2 bg-primary-500 h-1 w-1" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  sm (8px)
                </span>
                <div className="mt-2 bg-primary-500 h-2 w-2" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  md (16px)
                </span>
                <div className="mt-2 bg-primary-500 h-4 w-4" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  lg (24px)
                </span>
                <div className="mt-2 bg-primary-500 h-6 w-6" />
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}