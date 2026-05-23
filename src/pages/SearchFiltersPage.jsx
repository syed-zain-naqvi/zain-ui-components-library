import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardBody } from '../components/cards';
import { SearchInput, useSearch } from '../components/search';
import { FilterBar, FilterButton, useFilter } from '../components/filters';
import { SortButton, useSortOptions } from '../components/sorting';
import { ExportButton } from '../components/export';
import { Pagination, usePagination } from '../components/pagination';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '../components/tables';
import { useNotification, NotificationStack } from '../components/notifications';

const sampleData = [
  {
    id: 1,
    name: 'you',
    email: 'you@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'you',
    email: 'you@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'you',
    email: 'you@example.com',
    role: 'Editor',
    status: 'Inactive',
    joinDate: '2023-03-10',
  },
  {
    id: 4,
    name: 'you',
    email: 'you@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2023-04-05',
  },
  {
    id: 5,
    name: 'you',
    email: 'you@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-05-12',
  },
  {
    id: 6,
    name: 'you',
    email: 'you@example.com',
    role: 'User',
    status: 'Inactive',
    joinDate: '2023-06-08',
  },
  {
    id: 7,
    name: 'you',
    email: 'you@example.com',
    role: 'Editor',
    status: 'Active',
    joinDate: '2023-07-22',
  },
  {
    id: 8,
    name: 'you',
    email: 'you@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2023-08-30',
  },
];

const SearchFiltersPage = () => {
  const { notifications, removeNotification, success, error } = useNotification();
  const { searchTerm, results, handleSearch } = useSearch(
    sampleData,
    ['name', 'email', 'role']
  );
  const { filters, setFilter, clearAllFilters } = useFilter();
  const { sortedItems, handleSort } = useSortOptions(results);
  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(
    sortedItems,
    4
  );

  const filterOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'editor', label: 'Editor' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Name', order: 'asc' },
    { value: 'email', label: 'Email', order: 'asc' },
    { value: 'joinDate', label: 'Join Date', order: 'desc', divider: true },
  ];

  const handleFilterSelect = (option) => {
    const currentFilter = filters.role;
    if (currentFilter === option.value) {
      setFilter('role', null);
    } else {
      setFilter('role', option.value);
    }
  };

  const filteredData = useMemo(() => {
    let filtered = sortedItems;

    if (filters.role) {
      filtered = filtered.filter((item) =>
        item.role.toLowerCase() === filters.role.toLowerCase()
      );
    }

    return filtered;
  }, [sortedItems, filters]);

  const handleExport = (format) => {
    success(`Exported ${filteredData.length} records as ${format.toUpperCase()}`);
  };

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Search, Filter & Sort
      </h1>

      <NotificationStack
        notifications={notifications}
        position="top-right"
        onClose={removeNotification}
      />

      {/* Controls Card */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Data Controls
          </h2>
        </CardHeader>
        <CardBody className="space-y-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <SearchInput
              placeholder="Search by name, email, or role..."
              onSearch={handleSearch}
              debounceDelay={300}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Found {results.length} results
            </p>
          </div>

          {/* Filters & Sort Controls */}
          <div className="flex flex-wrap gap-3 items-end">
            <FilterButton
              label="Role"
              options={filterOptions}
              onSelect={handleFilterSelect}
            />
            <SortButton
              label="Sort By"
              options={sortOptions}
              onSort={handleSort}
            />
            <ExportButton
              label="Export"
              data={filteredData}
              fileName="users"
              onExport={handleExport}
            />
          </div>

          {/* Active Filters */}
          {Object.keys(filters).length > 0 && (
            <FilterBar
              activeFilters={filters}
              onFilterChange={setFilter}
              onClearAll={clearAllFilters}
            />
          )}
        </CardBody>
      </Card>

      {/* Results Table */}
      <Card elevation="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Results ({filteredData.length} total)
          </h2>
        </CardHeader>
        <CardBody padding="none">
          {filteredData.length > 0 ? (
            <>
              <Table responsive striped hover>
                <TableHeader>
                  <TableRow isHeader>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead align="center">Role</TableHead>
                    <TableHead align="center">Status</TableHead>
                    <TableHead>Join Date</TableHead>
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
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}
                        >
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.joinDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <p className="text-lg">No results found.</p>
              <p className="text-sm">Try adjusting your search or filters.</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchFiltersPage;