import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/cards';
import { Breadcrumb, BreadcrumbItem } from '../components/breadcrumbs';
import { Stepper, StepperStep, StepperConnector } from '../components/steppers';

const NavigationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: 'Account Info', description: 'Create your account' },
    { label: 'Verify Email', description: 'Verify email address' },
    { label: 'Set Password', description: 'Secure your account' },
    { label: 'Complete', description: 'Done!' },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Navigation Components</h1>

      {/* Breadcrumbs Section */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Breadcrumbs</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Default Breadcrumb</h3>
            <Breadcrumb separator="/">
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/products">Products</BreadcrumbItem>
              <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Laptop</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Breadcrumb with Custom Separator</h3>
            <Breadcrumb separator="→">
              <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
              <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
              <BreadcrumbItem href="/settings/profile">Profile</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Privacy</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Breadcrumb with Max Items</h3>
            <Breadcrumb separator="/" maxItems={3}>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/a">Section A</BreadcrumbItem>
              <BreadcrumbItem href="/b">Section B</BreadcrumbItem>
              <BreadcrumbItem href="/c">Section C</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </CardBody>
      </Card>

      {/* Horizontal Stepper */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Horizontal Stepper</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          <Stepper currentStep={currentStep} orientation="horizontal">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <StepperStep
                  label={step.label}
                  description={step.description}
                  stepNumber={idx + 1}
                  isActive={idx + 1 === currentStep}
                  isCompleted={idx + 1 < currentStep}
                />
                {idx < steps.length - 1 && (
                  <StepperConnector
                    isCompleted={idx + 1 < currentStep}
                    isActive={idx + 1 === currentStep}
                  />
                )}
              </React.Fragment>
            ))}
          </Stepper>

          <div className="flex gap-2 justify-center mt-8">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentStep === step
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Step {step}
              </button>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Vertical Stepper */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Vertical Stepper</h2>
        </CardHeader>
        <CardBody>
          <Stepper currentStep={currentStep} orientation="vertical">
            {steps.map((step, idx) => (
              <StepperStep
                key={idx}
                label={step.label}
                description={step.description}
                stepNumber={idx + 1}
                isActive={idx + 1 === currentStep}
                isCompleted={idx + 1 < currentStep}
                orientation="vertical"
              >
                {step.label === 'Account Info' && currentStep === 1 && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Please fill in your account information
                  </p>
                )}
                {step.label === 'Verify Email' && currentStep === 2 && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Check your email for verification link
                  </p>
                )}
                {step.label === 'Set Password' && currentStep === 3 && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Create a strong password
                  </p>
                )}
                {step.label === 'Complete' && currentStep === 4 && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Your account is ready to use!
                  </p>
                )}
              </StepperStep>
            ))}
          </Stepper>
        </CardBody>
      </Card>
    </div>
  );
};

export default NavigationPage;