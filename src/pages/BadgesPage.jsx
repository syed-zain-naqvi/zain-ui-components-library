import React from 'react';
import { Container } from '../components/layout/Container';
import { Stack } from '../components/layout/Stack';
import { HStack } from '../components/layout/HStack';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';
import { Badge } from '../components/badges/Badge';
import { StatusBadge } from '../components/badges/StatusBadge';
import { NotificationBadge } from '../components/badges/NotificationBadge';

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

const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'];

export default function BadgesPage() {
  return (
    <Container size="lg" className="py-10">
      <div className="mb-8">
        <Heading as="h1" size="3xl" className="mb-2">Badges</Heading>
        <Text color="muted">
          Labels, tags, and indicators for categorization and status communication.
        </Text>
      </div>
      <Stack spacing="xl">
        <Section title="Subtle Badges" description="Low-emphasis badges for metadata and tags.">
          <HStack spacing="sm" wrap>
            {colors.map((c) => (
              <Badge key={c} variant="subtle" color={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Badge>
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Solid Badges" description="High-contrast badges for strong emphasis.">
          <HStack spacing="sm" wrap>
            {colors.map((c) => (
              <Badge key={c} variant="solid" color={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Badge>
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Outline Badges" description="Minimal-style badges with just a border.">
          <HStack spacing="sm" wrap>
            {colors.map((c) => (
              <Badge key={c} variant="outline" color={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Badge>
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Sizes" description="Four sizes from XS to LG.">
          <HStack spacing="sm" align="center" wrap>
            <Badge size="xs" variant="subtle" color="primary">Extra Small</Badge>
            <Badge size="sm" variant="subtle" color="primary">Small</Badge>
            <Badge size="md" variant="subtle" color="primary">Medium</Badge>
            <Badge size="lg" variant="subtle" color="primary">Large</Badge>
          </HStack>
        </Section>
        <Divider />
        <Section title="With Dot Indicator" description="Badges with a leading dot for status.">
          <HStack spacing="sm" wrap>
            <Badge variant="subtle" color="success" dot>Active</Badge>
            <Badge variant="subtle" color="warning" dot>Pending</Badge>
            <Badge variant="subtle" color="error" dot>Inactive</Badge>
            <Badge variant="subtle" color="info" dot>In Review</Badge>
          </HStack>
        </Section>
        <Divider />
        <Section title="Square Badges" description="Rounded rectangle style for tags and categories.">
          <HStack spacing="sm" wrap>
            {colors.slice(0, 5).map((c) => (
              <Badge key={c} variant="subtle" color={c} rounded="md">
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </Badge>
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Status Badges" description="Presence and availability indicators.">
          <HStack spacing="sm" wrap>
            <StatusBadge status="online" />
            <StatusBadge status="offline" />
            <StatusBadge status="busy" />
            <StatusBadge status="away" />
            <StatusBadge status="idle" />
          </HStack>
        </Section>
        <Divider />
        <Section title="Notification Badges" description="Overlay badges for counts and indicators.">
          <HStack spacing="lg" align="center" wrap>
            <NotificationBadge count={3}>
              <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </NotificationBadge>
            <NotificationBadge count={128} max={99}>
              <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </NotificationBadge>
            <NotificationBadge dot>
              <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </NotificationBadge>
          </HStack>
        </Section>
      </Stack>
    </Container>
  );
}