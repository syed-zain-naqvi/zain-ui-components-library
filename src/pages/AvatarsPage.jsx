import React from 'react';
import { Container } from '../components/layout/Container';
import { Stack } from '../components/layout/Stack';
import { HStack } from '../components/layout/HStack';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';
import { Avatar } from '../components/avatars/Avatar';
import { AvatarGroup } from '../components/avatars/AvatarGroup';
import { AvatarBadge } from '../components/avatars/AvatarBadge';

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

const sampleAvatars = [
  { name: 'Alice Johnson', id: 'a1' },
  { name: 'Bob Smith', id: 'a2' },
  { name: 'Carol Williams', id: 'a3' },
  { name: 'David Lee', id: 'a4' },
  { name: 'Emma Davis', id: 'a5' },
  { name: 'Frank Miller', id: 'a6' },
];

export default function AvatarsPage() {
  return (
    <Container size="lg" className="py-10">
      <div className="mb-8">
        <Heading as="h1" size="3xl" className="mb-2">Avatars</Heading>
        <Text color="muted">
          User representation components with image, initials, and group stacking support.
        </Text>
      </div>
      <Stack spacing="xl">
        <Section title="Initials Avatars" description="Auto-generated initials and consistent color mapping from name.">
          <HStack spacing="md" align="center" wrap>
            {sampleAvatars.map((a) => (
              <Avatar key={a.id} name={a.name} size="md" />
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Sizes" description="Seven sizes from XS to 3XL.">
          <HStack spacing="md" align="center" wrap>
            {['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((s) => (
              <Avatar key={s} name="Zain UI" size={s} />
            ))}
          </HStack>
        </Section>
        <Divider />
        <Section title="Rounded Variants" description="Different border-radius options.">
          <HStack spacing="md" align="center" wrap>
            <Avatar name="None" size="lg" rounded="none" />
            <Avatar name="SM" size="lg" rounded="sm" />
            <Avatar name="MD" size="lg" rounded="md" />
            <Avatar name="LG" size="lg" rounded="lg" />
            <Avatar name="XL" size="lg" rounded="xl" />
            <Avatar name="Full" size="lg" rounded="full" />
          </HStack>
        </Section>
        <Divider />
        <Section title="With Status Badge" description="Avatars with presence indicators.">
          <HStack spacing="md" align="center" wrap>
            <Avatar name="Alice Johnson" size="lg">
              <AvatarBadge status="online" size="md" />
            </Avatar>
            <Avatar name="Bob Smith" size="lg">
              <AvatarBadge status="busy" size="md" />
            </Avatar>
            <Avatar name="Carol Williams" size="lg">
              <AvatarBadge status="away" size="md" />
            </Avatar>
            <Avatar name="David Lee" size="lg">
              <AvatarBadge status="offline" size="md" />
            </Avatar>
          </HStack>
        </Section>
        <Divider />
        <Section title="Avatar Groups" description="Stacked avatar groups with overflow count.">
          <Stack spacing="md">
            <AvatarGroup avatars={sampleAvatars} max={4} size="md" />
            <AvatarGroup avatars={sampleAvatars} max={3} size="lg" />
            <AvatarGroup avatars={sampleAvatars} max={5} size="sm" />
          </Stack>
        </Section>
        <Divider />
        <Section title="Fallback Avatar" description="Shown when no name or image is provided.">
          <HStack spacing="md" align="center">
            <Avatar size="md" />
            <Avatar size="lg" />
            <Avatar size="xl" />
          </HStack>
        </Section>
      </Stack>
    </Container>
  );
}