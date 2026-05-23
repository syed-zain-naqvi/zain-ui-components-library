import React from 'react';
import { Alert } from '../components/alerts/Alert';
import { Container } from '../components/layout/Container';
import { Stack } from '../components/layout/Stack';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';

function Section({ title, description, children }) {
  return (
    <div>
      <Heading as="h2" size="xl" className="mb-1">{title}</Heading>
      {description && (
        <Text size="sm" color="muted" className="mb-4">{description}</Text>
      )}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default function AlertsPage() {
  return (
    <Container size="lg" className="py-10">
      <div className="mb-8">
        <Heading as="h1" size="3xl" className="mb-2">Alerts</Heading>
        <Text color="muted">
          Alert components for surfacing informational, success, warning, and error states.
        </Text>
      </div>
      <Stack spacing="xl">
        <Section
          title="Variants"
          description="Five semantic variants covering all common notification needs."
        >
          <Alert variant="info" title="Information" description="This is an informational message with additional context." showIcon />
          <Alert variant="success" title="Success" description="Your changes have been saved successfully." showIcon />
          <Alert variant="warning" title="Warning" description="Please review your input before proceeding." showIcon />
          <Alert variant="error" title="Error" description="Something went wrong. Please try again." showIcon />
          <Alert variant="neutral" title="Note" description="This is a neutral notice with no semantic urgency." showIcon />
        </Section>
        <Divider />
        <Section
          title="Closable Alerts"
          description="Users can dismiss these alerts."
        >
          <Alert variant="info" title="Dismissible" description="Click the X to dismiss this alert." closable showIcon />
          <Alert variant="success" title="Action Complete" description="Your profile has been updated." closable showIcon />
          <Alert variant="error" title="Payment Failed" description="Your card was declined. Please update your payment method." closable showIcon />
        </Section>
        <Divider />
        <Section
          title="Without Icons"
          description="Clean alerts without the leading icon."
        >
          <Alert variant="info" title="No Icon" description="This alert renders without an icon." showIcon={false} />
          <Alert variant="warning" description="A description-only warning with no title and no icon." showIcon={false} />
        </Section>
        <Divider />
        <Section
          title="Sizes"
          description="Three sizes for different layout densities."
        >
          <Alert variant="primary" size="sm" title="Small Alert" description="Compact alert for tight spaces." showIcon />
          <Alert variant="success" size="md" title="Medium Alert" description="Default size for most use cases." showIcon />
          <Alert variant="warning" size="lg" title="Large Alert" description="Expanded alert for prominent messages." showIcon />
        </Section>
        <Divider />
        <Section
          title="With Custom Content"
          description="Alerts can contain arbitrary child content."
        >
          <Alert variant="info" title="Update Available" showIcon>
            <Text size="sm" className="mt-1 opacity-90">
              Version 2.1.0 is now available. This update includes performance improvements and bug fixes.
            </Text>
            <div className="flex gap-2 mt-3">
              <button className="text-xs font-semibold underline underline-offset-2 hover:no-underline">
                Update Now
              </button>
              <button className="text-xs opacity-60 hover:opacity-100">
                Remind Me Later
              </button>
            </div>
          </Alert>
        </Section>
      </Stack>
    </Container>
  );
}