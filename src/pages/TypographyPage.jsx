import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Code } from '../components/typography/Code';
import { Kbd } from '../components/typography/Kbd';
import { Mark } from '../components/typography/Mark';
import { Stack } from '../components/layout/Stack';
import { Divider } from '../components/layout/Divider';

function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading size="h4" className="mb-1">{title}</Heading>
        <Divider />
      </div>
      {children}
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Stack gap={10}>
        <div>
          <Heading size="h1" gradient>Typography</Heading>
          <Text color="muted" size="lg" className="mt-2">
            A comprehensive type system built for clarity, hierarchy, and visual rhythm.
          </Text>
        </div>

        <Section title="Headings">
          <Stack gap={4}>
            {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((level) => (
              <div key={level} className="flex items-baseline gap-4">
                <span className="w-8 text-xs font-mono text-gray-400 dark:text-gray-500 flex-shrink-0 uppercase">
                  {level}
                </span>
                <Heading size={level}>The quick brown fox jumps</Heading>
              </div>
            ))}
          </Stack>
        </Section>

        <Section title="Heading Colors">
          <Stack gap={3}>
            {['default', 'primary', 'accent', 'muted', 'danger', 'success'].map((color) => (
              <div key={color} className="flex items-center gap-4">
                <span className="w-20 text-xs font-mono text-gray-400 dark:text-gray-500 capitalize">
                  {color}
                </span>
                <Heading size="h4" color={color}>Zain UI Components</Heading>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <span className="w-20 text-xs font-mono text-gray-400 dark:text-gray-500">gradient</span>
              <Heading size="h4" gradient>Zain UI Components</Heading>
            </div>
          </Stack>
        </Section>

        <Section title="Text Sizes">
          <Stack gap={3}>
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
              <div key={size} className="flex items-baseline gap-4">
                <span className="w-8 text-xs font-mono text-gray-400 dark:text-gray-500 uppercase flex-shrink-0">
                  {size}
                </span>
                <Text size={size}>
                  The quick brown fox jumps over the lazy dog.
                </Text>
              </div>
            ))}
          </Stack>
        </Section>

        <Section title="Text Variants">
          <Stack gap={3}>
            <Text>Normal text — default appearance for body copy and general content.</Text>
            <Text italic>Italic text — used for emphasis, citations, or stylistic variation.</Text>
            <Text underline>Underlined text — draws attention to specific phrases or links.</Text>
            <Text strikethrough>Strikethrough text — indicates removed or deprecated content.</Text>
            <Text weight="bold">Bold text — strong emphasis for critical information.</Text>
            <Text weight="semibold" color="primary">Semibold primary — highlights brand-aligned content.</Text>
            <Text color="muted">Muted text — secondary information with reduced visual weight.</Text>
          </Stack>
        </Section>

        <Section title="Inline Code">
          <Stack gap={3}>
            <Text>
              Use the <Code>cn()</Code> utility to merge Tailwind classes conditionally.
            </Text>
            <Text>
              Import hooks like <Code>useTheme</Code> and <Code>useToast</Code> from their respective modules.
            </Text>
          </Stack>
        </Section>

        <Section title="Code Block">
          <Code variant="block">{`import { Button } from '@zain-ui/core';

function App() {
  return (
    <Button variant="solid" colorScheme="primary" size="md">
      Get Started
    </Button>
  );
}`}</Code>
        </Section>

        <Section title="Keyboard Keys">
          <Stack gap={4}>
            <div className="flex items-center gap-2 flex-wrap">
              <Text size="sm" color="muted">Save:</Text>
              <Kbd>Ctrl</Kbd>
              <Text size="sm" color="muted">+</Text>
              <Kbd>S</Kbd>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Text size="sm" color="muted">Undo:</Text>
              <Kbd>Ctrl</Kbd>
              <Text size="sm" color="muted">+</Text>
              <Kbd>Z</Kbd>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Text size="sm" color="muted">Command Palette:</Text>
              <Kbd>Ctrl</Kbd>
              <Text size="sm" color="muted">+</Text>
              <Kbd>Shift</Kbd>
              <Text size="sm" color="muted">+</Text>
              <Kbd>P</Kbd>
            </div>
          </Stack>
        </Section>

        <Section title="Highlighted Text">
          <Stack gap={3}>
            {['default', 'primary', 'accent', 'success', 'danger'].map((variant) => (
              <Text key={variant}>
                This text contains a{' '}
                <Mark variant={variant}>{variant} highlight</Mark>{' '}
                to draw attention to key information within the sentence.
              </Text>
            ))}
          </Stack>
        </Section>
      </Stack>
    </div>
  );
}