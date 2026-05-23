import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Button } from '../components/buttons';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useModalState } from '../components/modals';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider } from '../components/dropdowns';
import { Popover, PopoverTrigger, PopoverContent } from '../components/popovers';
import { Tooltip } from '../components/tooltips';
import { Badge } from '../components/badges';

const ModalsPage = () => {
  const { isDark } = useTheme();
  const basicModal = useModalState();
  const largeModal = useModalState();
  const formModal = useModalState();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    formModal.onClose();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className={`border-b transition-colors ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Modals & Overlays
          </h1>
          <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore modals, dropdowns, popovers, and tooltips.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Modals Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Modals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Modal */}
            <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Basic Modal
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Simple modal dialog with header, body, and footer.
              </p>
              <Button onClick={basicModal.onOpen}>Open Modal</Button>

              <Modal isOpen={basicModal.isOpen} onClose={basicModal.onClose} size="md">
                <ModalHeader>
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Modal Title
                  </h2>
                  <ModalCloseButton onClick={basicModal.onClose} />
                </ModalHeader>
                <ModalBody>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    This is a basic modal component. You can add any content here including text, forms, images, or other components.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={basicModal.onClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={basicModal.onClose}>
                    Confirm
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            {/* Large Modal */}
            <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Large Modal
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Larger modal for displaying more content.
              </p>
              <Button onClick={largeModal.onOpen}>Open Large</Button>

              <Modal isOpen={largeModal.isOpen} onClose={largeModal.onClose} size="2xl">
                <ModalHeader>
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Large Modal Title
                  </h2>
                  <ModalCloseButton onClick={largeModal.onClose} />
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className={`p-4 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Content Item {item}
                        </p>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          Additional details for item {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={largeModal.onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            {/* Form Modal */}
            <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Form Modal
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Modal containing a form with validation.
              </p>
              <Button onClick={formModal.onOpen}>Open Form</Button>

              <Modal isOpen={formModal.isOpen} onClose={formModal.onClose} size="md">
                <ModalHeader>
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Submit Information
                  </h2>
                  <ModalCloseButton onClick={formModal.onClose} />
                </ModalHeader>
                <form onSubmit={handleFormSubmit}>
                  <ModalBody>
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Enter your name"
                          className={`w-full px-3 py-2 border rounded-md ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="Enter your email"
                          className={`w-full px-3 py-2 border rounded-md ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="button" variant="secondary" onClick={formModal.onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </ModalFooter>
                </form>
              </Modal>
            </div>
          </div>
        </div>

        {/* Dropdowns Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Dropdowns
          </h2>
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Click to open dropdown menus with various options.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Dropdown isOpen={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownTrigger>
                  <span>Actions</span>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem onClick={() => console.log('Edit')}>Edit</DropdownItem>
                  <DropdownItem onClick={() => console.log('Duplicate')}>Duplicate</DropdownItem>
                  <DropdownItem onClick={() => console.log('Archive')}>Archive</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem onClick={() => console.log('Delete')}>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <span>Sort by</span>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem onClick={() => console.log('Name')}>Name</DropdownItem>
                  <DropdownItem onClick={() => console.log('Date')}>Date</DropdownItem>
                  <DropdownItem onClick={() => console.log('Size')}>Size</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* Popovers Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Popovers
          </h2>
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Hover or click to show additional information.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Popover isOpen={popoverOpen} onOpenChange={setPopoverOpen} trigger="click">
                <PopoverTrigger>
                  <Button>Click Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Popover Title
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    This is a popover with additional information that appears on demand.
                  </p>
                </PopoverContent>
              </Popover>

              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button variant="secondary">Hover Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Hover Information
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    This popover appears on hover for quick previews.
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Tooltips Section */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Tooltips
          </h2>
          <div className={`rounded-lg p-6 transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Hover over elements to see tooltips.
            </p>
            <div className="flex gap-4 flex-wrap items-center">
              <Tooltip label="This is a top tooltip">
                <Button>Top Tooltip</Button>
              </Tooltip>

              <Tooltip label="This appears at the bottom" placement="bottom">
                <Button variant="secondary">Bottom Tooltip</Button>
              </Tooltip>

              <Tooltip label="Left side tooltip" placement="left">
                <Button variant="success">Left Tooltip</Button>
              </Tooltip>

              <Tooltip label="Right side tooltip" placement="right">
                <Button variant="danger">Right Tooltip</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalsPage;
