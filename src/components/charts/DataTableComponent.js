import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDarkMode } from '../../context/DarkModeContext';
import colors from '../../theme/colors'; // Renommer cette importation pour éviter le conflit

export function DataTableComponent({ title, columns, data }) {
  const [filterText, setFilterText] = useState('');
  const { isDarkMode } = useDarkMode();
  const themeColors = isDarkMode ? colors.darkMode : colors.lightMode; // Utiliser `colors` au lieu de `themeColors`

  const customStyles = {
    table: {
      style: {
        backgroundColor: 'transparent',
      },
    },
    headRow: {
      style: {
        backgroundColor: themeColors.headerBackground,
        borderBottom: `1px solid ${themeColors.headerBorder}`,
      },
    },
    headCells: {
      style: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: themeColors.text,
      },
    },
    rows: {
      style: {
        backgroundColor: themeColors.background,
        color: themeColors.text,
      },
      highlightOnHoverStyle: {
        backgroundColor: themeColors.hoverBackground,
        borderTop: `1px solid ${themeColors.border}`,
        borderBottom: `1px solid ${themeColors.border}`,
        color: themeColors.text,
        outline: 'none',
      },
    },
    pagination: {
      style: {
        backgroundColor: themeColors.paginationBackground,
        color: themeColors.paginationText,
        fontSize: '0.75rem',
        minHeight: '52px',
      },
    },
  };

  return (
    <div className="relative overflow-x-auto">
      {/* Titre avec effet d'ombre */}
      <div
        className={`flex items-center justify-between p-2 ${
          isDarkMode ? 'bg-neutral-900 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
        } border rounded-lg`}
      >
        {title && (
          <h2
            className={`pl-2 text-lg font-semibold ${
              isDarkMode ? 'text-neutral-200' : 'text-neutral-900'
            }`}
          >
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

      {/* Espacement entre le titre et le tableau */}
      <div className="mt-2" />

      {/* Conteneur de la table avec effet d'ombre, bordure arrondie et overflow caché */}
      <div
        className={`rounded-lg overflow-hidden ${
          isDarkMode ? 'border border-neutral-700' : 'border border-neutral-300'
        }`}
      >
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
          highlightOnHover
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default DataTableComponent;
