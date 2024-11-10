import React, { useState, forwardRef } from 'react';
import DataTable from 'react-data-table-component';
import { useDarkMode } from '../../context/DarkModeContext';
import { Plus } from 'lucide-react';

/**
 * DataTableComponent renders a data table with optional features such as pagination, row selection, and search functionality.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the data table.
 * @param {Array} props.columns - The columns configuration for the data table.
 * @param {Array} props.data - The data to be displayed in the table.
 * @param {boolean} [props.pagination=true] - Whether to enable pagination.
 * @param {boolean} [props.selectableRows=false] - Whether to enable row selection.
 * @param {Object} [props.customStyles={}] - Custom styles for the data table.
 * @param {number} [props.paginationPerPage=10] - Number of rows per page for pagination.
 * @param {Object} [props.paginationComponentOptions={}] - Custom options for the pagination component.
 * @param {Function} [props.onRowSelected] - Callback function when a row is selected.
 * @param {boolean} [props.searchable=true] - Whether to enable the search functionality.
 * @returns {JSX.Element} The rendered data table component.
 */
export function DataTableComponent({
  title,
  columns,
  data,
  pagination = true,
  selectableRows = false,
  customStyles = {},
  paginationPerPage = 10,
  paginationComponentOptions = {},
  onRowSelected,
  searchable = true,
}) {
  const { isDarkMode } = useDarkMode();
  const [searchText, setSearchText] = useState('');

  const darkModeColors = {
    background: '#1f2937',
    text: '#e5e7eb',
    border: '#374151',
    hoverBackground: '#4b5563',
    paginationBackground: '#111827',
    paginationHoverBackground: '#4b5563',
    paginationDisabledColor: '#6b7280',
  };

  const lightModeColors = {
    background: '#ffffff',
    text: '#111827',
    border: '#d1d5db',
    hoverBackground: '#f3f4f6',
    paginationBackground: '#f3f4f6',
    paginationHoverBackground: '#d1d5db',
    paginationDisabledColor: '#9ca3af',
  };

  const colors = isDarkMode ? darkModeColors : lightModeColors;

  const defaultStyles = {
    table: {
      style: {
        backgroundColor: 'transparent',
      },
    },
    headRow: {
      style: {
        backgroundColor: colors.paginationBackground,
        borderBottom: `1px solid ${colors.border}`,
      },
    },
    headCells: {
      style: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: colors.text,
      },
    },
    rows: {
      style: {
        backgroundColor: colors.background,
        color: colors.text,
      },
      highlightOnHoverStyle: {
        backgroundColor: colors.hoverBackground,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        color: colors.text,
        outline: 'none',
      },
    },
    pagination: {
      style: {
        backgroundColor: colors.paginationBackground,
        color: colors.text,
        fontSize: '0.75rem',
        minHeight: '52px',
        justifyContent: 'space-between',
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        margin: '0 4px',
        color: colors.text,
        fill: colors.text,
        backgroundColor: colors.paginationBackground,
        '&:hover': {
          backgroundColor: colors.paginationHoverBackground,
        },
        '&:disabled': {
          cursor: 'not-allowed',
          color: colors.paginationDisabledColor,
          fill: colors.paginationDisabledColor,
        },
      },
    },
  };

  const mergedStyles = { ...defaultStyles, ...customStyles };

  const defaultPaginationComponentOptions = {
    rowsPerPageText: '',
    rangeSeparatorText: '',
    noRowsPerPage: true,
  };

  const mergedPaginationComponentOptions = { ...defaultPaginationComponentOptions, ...paginationComponentOptions };

  const filteredData = data.filter(item =>
    columns.some(column => {
      if (typeof column.selector !== 'function') {
        return false;
      }
      const value = column.selector(item);
      return value && value.toString().toLowerCase().includes(searchText.toLowerCase());
    })
  );

  const SelectableRowsComponent = forwardRef((props, ref) => (
    <div className="checkbox-container">
      <input
        type="checkbox"
        ref={ref}
        {...props}
        className="checkbox"
      />
      {props.checked && (
        <Plus className="checkbox-icon" />
      )}
    </div>
  ));

  return (
    <div className="relative overflow-x-auto">
      <div className={`flex items-center justify-between p-3 ${
          isDarkMode ? 'bg-neutral-900 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
        } border-t-2 border-r-2 border-l-2 rounded-t-lg`}
      >
        {title && (
          <h2 className={`pl-2 text-lg font-semibold ${isDarkMode ? 'text-neutral-200' : 'text-neutral-900'}`}>
            {title}
          </h2>
        )}
        {searchable && (
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={`px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              isDarkMode ? 'bg-neutral-700 text-neutral-200 border-neutral-600' : 'bg-white text-neutral-900'
            }`}
          />
        )}
      </div>

      <div className={`rounded-b-lg overflow-hidden border-2 ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'}`}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination={pagination}
          selectableRows={selectableRows}
          highlightOnHover={true}
          customStyles={mergedStyles}
          paginationPerPage={paginationPerPage}
          paginationComponentOptions={mergedPaginationComponentOptions}
          onSelectedRowsChange={onRowSelected}
          selectableRowsComponent={SelectableRowsComponent}
        />
      </div>
    </div>
  );
}

export default DataTableComponent;