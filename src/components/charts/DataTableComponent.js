import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDarkMode } from '../../context/DarkModeContext';
import { Plus } from 'lucide-react';

export function DataTableComponent({ title, columns, data }) {
  const [filterText, setFilterText] = useState('');
  const { isDarkMode } = useDarkMode();

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

  const customStyles = {
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

  const paginationComponentOptions = {
    rowsPerPageText: '',
    rangeSeparatorText: '',
    noRowsPerPage: true,
  };

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
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          className={`px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            isDarkMode ? 'bg-neutral-700 text-neutral-200 border-neutral-600' : 'bg-white text-neutral-900'
          }`}
        />
      </div>

      <div className={`rounded-b-lg overflow-hidden border-2 ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'}`}>
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
          highlightOnHover
          customStyles={customStyles}
          paginationPerPage={10}
          paginationComponentOptions={paginationComponentOptions}
          selectableRowsComponent={props => (
            <div className="checkbox-container">
              <input
                type="checkbox"
                {...props}
                className="checkbox"
              />
              {props.checked && (
                <Plus className="checkbox-icon" />
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default DataTableComponent;