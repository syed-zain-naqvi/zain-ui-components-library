import { useState } from 'react';
import { Heading } from '../components/typography/Heading';
import { Text } from '../components/typography/Text';
import { Divider } from '../components/layout/Divider';
import { Stack } from '../components/layout/Stack';
import { TextInput } from '../components/forms/TextInput';
import { Textarea } from '../components/forms/Textarea';
import { SelectInput } from '../components/forms/SelectInput';
import { Checkbox } from '../components/forms/Checkbox';
import { CheckboxGroup } from '../components/forms/CheckboxGroup';
import { RadioGroup } from '../components/forms/RadioGroup';
import { Switch } from '../components/forms/Switch';
import { Slider } from '../components/forms/Slider';
import { DatePicker } from '../components/forms/DatePicker';
import { FileUpload } from '../components/forms/FileUpload';
import { FormGroup } from '../components/forms/FormGroup';

function Section({ title, description, children }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Heading size="h4" className="mb-0.5">{title}</Heading>
        {description && <Text color="muted" size="sm">{description}</Text>}
        <Divider className="mt-3" />
      </div>
      {children}
    </div>
  );
}

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
];

const techOptions = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'docker', label: 'Docker' },
];

export default function FormsPage() {
  const [textValue, setTextValue] = useState('');
  const [sliderValue, setSliderValue] = useState(40);
  const [switchOn, setSwitchOn] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(true);
  const [notifOn, setNotifOn] = useState(false);
  const [checkedTechs, setCheckedTechs] = useState(['typescript', 'tailwind']);
  const [selectedFramework, setSelectedFramework] = useState('react');
  const [selectedSize, setSelectedSize] = useState('md');

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Stack gap={12}>
        <div>
          <Heading size="h1" gradient>Form Components</Heading>
          <Text color="muted" size="lg" className="mt-2">
            Fully accessible, themeable form primitives built for production.
          </Text>
        </div>

        <Section title="Text Inputs" description="Basic text input with sizes, states, and adornments.">
          <FormGroup>
            <TextInput
              label="Username"
              placeholder="you"
              helperText="This will be your public display name."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
            <FormGroup orientation="horizontal">
              <TextInput label="First Name" placeholder="you" size="sm" />
              <TextInput label="Last Name" placeholder="you" size="sm" />
            </FormGroup>
            <TextInput
              label="Email"
              type="email"
              placeholder="you@example.com"
              isRequired
              leftElement={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <TextInput
              label="Error State"
              placeholder="Enter a value"
              isInvalid
              errorMessage="This field is required and cannot be empty."
              value=""
            />
            <TextInput
              label="Disabled Input"
              placeholder="Cannot edit this"
              isDisabled
              value="Locked value"
            />
          </FormGroup>
        </Section>

        <Section title="Textarea" description="Multiline text input with resize options.">
          <FormGroup>
            <Textarea
              label="Description"
              placeholder="Write a brief description..."
              helperText="Maximum 500 characters."
              rows={4}
            />
            <Textarea
              label="Error State"
              placeholder="Required field"
              isInvalid
              errorMessage="Description cannot be empty."
              rows={3}
            />
          </FormGroup>
        </Section>

        <Section title="Select" description="Styled dropdown select component.">
          <FormGroup>
            <SelectInput
              label="Framework"
              options={frameworks}
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              helperText="Choose your primary front-end framework."
            />
            <SelectInput
              label="Size (sm)"
              options={frameworks}
              size="sm"
            />
            <SelectInput
              label="Invalid state"
              options={frameworks}
              isInvalid
              errorMessage="Please select a valid option."
            />
          </FormGroup>
        </Section>

        <Section title="Checkboxes" description="Individual checkboxes and checkbox groups.">
          <FormGroup>
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Disabled option" isDisabled />
            <CheckboxGroup
              label="Technologies Used"
              options={techOptions}
              value={checkedTechs}
              onChange={setCheckedTechs}
              helperText="Select all that apply to your project."
            />
            <CheckboxGroup
              label="Horizontal Layout"
              options={techOptions.slice(0, 3)}
              value={[]}
              onChange={() => {}}
              orientation="horizontal"
            />
          </FormGroup>
        </Section>

        <Section title="Radio Group" description="Single selection from a list of options.">
          <FormGroup>
            <RadioGroup
              label="Component Size"
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              value={selectedSize}
              onChange={setSelectedSize}
              helperText="Controls the size of all form elements."
            />
            <RadioGroup
              label="Horizontal Layout"
              options={[
                { value: 'left', label: 'Left' },
                { value: 'center', label: 'Center' },
                { value: 'right', label: 'Right' },
              ]}
              value="center"
              onChange={() => {}}
              orientation="horizontal"
            />
          </FormGroup>
        </Section>

        <Section title="Switch" description="Toggle binary states with an accessible switch.">
          <FormGroup gap="sm">
            <Switch
              label="Enable feature"
              checked={switchOn}
              onChange={(e) => setSwitchOn(e.target.checked)}
            />
            <Switch
              label="Dark mode"
              checked={darkModeOn}
              onChange={(e) => setDarkModeOn(e.target.checked)}
              colorScheme="accent"
            />
            <Switch
              label="Notifications"
              checked={notifOn}
              onChange={(e) => setNotifOn(e.target.checked)}
              colorScheme="success"
              helperText="Receive email and push notifications."
            />
            <Switch label="Disabled" checked={false} onChange={() => {}} isDisabled />
          </FormGroup>
        </Section>

        <Section title="Slider" description="Range input for numeric value selection.">
          <FormGroup>
            <Slider
              label="Volume"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              showValue
              showMinMax
              helperText="Adjust the output volume level."
            />
            <Slider
              label="Opacity"
              min={0}
              max={1}
              step={0.01}
              value={0.75}
              onChange={() => {}}
              showValue
              colorScheme="accent"
            />
          </FormGroup>
        </Section>

        <Section title="Date Picker" description="Native date, time, and datetime-local inputs.">
          <FormGroup orientation="horizontal">
            <DatePicker label="Date" type="date" />
            <DatePicker label="Time" type="time" />
            <DatePicker label="Date & Time" type="datetime-local" />
          </FormGroup>
        </Section>

        <Section title="File Upload" description="Drag and drop or click to upload files.">
          <FileUpload
            label="Project Files"
            accept=".pdf,.doc,.docx,.png,.jpg"
            multiple
            maxSize={5 * 1024 * 1024}
            helperText="Supports PDF, DOC, and images up to 5 MB each."
          />
        </Section>
      </Stack>
    </div>
  );
}