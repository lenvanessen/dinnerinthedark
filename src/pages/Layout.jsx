
import React from "react";

export default function Layout({ children, currentPageName }) {
  // Public layout without authentication required
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
