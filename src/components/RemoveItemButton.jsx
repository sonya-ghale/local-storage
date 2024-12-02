import React from "react";

export default function RemoveItemButton({ keyToRemove, onClick }) {
  return (
    <div className="form-group">
      <button onClick={() => onClick(keyToRemove)} className="remove-button">
        Remove "{keyToRemove}" from Local Storage
      </button>
    </div>
  );
}
