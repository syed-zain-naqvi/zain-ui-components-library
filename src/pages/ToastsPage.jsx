import React from 'react';
import { Container } from '../components/layout/Container';
import { Stack } from '../components/layout/Stack';
import { HStack } from '../components/layout/HStack';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';
import { Button } from '../components/buttons/Button';
import { Toast } from '../components/toasts/Toast';
import { useToast } from '../hooks/useToast';

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

function LiveDemo() {
  const toast = useToast();

  return (
    <HStack spacing="sm" wrap>
      <Button
        variant="outline"
        color="primary"
        size="sm"
        onClick={() => toast.info({ title: 'Info', description: 'This is an informational message.' })}
      >
        Info Toast
      </Button>
      <Button
        variant="outline"
        color="success"
        size="sm"
        onClick={() => toast.success({ title: 'Success', description: 'Action completed successfully.' })}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        color="warning"
        size="sm"
        onClick={() => toast.warning({ title: 'Warning', description: 'Please check your input.' })}
      >
        Warning Toast
      </Button>
      <Button
        variant="outline"
        color="error"
        size="sm"
        onClick={() => toast.error({ title: 'Error', description: 'Something went wrong.' })}
      >
        Error Toast
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toast.clear()}
      >
        Clear All
      </Button>
    </HStack>
  );
}

export default function ToastsPage() {
  return (
    <Container size="lg" className="py-10">
      <div className="mb-8">
        <Heading as="h1" size="3xl" className="mb-2">Toasts</Heading>
        <Text color="muted">
          Non-blocking notifications for status updates, confirmations, and system messages.
        </Text>
      </div>
      <Stack spacing="xl">
        <Section
          title="Live Demo"
          description="Trigger toasts to see them in action."
        >
          <LiveDemo />
        </Section>
        <Divider />
        <Section
          title="Static Previews"
          description="All toast variants shown in static form."
        >
          <div className="space-y-3 max-w-sm">
            <Toast variant="info" title="Information" description="Your session will expire in 10 minutes." />
            <Toast variant="success" title="Profile Updated" description="Your changes have been saved." />
            <Toast variant="warning" title="Low Disk Space" description="You are running low on storage." />
            <Toast variant="error" title="Upload Failed" description="The file could not be uploaded." />
            <Toast variant="neutral" title="New Message" description="You have 3 unread messages." />
          </div>
        </Section>
        <Divider />
        <Section
          title="Title Only"
          description="Compact toasts with only a title."
        >
          <div className="space-y-3 max-w-sm">
            <Toast variant="success" title="Saved successfully." />
            <Toast variant="error" title="Failed to delete item." />
            <Toast variant="info" title="Syncing in progress..." />
          </div>
        </Section>
        <Divider />
        <Section
          title="With Action"
          description="Toasts with embedded action buttons."
        >
          <div className="max-w-sm">
            <Toast
              variant="info"
              title="New version available"
              description="Reload the page to get the latest features."
              action={
                <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  Reload Now
                </button>
              }
            />
          </div>
        </Section>
      </Stack>
    </Container>
  );
}