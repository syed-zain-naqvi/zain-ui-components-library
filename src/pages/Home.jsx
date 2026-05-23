import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { Button } from '@/components/buttons/Button';
import { HStack } from '@/components/layout/HStack';
import { Grid } from '@/components/layout/Grid';
import { motion } from 'framer-motion';
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/utils/animationVariants';
import { useTheme } from '@/hooks/useTheme';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';

export default function Home() {
  const { mode, toggleMode, isDark } = useTheme();

  const navigationItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Forms', path: '/forms' },
    { label: 'Alerts', path: '/alerts' },
    { label: 'Toasts', path: '/toasts' },
    { label: 'Typography', path: '/typography' },
    { label: 'Badges', path: '/badges' },
    { label: 'Avatars', path: '/avatars' },
    { label: 'Loaders', path: '/loaders' },
    { label: 'Colors', path: '/colors' },

    { label: 'Navigation', path: '/navigation' },
    { label: 'Tables', path: '/tables' },
    { label: 'Modals', path: '/modals' },
    { label: 'Search & Filter', path: '/search' },
    { label: 'Advanced', path: '/advanced' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-40 bg-white dark:bg-neutral-950 backdrop-blur">
        <Container maxWidth="7xl">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl text-primary-600">
              Zain UI Library
            </Link>
            <HStack spacing="lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMode}
                leftIcon={isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
              >
                {mode === 'dark' ? 'Light' : 'Dark'}
              </Button>
            </HStack>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <Container maxWidth="5xl" py="xl">
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-black mb-6 text-neutral-900 dark:text-white">
            Zain UI Components
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            A production-grade React component library built with Vite, Tailwind CSS, and Framer Motion.
            Fully accessible, dark mode enabled, and ready to ship.
          </p>
          <HStack spacing="md" justify="center">
            <Button
              size="lg"
              colorScheme="primary"
              onClick={() => {
                document.getElementById("components")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </Button>
            <a href="https://github.com/syed-zain-naqvi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" colorScheme="primary">
                GitHub
              </Button>
            </a>
          </HStack>
        </motion.div>
      </Container>

      {/* Components Grid */}
      <section id="components">
        <Container maxWidth="7xl" py="xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Components
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Explore our comprehensive collection of production-ready components.
            </p>
          </div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid columns={3} spacing="lg">
              {navigationItems.map((item) => (
                <motion.div key={item.path} variants={staggerItemVariants}>
                  <Link to={item.path}>
                    <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:border-primary-500 dark:hover:border-primary-500">
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                        {item.label}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        Explore {item.label.toLowerCase()} components
                      </p>
                      <div className="mt-4">
                        <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20 py-12 bg-neutral-50 dark:bg-neutral-900">
        <Container maxWidth="7xl">
          <Stack spacing="lg" align="center">
            <p className="text-neutral-600 dark:text-neutral-400">
              © 2026 Zain UI. Built with React, Vite, and Tailwind CSS.
            </p>
            <HStack spacing="xl" justify="center">

              <Link
                to="/documentation"
                className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 text-sm"
              >
                Documentation
              </Link>
              
              <a href="#" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 text-sm">
                GitHub
              </a>
            </HStack>
          </Stack>
        </Container>
      </footer>
    </div>
  );
}