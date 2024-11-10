import React from 'react';
import { Edit, Trash, Info } from 'lucide-react';

export function ActionButtons({
  onEdit,
  onDelete,
  onInfo,
  showEdit = true,
  showDelete = true,
  showInfo = true,
}) {

  return (
    <div className="flex space-x-4">
      {showInfo && (
        <button onClick={onInfo} className="text-green-500 hover:text-green-700">
          <Info className="h-4 w-4" />
        </button>
      )}
      {showEdit && (
        <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
          <Edit className="h-4 w-4" />
        </button>
      )}
      {showDelete && (
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          <Trash className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}