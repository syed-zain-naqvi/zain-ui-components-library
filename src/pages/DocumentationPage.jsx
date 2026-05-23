import React from 'react';
import { Link } from 'react-router-dom';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">

      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white dark:bg-neutral-950 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600"
          >
            Zain UI Docs
          </Link>

          <Link
            to="/"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-6">
          Documentation
        </h1>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          Zain UI is a modern React component library built with
          Tailwind CSS, Framer Motion, and reusable production-ready
          components.
        </p>
      </section>

      {/* Installation */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Installation
          </h2>

          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            Install the project dependencies using npm.
          </p>

          <div className="bg-black text-green-400 rounded-xl p-5 overflow-x-auto">
            <code>
              npm install
            </code>
          </div>
        </div>
      </section>

      {/* Run Project */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Run Development Server
          </h2>

          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            Start the Vite development server.
          </p>

          <div className="bg-black text-green-400 rounded-xl p-5 overflow-x-auto">
            <code>
              npm run dev
            </code>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Button Example
          </h2>

          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            Example usage of the Zain UI Button component.
          </p>

          <div className="bg-black text-green-400 rounded-xl p-5 overflow-x-auto text-sm">
            <pre>
              {`import { Button } from '@/components/buttons/Button'

export default function App() {
  return (
    <Button colorScheme="primary">
      Click Me
    </Button>
  )
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Components Overview */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Available Components
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-2">Buttons</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Fully customizable button components with multiple variants and sizes.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-2">Forms</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Reusable input fields, selects, checkboxes, and validation-ready form controls.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-2">Alerts</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Beautiful alert components for success, warning, info, and error states.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-2">Toasts</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Animated toast notifications with auto dismiss support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Features
          </h2>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-500 mt-2"></div>
              <p>Modern React architecture with reusable components</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-500 mt-2"></div>
              <p>Tailwind CSS utility-first styling system</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-500 mt-2"></div>
              <p>Dark mode support with theme switching</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-500 mt-2"></div>
              <p>Framer Motion powered animations</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-500 mt-2"></div>
              <p>Production-ready scalable architecture</p>
            </div>

          </div>
        </div>
      </section>

      {/* Folder Structure */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Project Structure
          </h2>

          <div className="bg-black text-green-400 rounded-xl p-5 overflow-x-auto text-sm">
            <pre>
              {`src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── router.jsx
 ├── App.jsx
 └── main.jsx`}
            </pre>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

          <h2 className="text-3xl font-bold mb-6">
            Import Components
          </h2>

          <div className="bg-black text-green-400 rounded-xl p-5 overflow-x-auto text-sm">
            <pre>
              {`import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/cards/Card'
import { Badge } from '@/components/badges/Badge'

export default function Example() {
  return (
    <Card>
      <Badge>New</Badge>

      <Button colorScheme="primary">
        Get Started
      </Button>
    </Card>
  )
}`}
            </pre>
          </div>
        </div>
      </section>


<section className="max-w-5xl mx-auto px-6 mb-16">
  <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

    <h2 className="text-3xl font-bold mb-6">Installation Guide</h2>

    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
      Clone the project and install dependencies:
    </p>

    <div className="bg-black text-green-400 rounded-xl p-5 mb-4">
      <pre>{`git clone https://github.com/your-repo/zain-ui
cd zain-ui
npm install`}</pre>
    </div>

    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
      Start development server:
    </p>

    <div className="bg-black text-green-400 rounded-xl p-5">
      <pre>{`npm run dev`}</pre>
    </div>

  </div>
</section>


<section className="max-w-5xl mx-auto px-6 mb-16">
  <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

    <h2 className="text-3xl font-bold mb-6">Theming System</h2>

    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
      Zain UI supports light and dark mode using context-based theme switching.
    </p>

    <div className="bg-black text-green-400 rounded-xl p-5 text-sm">
      <pre>{`const { mode, toggleMode } = useTheme()

<Button onClick={toggleMode}>
  Toggle Theme
</Button>`}</pre>
    </div>

  </div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-16">
  <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

    <h2 className="text-3xl font-bold mb-6">Button API</h2>

    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-neutral-300 dark:border-neutral-700">
          <th className="py-2">Prop</th>
          <th className="py-2">Type</th>
          <th className="py-2">Description</th>
        </tr>
      </thead>
      <tbody className="text-neutral-600 dark:text-neutral-400">
        <tr>
          <td className="py-2">variant</td>
          <td>string</td>
          <td>primary | outline | ghost</td>
        </tr>
        <tr>
          <td className="py-2">size</td>
          <td>string</td>
          <td>sm | md | lg</td>
        </tr>
        <tr>
          <td className="py-2">disabled</td>
          <td>boolean</td>
          <td>Disable button interaction</td>
        </tr>
      </tbody>
    </table>

  </div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-20">
  <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50 dark:bg-neutral-900">

    <h2 className="text-3xl font-bold mb-6">Best Practices</h2>

    <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
      <li>✔ Always use reusable components instead of raw HTML</li>
      <li>✔ Keep UI consistent using design tokens</li>
      <li>✔ Use theme context for dark/light mode</li>
      <li>✔ Avoid inline styles, use Tailwind classes</li>
      <li>✔ Keep components small and reusable</li>
    </ul>

  </div>
</section>



      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 text-center text-neutral-500 dark:text-neutral-400">
        © 2026 Zain UI Documentation
      </footer>
    </div>
  );
}