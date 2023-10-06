import { useState } from 'react';

function useSidebarHover() {
  // State to track whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle mouse enter event
  const handleSidebarOpen = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Return the state and event handlers
  return {
    isSidebarOpen,
    handleSidebarOpen,
  };
}

export default useSidebarHover;