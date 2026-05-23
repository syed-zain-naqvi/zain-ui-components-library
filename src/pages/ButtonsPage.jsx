import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { HStack } from '@/components/layout/HStack';
import { Grid } from '@/components/layout/Grid';
import { Divider } from '@/components/layout/Divider';
import { Button } from '@/components/buttons/Button';
import { IconButton } from '@/components/buttons/IconButton';
import { ButtonGroup } from '@/components/buttons/ButtonGroup';
import { LoadingButton } from '@/components/buttons/LoadingButton';
import { FiDownload, FiShare2, FiTrash2, FiCheck } from 'react-icons/fi';

export default function ButtonsPage() {
  const [loading, setLoading] = useState(false);

  const handleAsyncClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Container maxWidth="6xl" py="xl">
        <Stack spacing="3xl">
          {/* Header */}
          <Stack spacing="md">
            <h1 className="text-4xl font-black text-neutral-900 dark:text-white">
              Buttons
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Versatile button component with multiple variants, sizes, and states.
            </p>
          </Stack>

          <Divider />

          {/* Variants */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Variants</h2>
            <Grid columns={5} spacing="md">
              <Button variant="solid">Solid</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="link">Link</Button>
            </Grid>
          </Stack>

          <Divider />

          {/* Sizes */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Sizes</h2>
            <HStack spacing="md" align="center">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </HStack>
          </Stack>

          <Divider />

          {/* Color Schemes */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Color Schemes
            </h2>
            <Grid columns={3} spacing="md">
              <Button colorScheme="primary">Primary</Button>
              <Button colorScheme="secondary">Secondary</Button>
              <Button colorScheme="success">Success</Button>
              <Button colorScheme="warning">Warning</Button>
              <Button colorScheme="danger">Danger</Button>
              <Button colorScheme="neutral">Neutral</Button>
            </Grid>
          </Stack>

          <Divider />

          {/* States */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">States</h2>
            <HStack spacing="md">
              <Button>Normal</Button>
              <Button isDisabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <LoadingButton isLoading={loading} onClick={handleAsyncClick}>
                Async Action
              </LoadingButton>
            </HStack>
          </Stack>

          <Divider />

          {/* With Icons */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">With Icons</h2>
            <HStack spacing="md">
              <Button leftIcon={<FiDownload className="h-4 w-4" />}>Download</Button>
              <Button rightIcon={<FiShare2 className="h-4 w-4" />}>Share</Button>
              <Button
                leftIcon={<FiCheck className="h-4 w-4" />}
                rightIcon={<FiShare2 className="h-4 w-4" />}
              >
                Complete
              </Button>
            </HStack>
          </Stack>

          <Divider />

          {/* Full Width */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Full Width</h2>
            <Button fullWidth>Full Width Button</Button>
            <HStack spacing="md">
              <Button fullWidth>Save</Button>
              <Button fullWidth variant="outline">
                Cancel
              </Button>
            </HStack>
          </Stack>

          <Divider />

          {/* Icon Buttons */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Icon Buttons
            </h2>
            <HStack spacing="md" align="center">
              <IconButton icon={<FiDownload />} ariaLabel="Download" />
              <IconButton icon={<FiShare2 />} variant="outline" ariaLabel="Share" />
              <IconButton icon={<FiTrash2 />} colorScheme="danger" ariaLabel="Delete" />
              <IconButton icon={<FiCheck />} colorScheme="success" ariaLabel="Confirm" size="lg" />
            </HStack>
          </Stack>

          <Divider />

          {/* Button Groups */}
          <Stack spacing="lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Button Groups
            </h2>
            <Stack spacing="md">
              <ButtonGroup>
                <Button variant="outline">Left</Button>
                <Button variant="outline">Center</Button>
                <Button variant="outline">Right</Button>
              </ButtonGroup>
              <ButtonGroup orientation="vertical">
                <Button variant="outline" fullWidth>
                  Top
                </Button>
                <Button variant="outline" fullWidth>
                  Middle
                </Button>
                <Button variant="outline" fullWidth>
                  Bottom
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}