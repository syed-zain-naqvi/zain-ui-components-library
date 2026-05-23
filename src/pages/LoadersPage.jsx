import React from 'react';
import { Container } from '../components/layout/Container';
import { Stack } from '../components/layout/Stack';
import { HStack } from '../components/layout/HStack';
import { Grid } from '../components/layout/Grid';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';
import { Spinner } from '../components/feedback/Spinner';
import { Skeleton } from '../components/feedback/Skeleton';
import { SkeletonText } from '../components/feedback/SkeletonText';
import { SkeletonCircle } from '../components/feedback/SkeletonCircle';
import { Progress } from '../components/feedback/Progress';
import { CircularProgress } from '../components/feedback/CircularProgress';
import { InlineLoader } from '../components/loaders/InlineLoader';
import { OverlayLoader } from '../components/loaders/OverlayLoader';

function Section({ title, description, children }) {
  return (
    <div>
      <Heading as="h2" size="xl" className="mb-1">{title}</Heading>
      {description && (
        <Text size="sm" color="muted" className="mb-4">{description}</Text>
      )}
      {children}
    </div>
  );
}

function ProgressDemo() {
  const [value, setValue] = React.useState(65);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 1));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing="md">
      <Progress value={value} label="Upload Progress" showValue color="primary" />
      <Progress value={value} color="success" size="sm" />
      <Progress value={value} color="warning" size="lg" />
      <Progress value={value} color="error" size="xs" />
    </Stack>
  );
}

export default function LoadersPage() {
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(true);
    setTimeout(() => setOverlayVisible(false), 2500);
  };

  return (
    <Container size="lg" className="py-10">
      <div className="mb-8">
        <Heading as="h1" size="3xl" className="mb-2">Loaders & Feedback</Heading>
        <Text color="muted">
          Loading indicators, skeleton screens, progress bars, and overlay states.
        </Text>
      </div>
      <Stack spacing="xl">
        <Section title="Spinners" description="Circular loading indicators in multiple sizes and colors.">
          <HStack spacing="lg" align="center" wrap>
            {['xs', 'sm', 'md', 'lg', 'xl'].map((s) => (
              <Spinner key={s} size={s} color="primary" />
            ))}
          </HStack>
          <HStack spacing="lg" align="center" wrap className="mt-4">
            {['primary', 'gray', 'success', 'error'].map((c) => (
              <Spinner key={c} size="md" color={c} />
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Inline Loader" description="Three-dot bounce animation for inline content loading.">
          <HStack spacing="lg" align="center" wrap>
            {['xs', 'sm', 'md', 'lg'].map((s) => (
              <InlineLoader key={s} size={s} color="primary" label={`Loading ${s}`} />
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Skeleton" description="Placeholder screens while content loads.">
          <Grid cols={2} gap="md">
            <div className="space-y-3 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <HStack spacing="sm" align="center">
                <SkeletonCircle size="md" />
                <Stack spacing="xs" className="flex-1">
                  <Skeleton height="0.75rem" width="60%" />
                  <Skeleton height="0.625rem" width="40%" />
                </Stack>
              </HStack>
              <SkeletonText lines={3} />
              <Skeleton height="120px" rounded="lg" />
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <Skeleton height="160px" rounded="lg" />
              <Skeleton height="1rem" width="80%" />
              <SkeletonText lines={2} lastLineWidth="50%" />
              <HStack spacing="sm">
                <Skeleton height="2rem" width="5rem" rounded="full" />
                <Skeleton height="2rem" width="5rem" rounded="full" />
              </HStack>
            </div>
          </Grid>
        </Section>
        <Divider />
        <Section title="Progress Bar" description="Linear progress with animated live demo.">
          <ProgressDemo />
        </Section>
        <Divider />
        <Section title="Circular Progress" description="Radial progress indicators.">
          <HStack spacing="lg" align="center" wrap>
            {[25, 50, 75, 100].map((v) => (
              <CircularProgress key={v} value={v} size="md" color="primary" />
            ))}
            <CircularProgress value={68} size="lg" color="success" />
            <CircularProgress value={42} size="xl" color="warning" />
          </HStack>
        </Section>
        <Divider />
        <Section title="Overlay Loader" description="Blur-overlay loader for async content sections.">
          <OverlayLoader visible={overlayVisible} message="Processing request...">
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 min-h-[120px] flex flex-col justify-center gap-3">
              <SkeletonText lines={3} animate={false} />
              <HStack spacing="sm">
                <Skeleton height="2rem" width="6rem" rounded="md" animate={false} />
                <Skeleton height="2rem" width="6rem" rounded="md" animate={false} />
              </HStack>
            </div>
          </OverlayLoader>
          <button
            onClick={toggleOverlay}
            className="mt-3 px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Trigger Overlay (2.5s)
          </button>
        </Section>
      </Stack>
    </Container>
  );
}