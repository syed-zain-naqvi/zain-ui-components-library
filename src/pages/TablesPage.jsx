import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/cards';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  useTableSort,
  useTableFilter,
} from '../components/tables';
import { List, ListItem, ListItemIcon } from '../components/lists';
import { Pagination, usePagination } from '../components/pagination';
import { Button } from '../components/buttons';

const sampleData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'User', status: 'Active' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Active' },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'Inactive' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Active' },
  { id: 8, name: 'Henry Clark', email: 'henry@example.com', role: 'User', status: 'Active' },
];

const TablesPage = () => {
  const { sortKey, sortDirection, sortedData, handleSort } = useTableSort(sampleData);
  const { filteredData, addFilter, removeFilter } = useTableFilter(sortedData);
  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(
    filteredData,
    5
  );

  const handleNameFilter = (e) => {
    const value = e.target.value;
    if (value) {
      addFilter('name', value);
    } else {
      removeFilter('name');
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Tables, Cards & Lists</h1>

      {/* Tables Section */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management Table</h2>
        </CardHeader>
        <CardBody padding="none">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Filter by name..."
              onChange={handleNameFilter}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Table responsive striped hover>
            <TableHeader>
              <TableRow isHeader>
                <TableHead
                  sortable
                  sortDirection={sortKey === 'name' ? sortDirection : null}
                  onSort={() => handleSort('name')}
                >
                  Name
                </TableHead>
                <TableHead
                  sortable
                  sortDirection={sortKey === 'email' ? sortDirection : null}
                  onSort={() => handleSort('email')}
                >
                  Email
                </TableHead>
                <TableHead align="center">Role</TableHead>
                <TableHead align="center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell align="center">{item.role}</TableCell>
                  <TableCell align="center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </CardFooter>
      </Card>

      {/* Cards Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { variant: 'default', elevation: 'md', title: 'Default Card' },
            { variant: 'outlined', elevation: 'sm', title: 'Outlined Card' },
            { variant: 'filled', elevation: 'lg', title: 'Filled Card' },
          ].map((config) => (
            <Card key={config.variant} variant={config.variant} elevation={config.elevation}>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {config.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 dark:text-gray-300">
                  This is a {config.variant} card with {config.elevation} elevation.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm">
                  Action
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card elevation="md">
          <CardHeader>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Unordered List</h2>
          </CardHeader>
          <CardBody>
            <List variant="default" spacing="md">
              <ListItem icon="✓">Feature one</ListItem>
              <ListItem icon="✓">Feature two</ListItem>
              <ListItem icon="✓">Feature three</ListItem>
              <ListItem icon="✓">Feature four</ListItem>
            </List>
          </CardBody>
        </Card>

        <Card elevation="md">
          <CardHeader>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ordered List</h2>
          </CardHeader>
          <CardBody>
            <List ordered variant="default" spacing="md">
              <ListItem>Step one: Initialize</ListItem>
              <ListItem>Step two: Configure</ListItem>
              <ListItem>Step three: Deploy</ListItem>
              <ListItem>Step four: Monitor</ListItem>
            </List>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default TablesPage;