import React from "react";

const ModalHistory = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="history__modal">{children}</div>
    </>
  );
};

export default ModalHistory;
