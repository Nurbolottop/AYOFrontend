import { useState, useEffect } from "react";

const useModal = () => {
  const [modals, setModals] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const toggleModal = (id) => {
    setModals((prev) => {
      const newModals = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      const isActive = !prev[id];
      if (isActive) {
        setActiveButton(id);
      } else {
        setActiveButton(null);
      }

      return { ...newModals, [id]: isActive };
    });
  };

  const openModal = (id) => {
    setModals((prev) => ({ ...prev, [id]: true }));
    setActiveButton(id);
  };

  const closeModal = (id) => {
    setModals((prev) => ({ ...prev, [id]: false }));
    setActiveButton(null);
  };

  const closeAllModals = () => {
    setModals({});
    setActiveButton(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeAllModals();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return {
    modals,
    activeButton,
    toggleModal,
    openModal,
    closeModal,
  };
};

export default useModal;
