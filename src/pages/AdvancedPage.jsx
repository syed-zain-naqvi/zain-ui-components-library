import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/cards';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '../components/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '../components/accordions';
import { Modal, ModalHeader, ModalBody, ModalFooter, useModalState } from '../components/modals';
import { Button } from '../components/buttons';

const AdvancedPage = () => {
  const modalState = useModalState();
  const [accordionDefault] = useState(0);

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Advanced Components
      </h1>

      {/* Tabs Section */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tabs</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          {/* Default Variant */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Default Tabs
            </h3>
            <Tabs defaultIndex={0} variant="default">
              <TabList variant="default">
                <Tab tabIndex={0} icon="📄">
                  Overview
                </Tab>
                <Tab tabIndex={1} icon="⚙️">
                  Settings
                </Tab>
                <Tab tabIndex={2} icon="🔐">
                  Security
                </Tab>
              </TabList>
              <TabPanels selectedIndex={0} className="mt-4">
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    This is the overview tab content with information about the
                    system.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    Manage your settings and preferences here.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    Review your security settings and configure authentication.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          {/* Pills Variant */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Pill Tabs
            </h3>
            <Tabs defaultIndex={1} variant="pills">
              <TabList variant="pills">
                <Tab tabIndex={0} icon="🎯">
                  Performance
                </Tab>
                <Tab tabIndex={1} icon="📊">
                  Analytics
                </Tab>
                <Tab tabIndex={2} icon="📈">
                  Reports
                </Tab>
              </TabList>
              <TabPanels selectedIndex={1} className="mt-4">
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    Performance metrics and real-time data.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    Detailed analytics and insights about your usage.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className="text-gray-700 dark:text-gray-300">
                    Generate and download comprehensive reports.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </CardBody>
      </Card>

      {/* Accordions Section */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Accordions
          </h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Single Expand
            </h3>
            <Accordion allowMultiple={false} defaultIndex={accordionDefault}>
              <AccordionItem>
                <AccordionButton>What is this component?</AccordionButton>
                <AccordionPanel>
                  This is an accordion component that allows users to expand and collapse
                  sections of content. It's useful for organizing large amounts of
                  information.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>How do I use it?</AccordionButton>
                <AccordionPanel>
                  Simply wrap your items in the Accordion component, and use
                  AccordionItem, AccordionButton, and AccordionPanel to structure your
                  content.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>Can I customize it?</AccordionButton>
                <AccordionPanel>
                  Yes! The accordion supports various props for customization including
                  styling, animations, and behavior configuration.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>Is it accessible?</AccordionButton>
                <AccordionPanel>
                  Absolutely! The accordion includes proper ARIA attributes and keyboard
                  navigation support for accessibility compliance.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Multiple Expand
            </h3>
            <Accordion allowMultiple={true}>
              <AccordionItem>
                <AccordionButton>Feature 1: Easy Integration</AccordionButton>
                <AccordionPanel>
                  Drop-in replacement for standard accordion components with minimal
                  setup required.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>Feature 2: Responsive Design</AccordionButton>
                <AccordionPanel>
                  Fully responsive and mobile-friendly with touch-optimized interactions.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>Feature 3: Customizable Animations</AccordionButton>
                <AccordionPanel>
                  Control animation timing and easing with configurable props.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </CardBody>
      </Card>

      {/* Modal Example */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Modals in Action
          </h2>
        </CardHeader>
        <CardBody>
          <Button onClick={modalState.onOpen} variant="primary">
            Open Modal
          </Button>

          <Modal isOpen={modalState.isOpen} onClose={modalState.onClose}>
            <ModalHeader>Welcome</ModalHeader>
            <ModalBody>
              <p className="text-gray-700 dark:text-gray-300">
                This is a modal dialog component. It appears on top of the page content
                and requires user interaction before continuing.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={modalState.onClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={modalState.onClose}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdvancedPage;