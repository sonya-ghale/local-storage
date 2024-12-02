import React from "react";

export default function ClearButton({ onClick }) {
  return (
    <div className="form-group">
      <button onClick={onClick} className="clear-button">
        Clear Local Storage
      </button>
    </div>
  );
}
